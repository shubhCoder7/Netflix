import { IMG_CDN_URL } from "../utils/constant";
import PropTypes from "prop-types";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="flex-none w-32 sm:w-36 md:w-40 lg:w-48 transition-all duration-300 transform hover:scale-105 hover:z-10">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Movie Poster"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string,
};

export default MovieCard;
