import { FiArrowUpRight } from "react-icons/fi";
const Tile = ({
  elemName = "",
  img = "",
  txt,
  subTxt = "",
  button_txt = "",
  button = false,
  link = false,
  color = "white",
}) => {
  return (
    <div id={elemName} className="tile">
      <div className="tile-txt">
        <div className="txt">
          <p className="title">{txt}</p>
          <p className="sub">{subTxt}</p>
        </div>
        {button ? <button className="tile--btn">{button_txt}</button> : null}
      </div>
      <img src={img} alt="" />

      {link ? (
        <span className="link">
          <FiArrowUpRight size={20} color={color}></FiArrowUpRight>
        </span>
      ) : null}
    </div>
  );
};

export default Tile;
