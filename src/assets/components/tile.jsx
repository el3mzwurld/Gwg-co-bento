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
  windowWidth,
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
          {windowWidth < 520 && (
            <FiArrowUpRight size={20} color={color}></FiArrowUpRight>
          )}
          {windowWidth >= 768 && (
            <FiArrowUpRight
              size={28}
              color={color}
              fontWeight={800}
            ></FiArrowUpRight>
          )}
        </span>
      ) : null}
    </div>
  );
};

export default Tile;
