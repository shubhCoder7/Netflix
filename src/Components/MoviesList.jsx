import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-4 md:py-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white px-4">
        {title}
      </h2>
      <div className="flex overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-2 md:gap-4 px-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array,
};

export default MoviesList;
