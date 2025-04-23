import axios from 'axios'
import Link from 'next/link'


async function Page({params}) {
    const {id} = params
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
  return (
    <div className='px-[20px] md:px-[50px] lg:px-[100px] pt-[50px]'>
        <div className='bg-[gray] rounded-[10px] p-[20px] max-w-[500px] mx-auto'>
            <h1 className='text-[30px] mb-[20px]'>{data.title}</h1>
            <p className='text-[14px] text-[#000] mb-[10px]'>{data.body}</p>
            <h2 className='mb-[4px]'>user id = {data.userId}</h2>
            <h2 className='mb-[30px]'>id = {data.id}</h2>
            <Link href={'/albums'} className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                Back to albums
            </Link>
        </div>
   </div>
  )
}

export default Page