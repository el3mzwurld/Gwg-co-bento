export default function BlogTile({
  preview_img = "",
  title = "",
  paragraph = "",
}) {
  return (
    <div className="blog-container">
      <div className="preview">
        <img src={preview_img} alt="Blog Image" />
      </div>
      <div className="txt">
        <div className="text">
          <p className="title">{title}</p>
          <p className="body">{paragraph}</p>
        </div>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
