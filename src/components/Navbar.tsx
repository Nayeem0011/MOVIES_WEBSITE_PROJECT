import axios from 'axios'
import { useState, useEffect } from 'react'
import { apiKey, baseUrl, popular, popularShows } from '../modules/ApiLinks'
import logo from "../assets/logo.png"
import users from "../assets/user.png"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [movieData, setMovieData] = useState({
    backdropPath: "",
    title: "",
    overview: ""
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const feachData = async (page: string) => {
    let url = `${baseUrl}/${page}?api_key=${apiKey}`

    if (page === "tv") {
      url = `${popularShows}`
    } else {
      url = `${popular}`
    }

    try {
      const response = await axios.get(url)
      const data = response.data
      const randomIndex = Math.floor(Math.random() * data.results.length)
      const randomMedia = data.results[randomIndex]

      if (randomMedia && randomMedia.backdrop_path) {
        setMovieData({
          backdropPath: `https://image.tmdb.org/t/p/original${randomMedia.backdrop_path}`,
          title: randomMedia.title || randomMedia.name || "",
          overview: randomMedia.overview || ""
        })
      }
    } catch (error) {
      console.log("Error fetching data", error)
    }
  }

  useEffect(() => {
    const currentPath = window.location.pathname
    if (currentPath.includes("movies")) {
      feachData("movie")
    } else if (currentPath.includes("tvshows")) {
      feachData("tv")
    } else {
      feachData("movie")
    }
  }, [])

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement
      const value = target.value.trim()
      if (value) {
        navigate(`/search?q=${value}`)
      }
    }
  }

  return (
    <div
      className='relative bg-cover bg-center h-screen text-white'
      style={{ backgroundImage: `url(${movieData.backdropPath})` }}>

      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md transition duration-500">
        <div className="flex justify-between items-center h-16 px-6 md:px-10 lg:px-16">

           {/* Logo */}
          <img
          src={logo}
          alt="logo"
          className="w-32 lg:w-40 xl:w-48 h-14 xl:h-20 transition-transform duration-300 hover:scale-105 object-contain"/>

           {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-base md:text-lg lg:text-2xl font-bold text-gray-300 font-condensed">
            <NavLink to="/"
            className={({ isActive }) =>`cursor-pointer hover:text-white transition-transform duration-200 
            ${isActive ? "text-orange-600 scale-110" : "" }`}>
              Home
            </NavLink>

            <NavLink to="/movies"
            className={({ isActive }) =>`cursor-pointer hover:text-white transition-transform duration-200 
            ${isActive ? "text-orange-600 scale-110" : "" }`}>
              Movies
            </NavLink>

            <NavLink to="/tvshows"
            className={({ isActive }) =>`cursor-pointer hover:text-white transition-transform duration-200 
            ${isActive ? "text-orange-600 scale-110" : "" }`}>
              TV Shows
            </NavLink>
          </div>

           {/* Search & Avatar */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <div className="relative">
              <input
              type="text"
              placeholder="Search"
              onKeyDown={handleSearch}
              className="pl-4 pr-10 py-2 text-1xl w-40 lg:w-64 xl:w-96 rounded-full bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-600"/>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-1xl material-symbols-outlined">
                search
              </span>
            </div>

            <img
            src={users}
            alt="user"
            className="w-10 h-10 rounded-full cursor-pointer transition-transform duration-300 hover:rotate-12"/>
          </div>

           {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </div>

      <div
       className={`fixed top-0 right-0 h-full w-72 bg-black/90 backdrop-blur-md text-white z-50 transform 
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-500 ease-in-out rounded-l-2xl shadow-lg`}>

           {/* Close Button */}
          <button
          className="absolute top-4 right-4 text-2xl hover:text-red-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu">
            ✕
          </button>

           {/* Navigation Links */}
          <div className="flex flex-col items-center mt-20 space-y-6 font-condensed">
            <NavLink to="/"
            className="text-xl tracking-wide hover:text-orange-500 transition-all duration-200">
              Home
            </NavLink>

            <NavLink to="/movies"
            className="text-xl tracking-wide hover:text-orange-500 transition-all duration-200">
              Movies
            </NavLink>

            <NavLink to="/tvshows"
            className="text-xl tracking-wide hover:text-orange-500 transition-all duration-200">
              TV Shows
            </NavLink>
          </div>

           {/* Search Input */}
          <div className="mt-10 px-6 relative">
            <span className="absolute p-5 right-4 top-1/2 transform -translate-y-1/2 text-lg text-gray-300 material-symbols-outlined">
              search
            </span>

            <input
            type="text"
            placeholder="Search"
            onKeyDown={handleSearch}
            className="w-full p-3  rounded-full bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-600"/>
          </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 bg-black bg-opacity-50  text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-white drop-shadow-lg">
          {movieData.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed drop-shadow">
          {movieData.overview}
        </p>

        <button className="mt-6 px-5 py-3 bg-[#9d9a96ac] hover:bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            More Info
          </span>
          <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform duration-300">
            info
          </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar

