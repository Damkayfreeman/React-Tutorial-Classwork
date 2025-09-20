function MovieCard({ title, description, image, rating }) {
  let ratingClass = "";
  if (rating > 8) {
    ratingClass="text-success";
  } else if (rating > 5) {
    ratingClass="text-warning";
  } else {
    ratingClass="text-danger"
  }

  const TrailerClick = () => {
    alert("Trailer coming soon!");
  };
  return (
    <>
      <div className="card" style={{width: '18rem', margin:"10px"}}>
        <img src={image} className="card-img-top" alt={title} />
        <div class="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className={`card-text ${ratingClass}`}>
           <strong>{rating}/10</strong>
            </p>
            <button className="btn btn-primary" onClick={TrailerClick}> Watch Trailer</button>
          
        </div>
      </div>
    </>
  );
};

export default MovieCard;
