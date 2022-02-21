import {
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  PlusIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import React from 'react'
export default function Sidebar() {
  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <button className="flex space-x-2   hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p>Home</p>
        </button>
        <button className="flex space-x-2   hover:text-white">
          <SearchIcon className="h-5 w-5 " />
          <p>Search</p>
        </button>
        <button className="flex space-x-2   hover:text-white">
          <CollectionIcon className="h-5 w-5 " />
          <p>Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex space-x-2   hover:text-white">
          <PlusIcon className="h-5 w-5 " />
          <p>Created Playlist</p>
        </button>
        <button className="flex space-x-2   hover:text-white">
          <HeartIcon className="h-5 w-5 " />
          <p>Liked Songs</p>
        </button>
        <button className="flex space-x-2   hover:text-white">
          <RssIcon className="h-5 w-5 " />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/*Playlist...*/}
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
        <p className="cursor-pointer hover:text-white">Playlist......</p>
      </div>
    </div>
  )
}
