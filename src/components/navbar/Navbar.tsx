import React from 'react'
import Navbarright from './Navbarright'
import NavbarLeft from './NavbarLeft' 
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-5'>
       
        <NavbarLeft />
         <Navbarright />
        {/* Add other navbar components here */}
    </div>
  )
}

export default Navbar