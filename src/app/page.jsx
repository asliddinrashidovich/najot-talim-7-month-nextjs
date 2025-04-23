"use client"

import { useRouter } from "next/navigation"
import NProgress from "nprogress";

function HomePage() {
  const router = useRouter()
  function handleClick(path) {
    router.push(path)
    NProgress.start();
  }
  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-white">
      <div className="w-full md:w-1/2 relative grid grid-cols-1 border border-gray-300 bg-gray-100 rounded-lg">
          <div className="rounded-l-lg  p-4 bg-gray-200 flex gap-[10px] flex-wrap justify-center items-center border-0 border-r border-gray-300 ">
            <h1 className="text-center text-[#000] text-[25px] bg-gray-200 py-[20px]">Next js, Dynamic Routing</h1>
            <div className="flex gap-[15px] flex-wrap"> 
              <button onClick={() => handleClick('/posts')} className='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                rounded-md font-semibold text-xs uppercase tracking-widest cursor-pointer hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
              focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
                Posts
              </button>
              <button onClick={() => handleClick('/comments')} className='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                rounded-md font-semibold text-xs uppercase tracking-widest cursor-pointer hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
              focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
                Comments
              </button>
              <button onClick={() => handleClick('/albums')} className='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                rounded-md font-semibold text-xs uppercase tracking-widest cursor-pointer hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
              focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
                Albums
              </button>
              <button onClick={() => handleClick('/photos')} className='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                rounded-md font-semibold text-xs uppercase tracking-widest cursor-pointer hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
              focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
                Photos
              </button>
              <button onClick={() => handleClick('/todos')} className='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                rounded-md font-semibold text-xs uppercase tracking-widest cursor-pointer hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
              focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
                Todos
              </button>
              <button onClick={() => handleClick('/users')} className='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
                rounded-md font-semibold text-xs uppercase tracking-widest cursor-pointer hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
              focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
                Users
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage