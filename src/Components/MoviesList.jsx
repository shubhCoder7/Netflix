import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {/* Horizontal scrolling container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 -mx-6 px-6 items-end ">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
