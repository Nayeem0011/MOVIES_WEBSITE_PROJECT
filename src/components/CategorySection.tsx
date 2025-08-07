import { useEffect, useState } from "react";
import type { DataTypes, ItemsCategory } from "../types/types";
import axios from "axios";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { NavLink } from "react-router-dom";


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


const CategorySection: React.FC<ItemsCategory> = ({ apiEndpoint, itemHeading }) => {
  const [apiData, setApiData] = useState<DataTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setApiData(response.data.results.slice(0, 12));
      } catch (error) {
        console.error("Failed to fetch API DATA", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, [apiEndpoint]);

  return (
    <section className="bg-gray-900 px-4 sm:px-8 lg:px-16 py-10">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-50 px-6 py-2 bg-gradient-to-l from-gray-900 to-gray-800 rounded-lg shadow-md">
          {itemHeading}
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 animate-pulse rounded-2xl overflow-hidden shadow-md h-[24rem]"
              >
                <div className="h-72 bg-gray-700" />
                <div className="p-3">
                  <div className="h-4 bg-gray-600 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-600 rounded w-1/2" />
                </div>
              </div>
            ))
          : apiData.map((movie, i) => (
              <motion.div
                key={movie.id}
                className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-md cursor-pointer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {/* Vote Average Tag */}
                <div className="absolute top-2 left-2 z-10 bg-[#ffea00c7] text-black text-sm font-semibold px-2 py-1 rounded-md shadow">
                  {movie.vote_average.toFixed(1)}
                </div>

                {/* Movie Poster */}
                <NavLink to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-full h-72 object-cover"/>
                </NavLink>

                {/* Movie Title */}
                <div className="p-3 text-center">
                  <h3 className="text-neutral-100 text-lg font-semibold truncate">
                    {movie.title || movie.name}
                  </h3>
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default CategorySection;

