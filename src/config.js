import { config } from "dotenv";
config();

const SECRETS = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  CLOUDFRONT_URI: process.env.CLOUDFRONT_URI,
  DEFAULT_MEDIA: "hello-world-at-cloud.png",
  CDN_KEY_PAIR_ID: process.env.CDN_KEY_PAIR_ID,
  CDN_PRIVATE_KEY: process.env.CDN_PRIVATE_KEY,
};

export default SECRETS;
