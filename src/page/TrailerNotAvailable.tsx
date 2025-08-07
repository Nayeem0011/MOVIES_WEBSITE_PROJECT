import { AlertTriangle } from 'lucide-react'

const TrailerNotAvailable = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-gray-900 p-10 rounded-xl shadow-lg">
      <AlertTriangle className="text-yellow-400 w-16 h-16 animate-bounce" />
      <h2 className="text-white text-xl font-semibold">Trailer not available</h2>
      <p className="text-gray-400">We couldn't find a trailer for this movie.</p>
    </div>
  )
}

export default TrailerNotAvailable;
