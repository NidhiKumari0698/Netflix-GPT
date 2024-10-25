import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailerVideo = findTrailer(json);
    dispatch(addTrailerVideo(trailerVideo));
  };
  const findTrailer = (json) => {
    const result = json.results.find((data) => data.type === "Trailer");
    return result ?? json.results[0];
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
