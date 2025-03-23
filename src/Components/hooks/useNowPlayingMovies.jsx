import { useDispatch } from "react-redux";
import { API_OPTION } from "../../utils/constant";
import { addNowPlayingMovie } from "../../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingData();
  }, []);
  return <div></div>;
};

export default useNowPlayingMovies;
