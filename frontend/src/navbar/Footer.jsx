import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialMidia = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/soumikghatak"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/soumik-ghatak-9273a5234/"
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/soumik.ghatak/"
  }
];

const Footer = () => {
  return (
    <div className='flex justify-between bg-gray-200 p-4 items-center text-center text-gray-600'>
      <h1>Author: Soumik Ghatak (IT'27)</h1>
      <div className='flex'>
        {socialMidia.map((social) => (
          <a 
            key={social.name} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-2 text-2xl text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer