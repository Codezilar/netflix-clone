import React from 'react'
import './Footer.css'
import ig from '../../assets/ig.png'
import x from '../../assets/x.png'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.jpeg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img className="" src={facebook} />
        <img className="" src={x} />
        <img className="" src={ig} />
        <img className="" src={youtube} />
      </div>
      <ul className="">
        <li className="">Audio Description</li>
        <li className="">Help Center</li>
        <li className="">Gift Cards</li>
        <li className="">Media Center</li>
        <li className="">Investor Relationship</li>
        <li className="">Privacy</li>
        <li className="">Legal Notice</li>
        <li className="">Corporate Information</li>
        <li className="">Contact Us</li>
      </ul>
      <p className="copy-right">All right reserved 2024</p>
    </div>
  )
}

export default Footer