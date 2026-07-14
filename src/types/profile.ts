export type PublicProfile = {
  name: string;
  englishName: string;
  role: string;
  shortBio: string;
  focusAreas: readonly string[];
  email?: string;
  githubUrl?: string;
  wechatId?: string;
  wechatQrImage?: string;
  school?: string;
  location?: string;
  resumeUrl?: string;
};
