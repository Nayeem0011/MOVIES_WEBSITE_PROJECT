/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiKey } from "../modules/ApiLinks";
import TrailerEmbed from "./TrailerEmbed";
import MovieNotFound from "../page/MovieNotFound";
import LoadingDots from "../page/LoadingDots";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const [movieRes, videosRes] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
          ),
        ]);
        setMovie(movieRes.data);
        setVideos(videosRes.data.results);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovieDetails();
  }, [id]);

  if (loading) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <LoadingDots/>
    </div>
  );
}


  if (!movie) {
    return <div className="bg-gray-900 text-white text-center p-10"><MovieNotFound/></div>;
  }

  return (
    <div>
      <div className="bg-gray-900 text-white p-6 sm:p-10 flex justify-center items-start">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">

           {/* Poster Image */}
           <img
           src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="rounded-3xl shadow-2xl md:h-[500px] w-full max-w-xs mx-auto md:mx-0 md:w-1/3 object-cover transition-transform hover:scale-105 duration-500"/>

             {/* Details */}
            <div className="flex-1 flex flex-col justify-start space-y-6">

               {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-lg">
                {movie.title}
              </h1>

               {/* Overview */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed md:max-w-xl max-w-full">
                {movie.overview || 'No overview available.'}
              </p>

               {/* Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-xl">

                <div className="bg-gray-800 bg-opacity-60 rounded-xl p-4 shadow-md flex flex-col items-center">
                  <span className="text-orange-500 font-semibold mb-1 md:text-[20px]">Release Date</span>
                  <span className="text-white text-sm sm:text-base md:text-[17px]">{movie.release_date || 'N/A'}</span>
                </div>

                <div className="bg-gray-800 bg-opacity-60 rounded-xl p-4 shadow-md flex flex-col items-center">
                  <span className="text-orange-500 font-semibold mb-1 md:text-[20px]">Rating</span>
                  <span className="text-white text-sm sm:text-base md:text-[17px]">{movie.vote_average ? `${movie.vote_average} / 10` : 'N/A'}</span>
                </div>

                <div className="bg-gray-800 bg-opacity-60 rounded-xl p-4 shadow-md flex flex-col items-center">
                  <span className="text-orange-500 font-semibold mb-1 md:text-[20px]">Runtime</span>
                  <span className="text-white text-sm sm:text-base md:text-[17px]">{movie.runtime ? `${movie.runtime} mins` : 'N/A'}</span>
                </div>

                <div className="bg-gray-800 bg-opacity-60 rounded-xl p-4 shadow-md flex flex-col items-center">
                  <span className="text-orange-500 font-semibold mb-1 md:text-[20px]">Genres</span>
                  <span className="text-white text-sm sm:text-base text-center md:text-[17px]">
                    {movie.genres?.length ? movie.genres.map((g: any) => g.name).join(", ") : 'N/A'}
                  </span>
                 </div>
              </div>
            </div>
        </div>
      </div>

      <div className="bg-gray-900 py-12 flex justify-center items-center">
        <div className="w-full max-w-4xl px-4">
          <TrailerEmbed videos={videos} />
        </div>
      </div>
    </div>


  );
};

export default MovieDetails;


