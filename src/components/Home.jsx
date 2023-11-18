import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <div>
            <div className='flex justify-center  overflow-hidden  py-36 bg-cover ' style={{ backgroundImage: "url('/bg1.jpg')" }}>
                <div className='max-w-7xl flex flex-col-reverse sm:flex-row  gap-24 justify-between mx-4' >
                  <div className=' flex flex-col w-full gap-4  justify-center text-white '>
                    <h1 className='font-bold leading-tight text-4xl lg:text-5xl '>
                    Explore the Wonders of Our Pokemon Shop!
                    </h1>
                    <p>
                     The Perfect Companion at Our Pokemon Shop! Make It Yours with Ease and Unleash the Joy of Owning Your Very Own Pokemon.</p>
                    <Link to='/shop/1' className='w-24 bg-white rounded-lg font-bold p-2 text-center text-black z-30 hover:bg-gray-100'>Buy now</Link>
                  </div>
                  <img className='w-[300px]  md:w-[800px]' src="/homepic.png" alt="" />
                </div>
            </div>
            <div className='flex  justify-center bg-gray-50 overflow-hidden  py-20 bg-cover  ' style={{ backgroundImage: "url('/bg2.jpg')" }}>
                <div className='max-w-7xl flex flex-col sm:flex-row gap-24 justify-between p-4' >
                  <div className='flex flex-col gap-6 mt-4 w-full '>
                      <h3 className='text-2xl font-bold text-blue-800 pl-2 '>About Us</h3>
                      <img className='w-[240px]' src="/pokeshop.png" alt="" />
                      <p className='pl-2  font-light'>POKESHOP not just a store, we are a haven for Pokemon enthusiasts, a place where the magic of the Pokemon world comes to life. As avid fans ourselves, we understand the deep connection people have with these fantastic creatures, and we've created a space that celebrates the spirit of Pokemon in all its glory.</p>
                      <Link to="/shop/" className='w-max bg-orange-500 hover:bg-orange-400 rounded-lg font-bold p-2 px-3  text-white ml-2'>Shop now</Link>
                  </div>
                  <div className=' flex flex-col w-full gap-8  justify-center items-center ' >
                        <div className='flex gap-8 '>
                              <div className='bg-white p-3 w-40 drop-shadow-2xl   flex flex-col gap-3 rounded-lg   items-center'>
                                <img className='w-16 flex justify-center ' src="/deliver.png" alt="" />
                                <h1 className='text-center font-bold '>Fast Delivery</h1>
                                <p className='text-xs font-light text-gray-600 text-center  p-2'>We prioritize fast and reliable delivery services, same-day delivery.</p>
                              </div>
                              <div  className='bg-white p-3 w-40 drop-shadow-2xl   flex flex-col gap-3 rounded-lg  items-center'>
                                <img className='w-16 flex justify-center' src="/service.png" alt="" />
                                <h1 className='text-center font-bold'>Best Service</h1>
                                <p className='text-xs font-light text-gray-600 text-center '>You can reach out through live chat and helpline with support team is trained.</p>
                              </div>
                        </div>
                        <div className='flex  gap-8'>
                              <div className='bg-white p-3 w-40 drop-shadow-2xl   flex flex-col gap-3 rounded-lg  items-center'>
                                <img className='w-16 flex justify-center ' src="/return.png" alt="" />
                                <h1 className='text-center font-bold'>7-day Return</h1>
                                <p className='text-xs font-light text-gray-600 text-center '> If you're not satisfied with your purchase, you can return it within 7 days at no extra cost. </p>
                              </div>
                              <div className='bg-white p-3 w-40 drop-shadow-2xl   flex flex-col gap-3 rounded-lg  items-center'>
                                <img className='w-16 flex justify-center ' src="/star.png" alt="" />
                                <h1 className='text-center font-bold'>Be Verified </h1>
                                <p className='text-xs font-light text-gray-600 text-center '>Transparent communication, openness interactions, offering a positive experiences. </p>
                              </div>
                        </div>
                  </div>
                </div>
            </div>
            <div className='flex justify-center  overflow-hidden  py-24 bg-cover ' style={{ backgroundImage: "url('/bg3.jpg')" }}>
                <div className='max-w-7xl flex flex-col text-center gap-12 justify-between items-center ' >
                 <div className='flex flex-col gap-8 w-[640px] '>
                    <h1 className='text-2xl sm:text-5xl font-bold flex justify-center'>Reviewed by People</h1>
                    <p className='text-sm text-gray-600 hidden sm:flex '>
                     Discover the positive impact we've made on our clients by reading through their reviews. Our clients have experienced our services and products, and they're eager to share their positive experiences with you.
                    </p>
                 </div>
                  <div>
                    <div className='flex gap-12 justify-center drop-shadow-lg'>
                      <div className='bg-white rounded-lg p-8 w-1/3 '>
                          <div className='flex flex-col justify-between gap-12 h-full '>
                              <p className=''>"We bought a Pokémon from this website and had an amazing experience! The buying process was easy, and the price was very affordable.""</p>
                              <div className='flex gap-4'>
                                <div className='w-12 h-12 rounded-full overflow-hidden   '>
                                  <img className='' src="https://www.tvguide.com/a/img/resize/cb0f3e8b5fc7d47bb9a753e8f7da6b74624f1c3e/catalog/provider/10/9/10-9AB4F585-16CE-40BC-87B5-2208F39651CE.png?auto=webp&fit=crop&height=300&width=200" alt="" />
                                </div>
                               <div className='text-left'>
                                    <h2 >John Cena</h2>
                                    <p className='font-light'>USA</p>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className='bg-white rounded-lg p-8 w-1/3  hidden sm:flex drop-shadow-lg'>
                          <div className='flex flex-col justify-between gap-12 h-full'>
                              <p >""The Pokémon shop provided excellent service and made our lives even better. Highly recommended for this shop!"</p>
                              <div className='flex gap-4'>
                                <div className='w-12 h-12 rounded-full overflow-hidden   '>
                                  <img className='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/220px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg" alt="" />
                                </div>
                               <div className='text-left'>
                                    <h2>Dwayne  Johnson</h2>
                                    <p className='font-light'>USA</p>
                                </div>
                              </div>
                          </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home