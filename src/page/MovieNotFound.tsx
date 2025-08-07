import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineBlock } from "react-icons/md";
import { Link } from "react-router-dom";

const MovieNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center text-white px-4">
      <MdOutlineBlock className="text-7xl text-orange-500 mb-6 animate-bounce" />
      
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
        Oops! Movie Not Found
      </h1>

      <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-md">
        We couldn't find the movie you're looking for. It might have been removed or doesn’t exist.
      </p>

      <Link
      to="/"
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 animate-pulse">
        <FaArrowLeft className="text-xl" />
        Back to Home
     </Link>
    </div>
  );
};

export default MovieNotFound;
