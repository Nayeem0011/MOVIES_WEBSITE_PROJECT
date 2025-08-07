import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link to="/" className="px-6 py-3 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
