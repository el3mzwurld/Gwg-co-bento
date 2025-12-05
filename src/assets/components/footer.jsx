export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <div className="ico">GWG.co</div>
        <div className="figma-info">
          <p>
            Gwg is an site built from a free UI Kit from Paperpillar that you
            can use for your personal or commercial project.
            <a
              href=" https://www.figma.com/design/0gmZjXT3PB2G7GDzPTvH3F/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=0-1&p=f&t=cq60K48DMUIVbuJS-0
"
              target="_blank"
            >
              {" "}
              Visit the Figma Link.
            </a>
          </p>
        </div>
        <div className="newsletter">
          <input
            type="text"
            placeholder="Input your email adress"
            className="input"
            required
          />
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            value="Submit"
            placeholder=""
            className="btn-submit"
          />
        </div>
      </div>
      <div className="links">
        <ul>
          <p>POPULAR</p>
          <li>Shoes</li>
          <li>Hats</li>
          <li>Shorts</li>
          <li>Graphic Tees</li>
        </ul>
        <ul>
          <p>MENU</p>
          <li>All Categories</li>
          <li>Gift cards</li>
          <li>Special Events</li>
          <li>Blog</li>
        </ul>
        <ul>
          <p>OTHER</p>
          <li>Track Package</li>
          <li>FAQ</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
