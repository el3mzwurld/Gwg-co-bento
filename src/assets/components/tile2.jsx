import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

export default function TileShoes({
  windowWidth,
  setWindowWidth,
  preview_img = "",
  productName = "",
  price = "",
  elemName = "",
}) {
  const [fav, setFav] = useState(false);

  return (
    <div className="tile-container" id={elemName}>
      <div className="preview">
        <span className="preview-ico">
          {windowWidth < 768 && <MdFavoriteBorder size={25} color="white" />}
          {windowWidth > 767 && <MdFavoriteBorder size={30} color="white" />}
        </span>
        <img src={preview_img} alt="" />
      </div>

      <div className="details">
        <p className="name">{productName}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}
