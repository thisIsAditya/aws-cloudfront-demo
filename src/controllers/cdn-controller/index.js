import handleError from "../../utils/handleError.js";
import APIS from "../../constants/apis.js";
import SECRETS from "../../config.js";
import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

export const getMediaLink = handleError(async (req, res) => {
  let { mediaName } = req.params;
  if (!mediaName) mediaName = SECRETS.DEFAULT_MEDIA;
  const imageURL = `${APIS.MEDIA.get}/${mediaName}`;
  const signedURL = getSignedUrl({
    url: imageURL,
    dateLessThan: new Date(Date.now() + 5 * 60 * 1000) /** 5 mins from now */,
    privateKey: SECRETS.CDN_PRIVATE_KEY,
    keyPairId: SECRETS.CDN_KEY_PAIR_ID,
  });
  res.status(200).send({
    status: "success",
    data: {
      imageUrl: signedURL,
    },
  });
});
