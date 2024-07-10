import React from 'react'
import { LuArrowUpDown } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Middle() {
  return (
    <>
    <div className='bg-[#d9d9d9] lg:max-w-[1400px] mx-auto'>
    <div className='flex justify-between'>
      <div className='flex gap-5 lg:ml-5  mt-6'>
        <h3 className='bg-white rounded px-2 text-[10px]'>Services</h3>
        <h3 className='bg-white rounded px-2 text-[10px]'>Top Ac Service Provider</h3>
      </div>
        <div className='flex gap-1 leading-3 bg-white mt-3 mb-2 rounded-lg lg:mr-5 lg:px-3  py-1'>
            <i><LuArrowUpDown /></i>
            <h3 className='text-[10px]'>Sort by : Relevance</h3>
        </div>
      </div>
      <hr className='border border-t-[1px] border-slate-500'/>
      <h1 className='mx-auto text-center underline font-bold'>Ac Service Providers</h1>



      <div className='max-w-[1200px] mx-auto grid grid-cols-1 gap-5'>
       <div className='bg-[#fefffe] mt-5 shadow-lg rounded-lg'>
        <div className='flex justify-between mx-auto pt-5 '>
            <div className=' lg:flex gap-3 ml-2'>
                <img className='rounded-full lg:w-12 w-20' src="https://imgs.search.brave.com/eftc6UYINUffgoIsgTlrDE6CXPbD0W_vJvdWEbErQ8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkyLzM3LzE3/LzM2MF9GXzc5MjM3/MTc5OV9TWVJaUkxx/bTlyMWpLMzZyZkY2/STJDd0ExVlI0RWxl/MC5qcGc" alt="" />
                <div>
                    <h1>Arjun Ravat</h1>
                    <p className='lg:text-[12px] text-[12px]'>Indian Ac Services</p>
                </div>
            </div>
            <div><h1 className='  text-center lg:leading-[45px] lg:text-[25px] hidden lg:block vishal ' >We are here to help you...</h1></div>
            <div className='flex justify-end mr-2'>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i><IoIosStarOutline className=''/></i>              
                
            </div>
        </div>
         <div className='flex lg:flex-row flex-col mt-2 '>
            <div className=' basis-[30%] ml-2'>
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
            </div>
            <div className='basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5' >
                <h1 className='text-center lg:hidden mb-3 vishal'>We are here to help you...</h1>
                <div className='grid lg:grid-cols-5 grid-cols-2 gap-3'>
               <img className='' src="https://imgs.search.brave.com/7tyFM0P5PKcm0K1df_NUwiEA6OD8IRE8lck_qvO98SI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODM3NjEwOS9waG90/by9haXItY29uZGl0/aW9uZXItcmVwYWly/ZXJzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YdXJybXBt/bzhJZ003aXJicG5n/ay1qM3RaZXpLdERX/MGVhUC1Ib3lDYU93/PQ" alt="oops1" />
               <img className='' src="https://imgs.search.brave.com/cqUI3sdqcdR2DBUy56SKEDJkFJDK3_SLkqWLDQsjLAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZXBhaXJtYW4tZG9p/bmctYWlyLWNvbmRp/dGlvbmVyLXNlcnZp/Y2VfMTMwMy0yNjU0/MS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="oops2" />
               <img className='' src="https://media.gettyimages.com/id/1499489976/photo/heat-pump-on-a-yellow-holiday-home-in-the-summer.jpg?s=612x612&w=0&k=20&c=QqCuZKZ-S4qhN7ffy5GX-VvUes9uIynVizKhIn6mrc4=" alt="oops3" />
               <img className='' src="https://media.gettyimages.com/id/1582919170/photo/a-male-electrician-is-standing-in-the-yard-installing-a-heat-pump.jpg?s=612x612&w=0&k=20&c=3pNcTNOOqX42H6z1vam_81rQTcM6SfY-e5rpZ3e3ojg=" alt="" />
               <img className='' src="https://media.gettyimages.com/id/1499943350/photo/air-conditioning-compressor-hanging-wall.jpg?s=612x612&w=0&k=20&c=CJ7yQ26T7LoS0baBS7ZqCywYHA6zPJcClbPVugFUghw=" alt="" />
               </div>
            </div>
         </div>
         <div className='flex justify-between mx-1 mt-2'>
            <div className='flex'>
              <i className='opacity-30'><FaLocationDot/></i>
              <p className='font-light text-[13px] leading-3'>Hadapsar,Pune-411028</p>
            </div>
            <div className='flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2'>
            <p className='leading-3 text-white text-[12px]'>Contact </p>
            <i className='text-white'><FaWhatsapp /></i>
            </div>


      </div>
       </div> 
       <div className='bg-[#fefffe] mt-5 shadow-lg rounded-lg'>
        <div className='grid mx-auto grid-cols-3 pt-5 '>
            <div className=' lg:flex gap-3 ml-2'>
                <img className='rounded-full lg:w-12 w-20' src="https://t4.ftcdn.net/jpg/03/78/43/25/240_F_378432516_6IlKiCLDAqSCGcfc6o8VqWhND51XqfFm.jpg" alt="" />
                <div>
                    <h1>Vijay Shinde</h1>
                    <p className='lg:text-[12px] text-[12px]'>Shinde Air Conditioning</p>
                </div>
            </div>
            <div><h1 className='text-center lg:leading-[45px] lg:text-[25px] hidden lg:block vishal'>We are here to help you...</h1></div>
            <div className='flex justify-end mr-2'>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i className="fa fa-star checked text-yellow-400"></i>
                <i><IoIosStarOutline className=''/></i>
            </div>
        </div>
         <div className='flex lg:flex-row flex-col mt-2 '>
            <div className='basis-[30%]  ml-2'>
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
            </div>
            <div className='basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5' >
               <h1 className='text-center lg:hidden mb-3 vishal'>We are here to help you...</h1>
               <div className='grid lg:grid-cols-5 grid-cols-2 gap-3'>
               <img className='' src="https://imgs.search.brave.com/zKnZRqDTDoh5xCXA3LobwCSuL9KbTp_5awWxzPZBu5Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODIxMjYw/MTIzNzgtODU5Y2E3/YTlmNGNmP2ZtPWpw/ZyZ3PTMwMDAmYXV0/bz1mb3JtYXQmZml0/PWNyb3AmcT02MCZp/eGxpYj1yYi00LjAu/MyZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE5YeDhZ/V2x5SlRJd1kyOXVa/R2wwYVc5dVpYSjha/VzU4TUh4OE1IeDhm/REE9.jpeg" alt="oops1" />
               <img className='' src="https://imgs.search.brave.com/88H3MVNIh8dpehyZijD6tVSYMD_gE1rfzJLu3Eaq4gI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODMxMzQ1/MTI1MzgtN2IzOTBk/MGFkYzllP2ZtPWpw/ZyZ3PTMwMDAmYXV0/bz1mb3JtYXQmZml0/PWNyb3AmcT02MCZp/eGxpYj1yYi00LjAu/MyZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE9YeDhZ/V2x5SlRJd1kyOXVa/R2wwYVc5dVpYSjha/VzU4TUh4OE1IeDhm/REE9.jpeg" alt="oops2" />
               <img className='' src="https://media.gettyimages.com/id/1499489976/photo/heat-pump-on-a-yellow-holiday-home-in-the-summer.jpg?s=612x612&w=0&k=20&c=QqCuZKZ-S4qhN7ffy5GX-VvUes9uIynVizKhIn6mrc4=" alt="oops3" />
               <img className='' src="https://media.gettyimages.com/id/1582919170/photo/a-male-electrician-is-standing-in-the-yard-installing-a-heat-pump.jpg?s=612x612&w=0&k=20&c=3pNcTNOOqX42H6z1vam_81rQTcM6SfY-e5rpZ3e3ojg=" alt="" />
               <img className='' src="https://media.gettyimages.com/id/1499943350/photo/air-conditioning-compressor-hanging-wall.jpg?s=612x612&w=0&k=20&c=CJ7yQ26T7LoS0baBS7ZqCywYHA6zPJcClbPVugFUghw=" alt="" />
               </div>
            </div>
         </div>
         <div className='flex justify-between mx-1 mt-2'>
            <div className='flex'>
              <i className='opacity-30'><FaLocationDot/></i>
              <p className='font-light text-[13px] leading-3'>Hadapsar,Pune-411028</p>
            </div>
            <div className='flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2'>
            <p className='leading-3 text-white text-[12px]'>Contact </p>
            <i className='text-white'><FaWhatsapp /></i>
            </div>


      </div>
       </div> 
       <div className='bg-[#fefffe] mt-5 shadow-lg rounded-lg'>
        <div className='grid mx-auto grid-cols-3 pt-5 '>
            <div className=' lg:flex gap-3 ml-2'>
                <img className='rounded-full lg:w-12 w-20' src="https://as1.ftcdn.net/v2/jpg/06/83/01/76/1000_F_683017696_p2RfGFBwQebTO1VvMnA5NXQeqIskEfWe.jpg" alt="" />
                <div>
                    <h1>Krishna Rao</h1>
                    <p className='lg:text-[12px] text-[12px]'>Krishna Ac Services</p>
                </div>
            </div>
            <div><h1 className='text-center lg:leading-[45px] lg:text-[25px] hidden lg:block vishal'>We are here to help you...</h1></div>
            <div className='flex justify-end mr-2'>
            <i className="fa fa-star checked text-yellow-400"></i>
            <i className="fa fa-star checked text-yellow-400"></i>
            <i className="fa fa-star checked text-yellow-400"></i>
                <i><IoIosStarOutline className=''/></i>
                <i><IoIosStarOutline className=''/></i>
            </div>
        </div>
         <div className='flex lg:flex-row flex-col mt-2 '>
            <div className=' basis-[30%] ml-2'>
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
            </div>
            <div className='basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5' >
               <h1 className='text-center lg:hidden mb-3 vishal'>We are here to help you...</h1>
               <div className='grid lg:grid-cols-5 grid-cols-2 gap-3'>
               <img className='' src="https://imgs.search.brave.com/7tyFM0P5PKcm0K1df_NUwiEA6OD8IRE8lck_qvO98SI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODM3NjEwOS9waG90/by9haXItY29uZGl0/aW9uZXItcmVwYWly/ZXJzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YdXJybXBt/bzhJZ003aXJicG5n/ay1qM3RaZXpLdERX/MGVhUC1Ib3lDYU93/PQ" alt="oops1" />
               <img className='' src="https://imgs.search.brave.com/cqUI3sdqcdR2DBUy56SKEDJkFJDK3_SLkqWLDQsjLAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZXBhaXJtYW4tZG9p/bmctYWlyLWNvbmRp/dGlvbmVyLXNlcnZp/Y2VfMTMwMy0yNjU0/MS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="oops2" />
               <img className='' src="https://media.gettyimages.com/id/1499489976/photo/heat-pump-on-a-yellow-holiday-home-in-the-summer.jpg?s=612x612&w=0&k=20&c=QqCuZKZ-S4qhN7ffy5GX-VvUes9uIynVizKhIn6mrc4=" alt="oops3" />
               <img className='' src="https://media.gettyimages.com/id/1582919170/photo/a-male-electrician-is-standing-in-the-yard-installing-a-heat-pump.jpg?s=612x612&w=0&k=20&c=3pNcTNOOqX42H6z1vam_81rQTcM6SfY-e5rpZ3e3ojg=" alt="" />
               <img className='' src="https://media.gettyimages.com/id/1499943350/photo/air-conditioning-compressor-hanging-wall.jpg?s=612x612&w=0&k=20&c=CJ7yQ26T7LoS0baBS7ZqCywYHA6zPJcClbPVugFUghw=" alt="" />
               </div>
            </div>
         </div>
         <div className='flex justify-between mx-1 mt-2'>
            <div className='flex'>
              <i className='opacity-30'><FaLocationDot/></i>
              <p className='font-light text-[13px] leading-3'>Hadapsar,Pune-411028</p>
            </div>
            <div className='flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2'>
            <p className='leading-3 text-white text-[12px]'>Contact </p>
            <i className='text-white'><FaWhatsapp /></i>
            </div>


      </div>
       </div> 
       <div className='bg-[#fefffe] mt-5 shadow-lg rounded-lg'>
        <div className='grid mx-auto grid-cols-3 pt-5 '>
            <div className='lg:flex gap-3 ml-2'>
                <img className='rounded-full lg:w-12 w-20' src="https://t3.ftcdn.net/jpg/04/88/67/84/240_F_488678408_7wYKMAT5v4wfiyo8N78wvP71cvh5yZKq.jpg" alt="" />
                <div>
                    <h1>Sachin Borde</h1>
                    <p className='lg:text-[12px] text-[12px]'>Air Cool Solution</p>
                </div>
            </div>
            <div><h1 className='text-center lg:leading-[45px] lg:text-[25px] hidden lg:block  vishal'>We are here to help you...</h1></div>
            <div className='flex justify-end mr-2'>
            <i className="fa fa-star checked text-yellow-400"></i>
            <i className="fa fa-star checked text-yellow-400"></i>
            <i className="fa fa-star checked text-yellow-400"></i>
            <i className="fa fa-star checked text-yellow-400"></i>
            <i className="fa fa-star checked text-yellow-400"></i>
            </div>
        </div>
         <div className='flex lg:flex-row flex-col mt-2 '>
            <div className=' basis-[30%] ml-2'>
                <h1 className='text-[12px] font-semibold lg:text-[17px]'>Service Flow</h1>
                <li className='text-[10px] lg:text-[15px] ml-4'>Pre-service checks</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Jacket for mess-free service</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Indoor unit Foam-jet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Outdoor unit Powerjet cleaning</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Final checks & clean-up</li>
                <li className='text-[10px] lg:text-[15px] ml-4'>Personal energy saving report</li>
            </div>
            <div className='basis-[65%] mx-auto my-auto lg:mr-20 gap-2 mt-5' >
                <h1 className='text-center lg:hidden mb-3 vishal'>We are here to help you...</h1>
                <div className='grid lg:grid-cols-5 grid-cols-2 gap-3'>
               <img className='' src="https://imgs.search.brave.com/7tyFM0P5PKcm0K1df_NUwiEA6OD8IRE8lck_qvO98SI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODM3NjEwOS9waG90/by9haXItY29uZGl0/aW9uZXItcmVwYWly/ZXJzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YdXJybXBt/bzhJZ003aXJicG5n/ay1qM3RaZXpLdERX/MGVhUC1Ib3lDYU93/PQ" alt="oops1" />
               <img className='' src="https://imgs.search.brave.com/cqUI3sdqcdR2DBUy56SKEDJkFJDK3_SLkqWLDQsjLAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZXBhaXJtYW4tZG9p/bmctYWlyLWNvbmRp/dGlvbmVyLXNlcnZp/Y2VfMTMwMy0yNjU0/MS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="oops2" />
               <img className='' src="https://media.gettyimages.com/id/1499489976/photo/heat-pump-on-a-yellow-holiday-home-in-the-summer.jpg?s=612x612&w=0&k=20&c=QqCuZKZ-S4qhN7ffy5GX-VvUes9uIynVizKhIn6mrc4=" alt="oops3" />
               <img className='' src="https://media.gettyimages.com/id/1582919170/photo/a-male-electrician-is-standing-in-the-yard-installing-a-heat-pump.jpg?s=612x612&w=0&k=20&c=3pNcTNOOqX42H6z1vam_81rQTcM6SfY-e5rpZ3e3ojg=" alt="" />
               <img className='' src="https://media.gettyimages.com/id/1499943350/photo/air-conditioning-compressor-hanging-wall.jpg?s=612x612&w=0&k=20&c=CJ7yQ26T7LoS0baBS7ZqCywYHA6zPJcClbPVugFUghw=" alt="" />
               </div>
            </div>
         </div>
         <div className='flex justify-between mx-1 mt-2'>
            <div className='flex'>
              <i className='opacity-30'><FaLocationDot/></i>
              <p className='font-light text-[13px] leading-3'>Hadapsar,Pune-411028</p>
            </div>
            <div className='flex gap-1 bg-green-700 px-3 py-2 rounded-xl mb-2'>
            <p className='leading-3 text-white text-[12px]'>Contact </p>
            <i className='text-white'><FaWhatsapp /></i>
            </div>
      </div>
       </div> 



       
      </div>









    </div>
    </>
  )
}
