import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../../utils/constant";
import { addUpcomingMovies } from "../../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingData();
  }, []);
  return <div></div>;
};

export default useUpcomingMovies;
