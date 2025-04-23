import axios from 'axios'
import Link from 'next/link'

async function Page() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  return (
   <div className='px-[30px]'>
     <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16 mb-[60px]">
        <div className="bg-gray-100 py-2 flex justify-between px-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Users</h2>
            <Link href={'/'} className='text-[#000]'>Back to home</Link>
        </div>
        <ul className="divide-y divide-gray-200">
            {data.map((item, i) => (
                <li key={item.id} className="flex items-center py-4 px-6">
                    <span className="text-gray-700 text-lg font-medium mr-4">{i + 1}</span>
                    <img className="w-12 h-12 rounded-full object-cover mr-4" src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}
                        alt="User avatar"/>
                    <div className="flex-1">
                        <Link href={`/users/${item.id}`} className="hover:text-[green] text-lg font-medium text-gray-800">{item.name}</Link>
                        <p className="text-gray-600 text-base">{item.email}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
   </div>
  )
}

export default Page