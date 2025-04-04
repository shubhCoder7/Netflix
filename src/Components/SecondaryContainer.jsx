import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black min-h-screen">
      <div className="relative z-20 pt-10">
        <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MoviesList title="Popular Movies" movies={movies.popularMovies} />
        <MoviesList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MoviesList title="Upcoming Movies" movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
