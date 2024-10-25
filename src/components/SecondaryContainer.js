import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      {movies && (
        <div className="relative z-10 -mt-40">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"UpComing"} movies={movies.upComing} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
