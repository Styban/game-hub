import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import gameImage from "../assets/gameImage.webp";
import chess from "../assets/chess.jpg";

const getCroppedImageUrl = (url: string) => {
  if (!url) {
    return noImage;
  }
  if (url.includes(".webp") || url.includes("chess")) {
    return url.includes(".webp") ? gameImage : chess;
  }
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
