import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/banner.jpg'
import play from '../../assets/play.png'
import info from '../../assets/info.png'

import './home.css'

import './Home.css'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img className="banner-img" src={banner} />
        <div className="caption">
           <h2 className="">
            The <br/> OPPENHEIMER
           </h2>
           <p className="">
            Discovering his ties to the secrete ancient order,
            a young man living Istanbul embark on a quest tosave the world
            from an immortal enermy.
           </p>
           <div className="hero-btn">
            <button className="btn">
              <img className="" src={play} /> Play
            </button>
            <button className="btn dark-btn">
              <img className="" src={info} /> More Info
            </button>
           </div>
            <TitleCards category={"now_playing"} />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"popular"}  />
        <TitleCards title={"Only on Netlix"} category={"top_rated"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics For You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home