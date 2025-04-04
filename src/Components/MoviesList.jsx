import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-2 sm:px-4 md:px-6 text-white">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4">
        {title}
      </h1>
      {/* Horizontal scrolling container */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-4 md:pb-6 -mx-2 sm:-mx-4 md:-mx-6 px-2 sm:px-4 md:px-6 items-end">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
