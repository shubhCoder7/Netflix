import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovie from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRated";
import useUpcomingMovies from "./hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative bg-black text-white min-h-screen">
      <Header />
      <div className="pt-0">
        <MainContainer />
      </div>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
