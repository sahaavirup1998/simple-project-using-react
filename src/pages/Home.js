import React from 'react';
import Banner from "../assets/pizza.jpeg"
import "../styles/Home.css"
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Banner})`}}>
        <div className='headerContainer'>
          <h1> Dominoz's Pizza</h1>
          <p> PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
          <button>Order Now</button>
        </Link>
        </div>
    </div>
  )
}

export default Home;
