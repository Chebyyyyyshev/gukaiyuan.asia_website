import { ArrowDown, ArrowRight, Cable, Cpu, Monitor, Server, Thermometer } from "lucide-react";

const flowSteps = [
  {
    title: "传感器采集",
    description: "环境参数或设备状态进入采集链路。",
    icon: Thermometer,
  },
  {
    title: "嵌入式处理",
    description: "节点或开发板读取并组织采集数据。",
    icon: Cpu,
  },
  {
    title: "串口通信",
    description: "按旧资料中的数据结构进行网关侧读取。",
    icon: Cable,
  },
  {
    title: "网关传输",
    description: "网关程序处理数据，并承担指令发送关系。",
    icon: Server,
  },
  {
    title: "客户端展示",
    description: "PC 客户端原型界面展示数据与控制入口。",
    icon: Monitor,
  },
];

export function SystemFlow() {
  return (
    <figure className="project-flow" aria-labelledby="project-flow-title">
      <figcaption id="project-flow-title">
        数据流与模块关系示意：传感器采集、嵌入式处理、串口通信、网关传输、客户端展示与控制命令返回。
      </figcaption>
      <ol className="project-flow-list">
        {flowSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <li key={step.title} className="project-flow-item">
              <div className="project-flow-card">
                <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                <div>
                  <p className="project-flow-title">{step.title}</p>
                  <p>{step.description}</p>
                </div>
              </div>
              {index < flowSteps.length - 1 ? (
                <>
                  <ArrowRight
                    aria-hidden="true"
                    className="project-flow-arrow project-flow-arrow-horizontal"
                    size={18}
                    strokeWidth={1.8}
                  />
                  <ArrowDown
                    aria-hidden="true"
                    className="project-flow-arrow project-flow-arrow-vertical"
                    size={18}
                    strokeWidth={1.8}
                  />
                </>
              ) : null}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
