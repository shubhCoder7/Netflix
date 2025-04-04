import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="flex-none w-28 sm:w-32 md:w-36 lg:w-40 transition-transform hover:scale-105 duration-300 mb-0">
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto rounded-md cursor-pointer shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
