import React, { useEffect, useState } from "react";

const Main = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const getMoviesData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=2",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzg1MTQ5ZjcyM2RkNjBlODdlZTEwODUzM2FmNTY0YyIsIm5iZiI6MTczMzM5OTcyNC4yODQ5OTk4LCJzdWIiOiI2NzUxOTRhYzgwZTViOGYwYTc1NjBiNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-6SyKOIdKey4ZEnMRYGIh8CVvyTLM7QT8IvjT5y8oZM",
        },
      }
    );
    const json = await response.json();
    setMovies(json.results);
    console.log(json.results);
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      getMoviesData();
    }, 200);
    return () => clearTimeout(interval);
  }, [searchTerm]);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="mt-4 mb-4">
      <h1 className="font-bold text-3xl">List of Movies</h1>
      <div className="flex flex-wrap gap-6 p-4">
        {filteredMovies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="max-w-[350px] w-full overflow-hidden flex flex-col gap-4 rounded-md"
            >
              <img
                alt="movie-banner"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
              <h2 className="text-2xl">{movie.title}</h2>
              <p className="line-clamp-3 text-sm text-gray-600">
                {movie.overview}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
