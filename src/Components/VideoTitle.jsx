const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] md:pt-[15%] lg:pt-[13%] px-4 sm:px-8 md:px-16 lg:px-20 w-full absolute aspect-video bg-gradient-to-r from-black text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
        {title}
      </h1>
      <p className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 text-xs sm:text-sm md:text-md py-2 md:py-4 lg:py-6">
        {overview}
      </p>
      <div className="flex">
        <button className="p-1 sm:p-2 px-3 sm:px-6 bg-white text-black rounded-md text-sm sm:text-md md:text-lg font-semibold bg-opacity-80 hover:opacity-80">
          <span className="text-lg sm:text-2xl">⯈</span> Play
        </button>
        <button className="p-1 sm:p-2 mx-2 sm:mx-3 bg-gray-700 rounded-md text-sm sm:text-md md:text-lg font-semibold bg-opacity-80 hover:opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
