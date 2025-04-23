import axios from 'axios'
import Link from 'next/link'


async function Page() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
  return (
    <div className='px-[30px]'>
        <div className='text-center flex my-[50px] justify-center gap-[200px]'>
            <h3>Photos</h3>
            <Link href={'/'}>Back home</Link>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 max-w-[1000px] mx-auto">        
            {data.map((item, i) => (
                <Link href={`/photos/${item.id}`} key={item.id} className="relative rounded cursor-pointer overflow-hidden">
                    <img src={`https://picsum.photos/id/${Math.floor(Math.random()*100)}/400/400`} alt="Planter Stand with Pots" className=""/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Page