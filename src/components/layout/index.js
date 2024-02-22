import React from 'react'
import "../../styles/layout.css"
import Drawer from "../atoms/Drawer"
import Navbar from '../organisms/Navbar';

const index = ({children}) => {
  return (
    <>
   <Navbar/>
     <div className="App">
        <div className='side-drawer' >
              <Drawer/>
        </div>
        <div className='content' >
              {children}
        </div>
    </div> 
    </>
  )
}

export default index