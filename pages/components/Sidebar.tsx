import React from 'react'
import { HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline'
export default function Sidebar() {
  return (
    <div>
      <div>
        <button className="flex space-x-2 text-gray-500 hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p>Home</p>
        </button>
        <button className="flex space-x-2 text-gray-500 hover:text-white">
          <SearchIcon className="h-5 w-5 " />
          <p>Search</p>
        </button>
        <button className="flex space-x-2 text-gray-500 hover:text-white">
          <LibraryIcon className="h-5 w-5 " />
          <p>Library</p>
        </button>
      </div>
    </div>
  )
}
