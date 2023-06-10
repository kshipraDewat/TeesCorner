import React, { useState } from 'react';
import logo from '../assets/logooo.jpg';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const ToggelNavbar = ()=>{
    setOpenLinks(!openLinks);
  }
  return ( 
    <div className='navbar'>
        <div className="left" id={openLinks ? "open" : "close" } >
            <img src={logo} />
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/designs"> Designs </Link>
              <Link to="/contact"> Contact </Link>
            </div>
        </div>
        
        <div className="right">

              <Link to='/'> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/designs"> Designs </Link>
              <Link to="/contact"> Contact </Link>
            <button onClick={ToggelNavbar}>
               <ReorderIcon />
            </button>

        </div>
    </div>
  );
}

export default Navbar
