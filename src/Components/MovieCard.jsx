import { IMG_CDN_URL } from "../utils/constant";
import PropTypes from "prop-types";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-28 min-w-28 sm:w-32 sm:min-w-32 md:w-40 md:min-w-40 lg:w-44 lg:min-w-44 flex-shrink-0">
      <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg">
        <img
          alt="Movie Poster"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-auto"
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
