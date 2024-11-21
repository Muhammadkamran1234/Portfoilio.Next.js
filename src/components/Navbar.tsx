import React from 'react'
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setisMenuOpen]  = useState (false)

  const toogleMenu = () => {
    setisMenuOpen (!isMenuOpen) 
  } 
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Kamran</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#home'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'> Projects</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#skills'>Contact</a></li>
                
               
            </ul>
       <div className='md:hidden' onClick={toogleMenu}>
        {isMenuOpen ? <AiOutlineClose size = {30} /> : 
        <AiOutlineMenu size = {30}/>
        }
        </div>            
        </div>
        {isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'>
              <a href='#hero' onClick={toogleMenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href='#About' onClick={toogleMenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href='#Projects' onClick={toogleMenu}>Projects</a>
            </li>
            <li className='menuLink'>
              <a href='#Skills' onClick={toogleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href='#Contacts' onClick={toogleMenu}>Contacts</a>
            </li>
            
          </ul>
        )

        }
      
    </div>
  )
}

export default Navbar
