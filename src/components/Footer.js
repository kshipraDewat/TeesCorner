import React from 'react';
import  InstagramIcon from '@mui/icons-material/Instagram';
import  TwitterIcon from '@mui/icons-material/Twitter';
import  FacebookIcon from '@mui/icons-material/Facebook';
import  LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
    
      <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/>
        <p>&copy; @2023 Teescorner.com </p>
      </div>
    </div>
  )
}

export default Footer
