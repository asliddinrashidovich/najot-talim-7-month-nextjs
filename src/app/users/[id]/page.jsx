import axios from 'axios'
import Link from 'next/link'


async function Page({params}) {
    const {id} = params
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return (
   <div className='px-[30px]' style={{ backgroundImage: `url('https://media.licdn.com/dms/image/v2/D5612AQENltQvmBK5Gg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713421064651?e=2147483647&v=beta&t=nEx2PdetKjbU-evubqR_Bv2VRqfpRMJRWtRJZYYKFmo')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
     <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto py-32 lg:my-0">
        <div id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white  lg:opacity-75 mx-6 lg:mx-0" >
                

            <div className="p-4 md:p-12 text-center lg:text-left">
                <div className="block lg:hidden rounded-full shadow-xl mx-auto  -mt-30 h-48 w-48 bg-cover bg-center"  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

                <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-[#222]">{data.name}</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-[#222] text-base font-bold flex items-center justify-center lg:justify-start">
                    <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg> {data.company.catchPhrase} <br /> {data.company.name}
                </p>
                <p className="pt-2  text-[#222] text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                    </svg> {data.address.city} - {data.address.street} - {data.address.suite} - <br /> {data.address.zipcode} lat = {data.address.geo.lat}    lng = {data.address.geo.lng}
                </p>
                <p className='text-[#333] pt-8'>{data.email}</p>
                <p className='text-[#333]'>{data.phone}</p>
                <p className='text-[#333]'>{data.username}</p>
                <p className='text-[#777] text-[15px]'>{data.website}</p>
                <div className="pt-12 pb-8">
                    <Link href={'/users'} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                        Back to users
                    </Link>
                </div>
            </div>

        </div>

        <div className="w-full lg:flex hidden lg:w-2/5 object-cover h-auto">
            <img className='h-full ' src={`https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}/>
        </div>

        <div className="absolute top-0 right-0 h-12 w-18 p-4">
            <button className="js-change-theme focus:outline-none">🌙</button>
        </div>

        </div>

   </div>
  )
}

export default Page