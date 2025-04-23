import axios from 'axios'
import Link from 'next/link'


async function Page({params}) {
    const {id} = params
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  return (
    <div className='mx-[30px]'>
      <div className="flex px-3 py-3">
          <div className="max-w-sm rounded pb-[50px] shadow-lg mx-auto mt-[100px] mb-[50px]">
              <img className="w-full h-[400px]" src={`https://picsum.photos/id/${Math.floor(Math.random()*100)}/400/400`}  alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                  <h1 className='text-[20px] uppercase mb-[10px]'>{data.title}</h1>
                  <p className="text-gray-100 text-base">
                      {data.url}
                  </p>
              </div>
              <p className='text-[14px] text-[#000] '>{data.body}</p>
              <h2 className='mb-[4px] px-[20px]'>album id = {data.albumId}</h2>
              <h2 className='mb-[30px] px-[20px]'>id = {data.id}</h2>
              <Link href={'/photos'} className="bg-gray-700 m-[20px] hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                  Back to photos
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Page