import React from 'react';
import profileimg from '../assets/New-York-Balcony-Pic.jpg';

export default function Home() {
  return (
    <div className='container text-center'>
      <h1 className='text-center'>Home Page</h1>
        <img style={{
        height: "100%",
        maxWidth: "500px",
        width: "100%",
        borderRadius: "2000px"}}
        src={profileimg} alt="Jeremiah and his Wife" />
        {/* <style>
          img, svg {
          vertical-align: middle;
          height: 100%;
          max-width: 500px;
          width: 100%;
          border-radius: 2000px;
          }; 
        </style> */}
      <p>
        Welcome to my portfolio! 
        
        Feel free to navigate this site and get to know more about me. Head over to my contact page if you need to reach me about anything.
        
        Thanks for visiting!
      </p>
    </div>
  )
}
