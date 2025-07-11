import React, { useEffect, useState } from 'react'
import './Player.css'
import play from '../../assets/play.png'
import back from '../../assets/back-arrow.png'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ1ZDUzMTUwNWZjNmQxOTVhNmM5MmZhZjY4ZTBkYSIsIm5iZiI6MTcyNjY3NjkxNS4yODAwODIsInN1YiI6IjY2ZTk0MzQwNTE2OGE4OTZlMTFlOWM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3pQNHh8oCsccSM_-AcBFvRdnLvOA6YIn5VO6B8Kqvd4'
    }
  };

  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setVideo(response.results[0]))
      .catch(err => console.error(err));
  },[])
  

  return (
    <div className='player'>
      <img className="" src={back} onClick={() =>{navigate(-1)}} />
      <iframe className="" width="90%" height="90%"
        src={`https://www.youtube.com/embed/${video.key}`}
        title='Trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p className="">
          {video.published_at}
        </p>
        <p className="">
          {video.name}
        </p>
        <p className="">
          {video.type}
        </p>
      </div>
    </div>
  )
}

export default Player