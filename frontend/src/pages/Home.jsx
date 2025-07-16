import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovie = await getPopularMovies();
        setMovies(popularMovie);
      } catch (error) {
        console.log(error);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    // movies.filter((movie) =>movie.title.toLowerCase.includes(searchInput) )
    setSearchInput("");
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  }
  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={handleChange}
          className="search-input"
          placeholder="Search for movies"
          value={searchInput}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
