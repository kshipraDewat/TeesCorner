import React from 'react'
import bgAbout from "../assets/bgAbout.webp"
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
     <div className= "aboutTop" style={{backgroundImage: `url(${bgAbout})` } }>

     </div> 
    
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita quidem incidunt rem suscipit voluptatibus numquam provident ad, culpa aut ipsa corrupti molestiae, a reiciendis earum. Repudiandae explicabo temporibus exercitationem, in quis rem voluptatem eius qui, sit ad, facere ratione?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut optio eum asperiores aliquid. Vero distinctio expedita obcaecati facere laudantium in numquam, officia at corrupti deleniti sunt quae nostrum quod repellat, facilis quo labore debitis, ullam veritatis ratione illum commodi unde! Laborum nostrum dolorem qui ad tempore omnis corrupti possimus impedit sapiente sequi ex inventore id laboriosam ipsum provident voluptatem voluptas aliquid, neque sed repellendus quia maiores labore adipisci! Nisi explicabo eos, sequi, dolore atque quibusdam natus molestiae dolorem quos quam temporibus alias, quasi incidunt praesentium! Beatae odit et veniam ab nostrum? Delectus, doloremque possimus. Delectus tempora deleniti amet dolorem.</p>
      </div>
    </div>
  )
}

export default About;
