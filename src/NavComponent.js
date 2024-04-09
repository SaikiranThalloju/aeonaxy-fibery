import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faChevronDown} from "@fortawesome/free-solid-svg-icons"



// navbar component
const NavComponent = () => {
  return (
    <nav className='flex justify-between px-4 nav-container'>
      <div className='text-6xl '>Fibery</div>
      <div className='flex justify-around'>
        <div className='flex gap-6 mt-6 options text-1xl'>
           <p>Solutions
           <FontAwesomeIcon className='px-1' icon={faChevronDown} />
           </p>
           <p>Product
           <FontAwesomeIcon className='px-1' icon={faChevronDown} />
           </p>
           <p>Resources
           <FontAwesomeIcon className='px-1' icon={faChevronDown} />
           </p>
           <p>Pricing
           </p>
           <p>...</p>
           </div>
      </div>
      <div className='mt-4 buttons'>
            <button className='mx-4'>Log In</button>
            <button className='bg-black text-white p-2'>Sign up</button>
           </div>

    </nav>
  )
}

export default NavComponent



