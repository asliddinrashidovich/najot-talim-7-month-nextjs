import axios from 'axios'
import Link from 'next/link'


async function Page() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments')
  return (
    <div
    className="max-w-[600px] mx-auto mt-20 p-4 shadow-md rounded-lg border-t-2 border-teal-400 dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between pb-4">
            <p className="font-bold text-xl">Comments</p>
            <Link href={'/'} className="font-bold text-xl">Back home</Link>
        </div>
        <ul className="flex flex-col pl-1">
            {data.map((item, i) => (
                <li key={item.id} className="border-b py-2 dark:border-gray-600">
                    <Link href={`/comments/${item.id}`} className="dark:text-gray-300 hover:text-gray-500 cursor-pointer">{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Page