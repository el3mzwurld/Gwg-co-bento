function Category({ name = "" }) {
  return (
    <div className="category-card">
      <p className="card-txt">{name.toUpperCase()}</p>
    </div>
  );
}

export default Category;
