import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies::::", movies, title);

  return (
    <>
      {movies && movies.length > 0 ? (
        <div className="p-5">
          <h1 className="text-white text-3xl font-bold pb-5">{title}</h1>
          <div className="flex overflow-x-scroll">
            <div className="flex gap-5">
              {movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
};

export default MovieList;
