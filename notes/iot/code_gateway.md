//arch/arm/include/asm/termbits.h  

//struct termios {  
//	tcflag_t c_iflag;       /* input mode flags */  
//	tcflag_t c_oflag;       /* output mode flags */  
//	tcflag_t c_cflag;       /* control mode flags */  
//	tcflag_t c_lflag;       /* local mode flags */  
//	cc_t c_line;            /* line discipline */  
//	cc_t c_cc[NCCS];        /* control characters */  
//};  
////串口的设置主要是设置struct termios结构体的各成员  
/**
 *s3c6410 serial_test
 *测试的时候应用程序在后台运行./serial_test &
 */
#include <stdio.h>  
#include <stdlib.h>  
#include <unistd.h>  
#include <sys/types.h>  
#include <sys/stat.h>  
#include <fcntl.h> //文件控制定义  
#include <termios.h>//终端控制定义  
#include <errno.h>  
 //Linux连接CC2530串口的设备
 //210:
#define DEVICE "/dev/ttySAC0"  

typedef unsigned char uint8;

typedef struct {
	uint8 Header_1;
	uint8 Header_2;
	uint8 NodeSeq; //模块序列 
	uint8 NodeID; //模块ID （00表示网关） 节点
	uint8 Command;
	uint8 Data[10];
	uint8 Tailer;
}UART_Format;


//串口的文件描述符
int serial_fd = 0;

//打开串口并初始化设置  
init_serial(void)
{
	serial_fd = open(DEVICE, O_RDWR | O_NOCTTY | O_NDELAY);
	if (serial_fd < 0) {
		perror("open");
		return -1;
	}

	//串口主要设置结构体termios <termios.h>  
	struct termios options;

	/**1. tcgetattr函数用于获取与终端相关的参数。
	 *参数fd为终端的文件描述符，返回的结果保存在termios结构体中
	 */
	tcgetattr(serial_fd, &options);
	/**2. 修改所获得的参数*/
	options.c_cflag |= (CLOCAL | CREAD);//设置控制模式状态，本地连接，接收使能  
	options.c_cflag &= ~CSIZE;//字符长度，设置数据位之前一定要屏掉这个位  
	options.c_cflag &= ~CRTSCTS;//无硬件流控  
	options.c_cflag |= CS8;//8位数据长度  
	options.c_cflag &= ~CSTOPB;//1位停止位  
	options.c_iflag |= IGNPAR;//无奇偶检验位  
	options.c_oflag = 0; //输出模式  
	options.c_lflag = 0; //不激活终端模式  
	cfsetospeed(&options, B115200);//设置波特率  

	/**3. 设置新属性，TCSANOW：所有改变立即生效*/
	tcflush(serial_fd, TCIFLUSH);//溢出数据可以接收，但不读  
	tcsetattr(serial_fd, TCSANOW, &options);

	return 0;
}

/**
 *串口发送数据
 *@fd:串口描述符
 *@data:待发送数据
 *@datalen:数据长度
 */
int uart_send(char* data, int datalen)
{
	int fd = serial_fd;
	int len = 0;
	len = write(fd, data, datalen);//实际写入的长度  
	if (len == datalen) {
		return len;
	}
	else {
		tcflush(fd, TCOFLUSH);//TCOFLUSH刷新写入的数据但不传送  
		return -1;
	}

	return 0;
}

/**
 *串口接收数据
 */
int uart_recv(char* data, int datalen)
{
	int fd = serial_fd;
	int len = 0, ret = 0;
	fd_set fs_read;
	struct timeval tv_timeout;

	FD_ZERO(&fs_read);
	FD_SET(fd, &fs_read);
	tv_timeout.tv_sec = (10 * 20 / 115200 + 2);
	tv_timeout.tv_usec = 0;

	ret = select(fd + 1, &fs_read, NULL, NULL, &tv_timeout);
	//printf("ret = %d\n", ret);  
	//如果返回0，代表在描述符状态改变前已超过timeout时间,错误返回-1  

	if (FD_ISSET(fd, &fs_read)) {
		len = read(fd, data, datalen);
		if (len != 16)return 0;
		//printf("len = %d\n", len);  
		return len;
	}
	return 0;
}

int tfd;

void* thread_recv_nlcloud(void* st) {
	char buf[1000] = "";
	while (1) {
		memset(buf, 0, sizeof(buf));
		recv(tfd, buf, sizeof(buf), 0);
		printf("nlcloud:%s\n", buf);
	}
}

int main(int argc, char** argv)
{
	init_serial();
	UART_Format abc;
	UART_Format shuru;
	shuru.Header_1 = 0xCC;
	shuru.Header_2 = 0xEE;
	shuru.NodeSeq = 0x01;
	shuru.NodeID = 0x09;
	shuru.Tailer = 0xFF;

	int temp;
	while (1) {
		uart_recv((void*)&abc, sizeof(abc));
		printf("head1:%x head2:%x NodeID:%x Command:%x \n", abc.Header_1, abc.Header_2, abc.NodeID, abc.Command);
		if (abc.NodeID == 0x3 && abc.Command == 0x1) {
			//有效的温度:
			temp = (abc.Data[0] * 256 + abc.Data[1]) / 100;
			printf("temp = %d\n", temp);
			if (temp >= 25)
				shuru.Command = 0x09;
			else
				shuru.Command = 0x0b;
			uart_send((void*)&shuru, sizeof(shuru));

		}
	}
	close(serial_fd);
	return 0;
}