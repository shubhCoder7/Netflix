import PropTypes from "prop-types";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-5">
          {title}
        </h1>
        <p className="text-sm md:text-base text-white/90 mb-5 md:mb-8 line-clamp-3 md:line-clamp-4">
          {overview}
        </p>
        <div className="flex gap-3 md:gap-5">
          <button className="bg-white text-black py-2 px-5 md:py-3 md:px-8 rounded-md font-semibold flex items-center hover:bg-white/90 transition-colors">
            <span className="mr-2 text-lg md:text-xl">▶</span> Play
          </button>
          <button className="bg-gray-500/70 text-white py-2 px-5 md:py-3 md:px-8 rounded-md font-semibold hover:bg-gray-600/70 transition-colors">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
};

export default VideoTitle;
