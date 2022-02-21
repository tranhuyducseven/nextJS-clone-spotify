import React from 'react'
import { HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline'
export default function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div>
        <button className="flex space-x-2   hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p>Home</p>
        </button>
        <button className="flex space-x-2   hover:text-white">
          <SearchIcon className="h-5 w-5 " />
          <p>Search</p>
        </button>
        <button className="flex space-x-2   hover:text-white">
          <LibraryIcon className="h-5 w-5 " />
          <p>Library</p>
        </button>
        <hr className="border-t-[0.1px/>
      </div>
    </div>
  )
}
