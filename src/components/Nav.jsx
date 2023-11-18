import React from 'react'
import { Link,useLocation } from 'react-router-dom'
function Nav() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className=' w-full border-b-[1px] border-blue-900 z-40 bg-blue-950 fixed drop-shadow-lg text-xs sm:text-base    '>
            <div className='flex justify-between p-4 '>
                <div className='flex items-center'>
                    <Link to='/'><img src="../../public/pokeshop.png" className='w-24 sm:w-40' alt="" /></Link>
                </div>
                <div className='flex gap-2 sm:gap-8 mx-4 text-white  text-center items-center '>
                    <Link to='/' className={location.pathname === '/' ? 'underline' : 'hover:underline'}>Home</Link>
                    <Link to='/shop/' className={location.pathname === '/shop/' ? 'underline ' : 'hover:underline'}>Shop</Link>
                    <Link to='/' className='bg-transparent border-[1px] text-white px-3  py-2 rounded-full'>Sign In</Link>
                   <Link to='/cart'>
                   <img className={location.pathname === '/cart' ? 'w-12 bg-white rounded-full' : 'w-12  rounded-full'}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" alt="" />
                   </Link>
                </div>
            </div>
    </div>
  )
}

export default Nav