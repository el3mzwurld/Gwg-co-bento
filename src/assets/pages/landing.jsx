import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle, IoIosCart } from "react-icons/io";
import { FaSearch, FaRegUser, FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import Tile from "../components/tile";
import ProductCard from "../components/tile2";
import test from "../images/soccerkit_aes 1.png";
import snoop from "../images/snoop_manU.jpeg";
import outdoor from "../images/outdoor.png";
import total_ninety from "../images/toal90_aes.jpeg";
import Category from "../components/category";

import forces from "../images/shoes/air_forces.jpg";
import jordan from "../images/shoes/air_jrdn.jpg";
import alteAir from "../images/shoes/custom_air.jpg";
import scareAir from "../images/shoes/nike_halloween.jpg";
import samba from "../images/shoes/samba.jpg";
import dunks from "../images/shoes/dunks.jpg";
function Gwg() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [isDropDown, setDropDown] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const scrollRef = useRef(null);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobMenu = () => {
    setOpen((prev) => !prev);
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };
  return (
    <div className="landing">
      <header>
        <> {windowWidth > 767 && <div className="header-data"></div>}</>

        <nav>
          <div className="header-main">
            <h2 className="title">
              <span>GWG</span>.co
            </h2>
            <span className="hamburger" onClick={toggleMobMenu}>
              <GiHamburgerMenu size={25} />
            </span>
          </div>
          <div className={`header-nav ${open ? "show" : ""}`}>
            <header>
              <span>
                <IoIosCloseCircle
                  size={28}
                  onClick={toggleMobMenu}
                ></IoIosCloseCircle>
              </span>
            </header>

            <div className="nav--items">
              <div className="search">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="items--searchbar"
                  id="search"
                />
                <span>
                  <FaSearch size={15} color="lightgray" fontWeight={400} />
                </span>
              </div>

              <div className="controls">
                <ul className="items-shop-controls">
                  <li
                    onClick={() => {
                      setDropDown(!isDropDown);
                    }}
                  >
                    <p>
                      All Products{" "}
                      <span>
                        {isDropDown ? (
                          <RiArrowDropUpLine />
                        ) : (
                          <RiArrowDropDownLine />
                        )}
                      </span>
                    </p>

                    {isDropDown && (
                      <ul
                        id="dropdown--list"
                        className={`${isDropDown ? "active" : ""}`}
                      >
                        <li>Sport</li>
                        <li>Casual</li>
                        <li>Street Wear</li>
                        <li>Running</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <p>Gift Cards</p>
                  </li>
                  <li>
                    <p>Special Events</p>
                  </li>
                </ul>
                <ul className="items-user-controls">
                  <li>
                    <p>Favorites</p>
                    <span>
                      <MdFavoriteBorder size={20} />
                    </span>
                  </li>

                  <li>
                    <p>Account</p>
                    <span>
                      <FaRegUser size={20} />
                    </span>
                  </li>

                  <li>
                    <p>Cart</p>
                    <span>
                      <IoIosCart size={20} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-cats">
            <div className="main">
              {windowWidth < 768 && (
                <Tile
                  elemName="tile--main"
                  img={test}
                  txt="Wear with Pride."
                  button={true}
                  button_txt="VIEW COLLECTIONS"
                ></Tile>
              )}
            </div>
            <div className="sub">
              <Tile
                elemName="sub-outdoor"
                img={outdoor}
                txt="Outdoor Active."
                link={true}
              />
              <Tile
                elemName="sub-casual"
                img={snoop}
                txt="Wear it like you own it."
                link={true}
              />
            </div>
          </div>
          <div className="hero-inspos" ref={scrollRef}>
            <div className="container" id="inspos-intro">
              <p className="title">Casual Inspirations</p>
              <button className="btn">BROWSE INSPIRATIONS</button>
              <div className="next" onClick={scrollRight}>
                {" "}
                <FaArrowRight
                  size={20}
                  fontWeight={600}
                  color="white"
                ></FaArrowRight>
              </div>
            </div>
            <div className="container" id="tiles">
              <div className="sub">
                <Tile
                  elemName="inspo-street"
                  txt="OWN YOUR BLOCK"
                  img={snoop}
                  link={true}
                  color="black"
                ></Tile>
              </div>
              <div className="sub">
                <Tile
                  elemName="inspo-retro"
                  img={total_ninety}
                  txt="RETRO **VISON"
                  link={true}
                ></Tile>
              </div>
            </div>
          </div>
        </section>
        <div className="trending">
          <div className="title">
            <p className="txt">Trending</p>
            <div className="filters">
              <Category name="shoes" />
              <Category name="hats" />
              <Category name="shorts" />
              <Category name="jackets" />
            </div>
          </div>

          <div className="products-grid">
            <ProductCard
              elemName="grid-one"
              preview_img={forces}
              productName="Air Forces"
              price="44.00"
              windowWidth={windowWidth}
            />
            <ProductCard
              elemName="grid-two"
              preview_img={samba}
              productName="Adidas Sambas"
              price="30.99"
              windowWidth={windowWidth}
            />
            <ProductCard
              elemName="grid-three"
              preview_img={scareAir}
              productName="Custom : ALTEWRLD Nike Air Force SCAR3"
              price="120.00"
              windowWidth={windowWidth}
            />
            <ProductCard
              elemName="grid-four"
              preview_img={jordan}
              productName="Air Jordan"
              price="45.99"
              windowWidth={windowWidth}
            />
            <ProductCard
              elemName="grid-five"
              preview_img={dunks}
              productName="Air Jordan : Travis"
              price="90.00"
              windowWidth={windowWidth}
            />
            <ProductCard
              elemName="grid-six"
              preview_img={alteAir}
              productName="Custom : ALTEWRLD AIR ELECTRIC"
              price="200.00"
              windowWidth={windowWidth}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Gwg;
