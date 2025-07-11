import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.jpeg'
import drop from '../../assets/drop.png'
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef = useRef();
  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      }else{
        navRef.current.classList.remove('nav-dark');
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img className="" src={logo} />
        <ul className="">
          <li className="">Home</li>
          <li className="">Tv Show</li>
          <li className="">Movies</li>
          <li className="">New & Popular</li>
          <li className="">My List</li>
          <li className="">Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons" src={search} />
        <p className="">Children</p>
        <img className="icons" src={bell} />
        <div className="navbar-profile">
          <img className="icons" src={profile} />
          <img className="icons" src={drop} />
          <div className="dropdown">
            <p className="" onClick={()=>{logout()}}>
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar