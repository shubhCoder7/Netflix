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
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header />
      <div className="relative w-full">
        <MainContainer />
      </div>
      <div className="mt-0 md:-mt-10 lg:-mt-16 xl:-mt-20 relative z-10">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
