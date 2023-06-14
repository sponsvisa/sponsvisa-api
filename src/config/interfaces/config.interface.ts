import { IEmailConfig } from "./email-config.interface";
import { IJwt } from "./jwt.interface";

export interface IConfig {
  id: string;
  port: number;
  domain: string;
  jwt: IJwt;
  emailService: IEmailConfig;
}
