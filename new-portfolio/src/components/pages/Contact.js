import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


export default function Contact() {
  return (
    <div className='row align-items-start'>
    <div className='justify-content-center'>
      <h1>Contact Page</h1>
      <p>
        Contact me at any of the following links.
      </p>
      <div className='col'>
        <a href= {'http://www.github.com/jeremiahdorvil'}>
        <button type="button" class="btn btn-dark">
        <i class="fa-brands fa-github fa-lg"></i>
        </button>
        </a> 
      </div>
      <div className='col'>
        <a href={'http://www.linkedin.com/in/jeremiah-dorvil'}>
        <button type="button" class="btn btn-dark">
        <i class="fa-brands fa-linkedin fa-lg"></i>
        </button>
        </a> 
      </div>
      <div className='col'>
        <a href={'mailto:jeremiahdorvil@outlook.com'}>
        <button type="button" class="btn btn-dark">
        <FontAwesomeIcon icon={icon({name: "square-envelope", family: "classic", style: "solid"})} size = {32} />
        </button>
        </a>
      </div>
      <div className='col'>
        <a href={'tel:4754550981'}>
        <button type="button" class="btn btn-dark">
        <FontAwesomeIcon icon = {icon({name:"mobile-screen-button", family: "classic", style: "solid"})} size = {32} />
        </button>
        </a>
      </div>
    </div>
    </div>
  );
}
