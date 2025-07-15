import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const movies = [
    {
      id: 1,
      url: "https://lumiere-a.akamaihd.net/v1/images/au_poster_movies_disney_zootopia2_teaser_b4cb9449.png",
      title: "ZooTopia",
      releaseDate: 2020,
    },
    {
      id: 2,
      url: "https://lumiere-a.akamaihd.net/v1/images/au_poster_movies_disney_zootopia2_teaser_b4cb9449.png",
      title: "The Matrix",
      releaseDate: 2021,
    },
    {
      id: 3,
      url: "https://lumiere-a.akamaihd.net/v1/images/au_poster_movies_disney_zootopia2_teaser_b4cb9449.png",
      title: "ZooTopia3",
      releaseDate: 2022,
    },
  ];

    function handleSearch(e) {
        e.preventDefault()
        // movies.filter((movie) =>movie.title.toLowerCase.includes(searchInput) )
        setSearchInput("")
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
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movie-grid">
              {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
