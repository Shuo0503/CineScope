import "../css/MovieCard.css"

function MovieCard({ movie }) {
  function handleClick() {
    alert("Clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title}/>
        <div className="movie-overlay">
          <button className="favorite-button" onClick={handleClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
