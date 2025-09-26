function MovieCard({ title, description, image, rating }) {
  let ratingClass = "";
  if (rating >= 8) {
    ratingClass="text-bg-success";
  } else if (rating >= 5) {
    ratingClass="text-bg-warning";
  } else {
    ratingClass="text-bg-danger"
  }

  const TrailerClick = () => {
    alert("Trailer coming soon!");
  };
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div class="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <span className={`badge rounded-pill ${ratingClass}`}>{rating}/1</span>
          </p>
          
            <button className="btn btn-primary" onClick={TrailerClick}> Watch Trailer</button>
          
        </div>
      </div>
    </>
  );
};

export default MovieCard;
