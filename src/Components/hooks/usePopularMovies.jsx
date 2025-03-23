import { useDispatch } from "react-redux";
import { API_OPTION } from "../../utils/constant";
import { addPopularMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMoviesData();
  }, []);
  return <div></div>;
};

export default usePopularMovies;
