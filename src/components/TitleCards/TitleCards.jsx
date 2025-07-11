import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards from '../../assets/cards'
import {Link} from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
    
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ1ZDUzMTUwNWZjNmQxOTVhNmM5MmZhZjY4ZTBkYSIsIm5iZiI6MTcyNjU2MzgyNS40NTY3NjYsInN1YiI6IjY2ZTk0MzQwNTE2OGE4OTZlMTFlOWM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IsN2BxK52Ar0o2HKxbxeoOGtptV9pCPGbS-JkkWNXQ'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='titlecards'>
      <h2 className="">{title?title:"Poplar on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) =>{
          return(
            <Link to={`/player/${card.id}`} className="card" key={index} >
              <img className="" src={`https://image.tmdb.org/t/p/original` + card.backdrop_path} />
              <p className="">{card.title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards