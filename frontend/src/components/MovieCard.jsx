import "../css/MovieCard.css"

function MovieCard({ movie }) {
  function handleClick() {
    alert("Clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <div className="tooltip-container">
          <h3>
            
            <a href={`https://www.themoviedb.org/movie/${movie.id}`}>{movie.title}</a>
          </h3>
          <span className="tooltip-text">{movie.title}</span>
        </div>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
