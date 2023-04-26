import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


export default function Contact() {
  return (
    <div className='container col-4'>
      <h1>Contact Page</h1>
      <p>
        Contact me at any of the following links.
      </p>
      <div>
        <a href= {'http://www.github.com'}>
        <i class="fa-brands fa-github"></i>
        {/* <FontAwesomeIcon icon="fa-brands fa-github" />        */}
        </a> 
      </div>
      <div>
        <a href={'http://www.linkedin.com/in/jeremiah-dorvil'}>
        <i class="fa-brands fa-linkedin"></i>
        {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" />  */}
        </a> 
      </div>
      <div>
        <a href={'mailto:jeremiahdorvil@outlook.com'}>
        <FontAwesomeIcon icon={icon({name: "square-envelope", family: "classic", style: "solid"})} />
        </a>
      </div>
      <div>
        <a href={'tel:4754550981'}>
        <FontAwesomeIcon icon = {icon({name:"mobile-screen-button", family: "classic", style: "solid"})} />
        </a>
      </div>
    </div>
  );
}
