import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 md:px-6 lg:px-8 mb-8 md:mb-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
        {title}
      </h2>
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 md:pb-6 -mx-4 px-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array,
};

export default MoviesList;
