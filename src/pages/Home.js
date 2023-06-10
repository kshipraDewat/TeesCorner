import React from 'react'
import { Link } from "react-router-dom";
import Image from "../assets/bg.jpg";
import "../styles/Home.css"
import { Repeat } from '@mui/icons-material';

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${Image})` } }>
      <div className="headerContainer">
      <h1>Tee's corner</h1>
        <p>find your perfect style here...</p>
        <Link to ="/designs">
        <button> ADD TO CART </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
