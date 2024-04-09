import React from 'react'
import { PopupButton } from "react-calendly";



// main component
const MainComponent = () => {
  return (
    <div>
        <div className='flex justify-center align-middle gap-5 mt-20 mb-10 about-fibery'>
                <p className='text-7xl fibery'>Know</p>
                <p className='text-7xl fibery'>About</p>
                <p className='text-7xl fibery'>Fibery</p>
                </div>
                <div className='flex justify-center align-middle schedule'>
                <p className='text-2xl' >Schedule a meeting to know more about us</p>
                </div>


         <div className="flex justify-center align-middle">
      <PopupButton className= "bg-black text-white py-2 px-4 rounded-md mt-10"
        url="https://calendly.com/saikiranthalloju/fibery-demo-1"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="black"
      />
      </div>

       
       <div className='flex justify-center align-middle mt-16 gap-5'>

        <button className="bg-gray-500 text-white py-2 px-4 rounded-md">Signup with 0</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md">Upgrade</button>

       </div>
      
    </div>
  )
}

export default MainComponent

