import axios from 'axios'
import Link from 'next/link'


async function Page() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return (
   <div className='px-[20px] md:px-[50px] lg:px-[100px] pt-[50px]'>
     <fieldset className="text-xl max-w-[800px] mx-auto  border-4 border-green-500 rounded-lg p-2">
        <legend className="px-2 text-xl text-center font-semibold underline decoration-green-500/60 decoration-2">All Todos
        </legend>
        <Link href={'/'} className="px-2 text-xl font-semibold underline decoration-green-500/60 decoration-2">Back home
        </Link>
        <div className="flex flex-col gap-2 px-2 text-md font-serif mt-[30px]">
            {data.map((item, i) => (
                <Link href={`/todos/${item.id}`} key={item.id}  className='bg-[#444] flex gap-[10px] rounded-[4px] p-[4px]'>
                    <span className='px-[10px]'>{i+1}</span>
                    {item.title}
                </Link>
            ))}
        </div>
    </fieldset>
   </div>
  )
}

export default Page