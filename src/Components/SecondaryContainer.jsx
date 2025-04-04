import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black pb-10">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Popular Movies" movies={movies.popularMovies} />
        <MoviesList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MoviesList title="Upcoming Movies" movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
