import axios from 'axios'
import Link from 'next/link'


async function Page({params}) {
    const {id} = params
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return (
    <div className='px-[20px] md:px-[50px] lg:px-[100px] pt-[50px]'>
        <div className='bg-[gray] rounded-[10px] p-[20px] max-w-[500px] mx-auto'>
            <h1 className='text-[30px] mb-[20px]'>{data.title}</h1>
            <h2 className='mb-[4px]'>user id = {data.userId}</h2>
            <h2 className='mb-[30px]'>id = {data.id}</h2>
            <h2 className='mb-[30px]'>Complated = {data.complated ? '✅' : '❌'}</h2>
            <Link href={'/todos'} className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                Back to todos
            </Link>
        </div>
   </div>
  )
}

export default Page