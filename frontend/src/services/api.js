const BASE_URL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

async function getPopularMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}`)
    const data = await response.json()
    console.log(data)
    return data.results
}

async function searchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}

export {getPopularMovies, searchMovies}