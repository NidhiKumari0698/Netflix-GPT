import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComing } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComing(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useUpComingMovies;
