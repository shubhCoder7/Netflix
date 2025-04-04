import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import PropTypes from "prop-types";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo) {
    return <div className="w-full aspect-video bg-black animate-pulse"></div>;
  }

  return (
    <div className="w-full">
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.number,
};

export default VideoBackground;
