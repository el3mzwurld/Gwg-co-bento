export default function Info({ icon, header, text }) {
  return (
    <div className="container">
      <span className="ico">{icon}</span>
      <p className="txt">
        <h3 className="header">{header}</h3>
        <span>{text}</span>
      </p>
    </div>
  );
}
