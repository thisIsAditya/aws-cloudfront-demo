import CustomError from "../../utils/CustomError.js";
import handleError from "../../utils/handleError.js";

export const getMediaLink = handleError(async (req, res) => {
  const { mediaName } = req.params;
  if (!mediaName) throw new CustomError(400, "Media name is required");
  /** Fetch Image here */
  const imageURL = "";
  if (!imageURL) throw new CustomError(404, "Media not found");
  res.status(200).send({
    status: "success",
    data: imageURL,
  });
});
