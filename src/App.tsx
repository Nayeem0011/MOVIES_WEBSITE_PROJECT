import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import SearchResults from './pages/SearchResults'
import NotFound from './page/NotFound'
import MovieDetails from './pages/MovieDetails'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='movies' element ={<Movies/>}/>
        <Route path='tvshows' element ={<TvShows/>}/>
        <Route path="/search" element={<SearchResults />} />
        <Route path="/" element={<NotFound />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App


