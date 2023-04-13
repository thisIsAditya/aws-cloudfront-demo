import SECRETS from "../config.js";

const APIS = {
  MEDIA: {
    get: `${SECRETS.CLOUDFRONT_URI}`,
  },
};

export default APIS;
