import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Contact me at any of the following links.
      </p>
      <div>
        <a href= 'http://www.github.com'>
        <FontAwesomeIcon icon={icon({name: "github", family: "solid"})} />
        </a>
      </div>
      <div>
        <a href='http://www.linkedin.com/in/jeremiah-dorvil'>
        <FontAwesomeIcon icon={icon({name: "linkedin", family: "solid"})} />
        </a>
      </div>
      <div>
        <a href='mailto:jeremiahdorvil@outlook.com'>
        <FontAwesomeIcon icon={icon({name: "square-envelope", family: "solid"})} />
        </a>
      </div>
      <div>
        <a href='tel:4754550981'>
        <FontAwesomeIcon icon = {icon({name:"mobile-screen-button", family: "solid"})} />
        </a>
      </div>
    </div>
  );
}
