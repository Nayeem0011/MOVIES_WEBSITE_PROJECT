// LoadingDots.tsx
import React from 'react'

const LoadingDots: React.FC = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
    </div>
  )
}

export default LoadingDots
