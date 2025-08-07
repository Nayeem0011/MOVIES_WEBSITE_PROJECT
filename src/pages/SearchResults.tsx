/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { apiKey } from '../modules/ApiLinks'
import type { DataTypes } from '../types/types'
import LoadingDots from '../page/LoadingDots'
import { SearchX } from 'lucide-react'

const SearchResults = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q') || ''
  const [results, setResults] = useState<DataTypes[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`
        )

        const filteredResults = response.data.results.filter(
          (item: any) => item.media_type === 'movie' || item.media_type === 'tv'
        )
        setResults(filteredResults)
      } catch (error) {
        console.error("Search fetch failed", error)
      } finally {
        setLoading(false)
      }
    }

    if (query) fetchSearch()
  }, [query])

  return (
    <div className='bg-gray-900 min-h-screen p-8'>
      <div className='text-center mb-8'>
        <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-50 px-6 py-2 bg-gradient-to-l from-gray-900 to-gray-800 rounded-lg shadow-md">
          Search for: <span className='text-orange-500'>" {query} "</span>
        </h2>
      </div>

      {loading ? (
        <div className='flex items-center justify-center text-white'>
          <LoadingDots />
        </div>
      ) : results.length === 0 ? (
        <div className='flex flex-col items-center justify-center text-white mt-20'>
          <SearchX size={80} className='text-red-500 mb-4' />
          <p className='text-xl text-gray-400'>No results found for "<span className="text-orange-400">{query}</span>"</p>
          <p className='text-sm text-gray-500 mt-2'>Try another movie or TV show name.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
          {results.map((item: any) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                    : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={item.title || item.name}
                className="w-full h-72 object-cover"
              />
              <div className='p-3 text-center'>
                <h2 className='text-neutral-100 text-lg font-semibold truncate'>
                  {item.title || item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults
