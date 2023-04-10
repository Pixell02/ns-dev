import React from 'react'
import logo from '../img/logo.svg'
import "./navbar.css"
import { Link } from 'react-router-dom'
import ItemLink from './ItemLink'

export default function Navbar() {
  return (
    <nav>
    <div className='logo-container'>
      <img src={logo} height="50px" />
      <div className='d-flex align-items-end h-100 name-container'>
      {/* <p className='ml-2'> {"<"}dev-Studio{">"}</p> */}
      </div>
    </div>
    <div className='d-flex flex-row h-100 w-100 align-items-center justify-content-end'>
      <ItemLink link="/" name="Strona Główna" />
      <ItemLink link="/portfolio" name="Realizacje" />
      <ItemLink link="/opinion" name="Opinie" />
      <ItemLink link="/contact" name="Kontakt" />
    </div>  
    <div className='language-container'>
      <div className='d-flex'>
        <select name='language'>
          <option value="pl">Polski</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
    </nav>
  )
}
