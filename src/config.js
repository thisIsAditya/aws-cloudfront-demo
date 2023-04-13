import { config } from "dotenv";
config();

const SECRETS = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  CLOUDFRONT_URI: process.env.CLOUDFRONT_URI,
};

export default SECRETS;
