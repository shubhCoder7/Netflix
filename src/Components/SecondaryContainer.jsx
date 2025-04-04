import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="relative -mt-36 sm:-mt-48 md:-mt-56 lg:-mt-72 z-20 pl-2 sm:pl-4">
        {/* Negative margin to overlap with main container */}
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Popular Movies" movies={movies.popularMovies} />
        <MoviesList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MoviesList title="Up Coming Movies" movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
