'use client'

/* Author: Team 1 - Student Demo */
/* Description: A fancy animated button with hover effects */

export default function FancyButton() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button 
        onClick={() => alert('Button clicked!')}
        className="
          relative px-6 py-3 text-white font-medium
          bg-gradient-to-r from-blue-500 to-purple-500
          rounded-lg shadow-lg
          transform transition-all duration-300
          hover:scale-105 hover:shadow-xl
          active:scale-95
          overflow-hidden
          group
        "
      >
        <span className="relative z-10">Click Me!</span>
        <div className="
          absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500
          transform scale-x-0 transition-transform duration-300
          group-hover:scale-x-100
          origin-left
        "></div>
      </button>
      
      <p className="text-sm text-gray-600 text-center mt-2">
        Try hovering and clicking!
      </p>
    </div>
  )
} 