import handleError from "../../utils/handleError.js";
import APIS from "../../constants/apis.js";
import SECRETS from "../../config.js";

export const getMediaLink = handleError(async (req, res) => {
  let { mediaName } = req.params;
  if (!mediaName) mediaName = SECRETS.DEFAULT_MEDIA;
  const imageURL = `${APIS.MEDIA.get}/${mediaName}`;
  res.status(200).send({
    status: "success",
    data: {
      imageURL,
    },
  });
});
