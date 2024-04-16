import React from 'react'

const Footer = () => {
  return (
    <div>
          <div className="bg-[#000814]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#051923"
          fillOpacity="1"
          d="M0,128L0,32L288,32L288,256L576,256L576,160L864,160L864,32L1152,32L1152,160L1440,160L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#051923] py-[10px] select-none">
      <footer className="flex flex-col space-y-10 justify-center m-10">

<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a className="hover:text-white transition duration-200" href="#home">Home</a>
    <a className="hover:text-white transition duration-200" href="#about">About</a>
    <a className="hover:text-white transition duration-200" href="#skills">Skills</a>
    <a className="hover:text-white transition duration-200" href="#projects">Projects</a>
    <a className="hover:text-white transition duration-200" href="#contact">Contact Us</a>
</nav>

<div className="flex justify-center space-x-5">
    <a href="https://www.facebook.com/profile.php?id=100047232660129&sk=about" target="_blank" rel="noopener noreferrer">
        <img loading='lazy' src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt='facebook'/>
    </a>
    <a href="https://www.linkedin.com/in/omar-adel-b429a32a2/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer">
        <img loading='lazy' src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt='linkedin'/>
    </a>
    <a href="https://www.instagram.com/omar_o_adel/?hl=ar" target="_blank" rel="noopener noreferrer">
        <img loading='lazy' src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt='instagram'/>
    </a>
    
</div>
            <p className="text-center text-gray-700 font-medium">Thank You For Scrolling {" (:"}</p>
</footer>
      </div>
    </div>
    </div>
  )
}

export default Footer