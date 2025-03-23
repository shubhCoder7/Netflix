const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[13%] px-20 w-screen absolute aspect-video    bg-gradient-to-r from-black  text-white ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-md py-6 ">{overview}</p>
      <div>
        <button className="p-2 px-6  bg-white text-black rounded-md text-lg font-semibold bg-opacity-80 hover:opacity-80">
          <span className="text-2xl">⯈</span> Play
        </button>
        <button className="p-3 mx-3 bg-gray-700  rounded-md text-lg font-semibold bg-opacity-80 hover:opacity-80">
          ⓘ More Information
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
