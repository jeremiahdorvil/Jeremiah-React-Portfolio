import React from 'react';
import Card from './WorkCards';
import quizardimg from '../assets/Quizard-Screenshot.JPG';
import movieimg from '../assets/Randomize-Movie.JPG';
import regeximg from '../assets/RegEx-Screenshot.JPG';
import nosqlimg from '../assets/NoSQL-API-Screenshot.JPG';
import ufitimg from '../assets/mainpage.PNG';

const repo = [
  {
    name: 'Quizard',
    description: 'A quiz application capable of multiple choice questions in many different categories. Users can also chat in a live message board with others who are online.',
    url: 'https://warm-shore-84336.herokuapp.com/',
    image: quizardimg,
    github: 'https://github.com/cellopudding/Team-Project-2.git'
  },
  {
    name: 'Movie Randomizer',
    description: 'This application allows the user to simply click a button to get a random movie recommendation. If you want another movie idea, just press the button again for a new result. The site also has persistence through local storage so you can see history of your previously displayed movies.',
    url: 'https://cmp75.github.io/Movie-Randomizer/',
    image: movieimg,
    github: 'https://github.com/cmp75/Movie-Randomizer.git'
  },
  {
    name: 'NoSQL Social Network API',
    description: 'This back-end application can be used to run social media platforms in a large capacity due to the use of NoSQL\'s Database. The end user can create a user profile, they can post thoughts that will be associated with their profile, they can add other users as friends and add reactions to their friend\'s posted thoughts. The user can also remove friends, thoughts and reactions. All of this can be customized to the liking of the end-user.',
    url: 'https://drive.google.com/file/d/1UOJ85Fk0IKsM7k9E_YWCiOloApkg1L2P/view',
    image: nosqlimg,
    github: 'https://github.com/jeremiahdorvil/NoSQL-Social-API.git'
  },
  {
    name: 'U-Fit',
    description: 'U-Fit is an fitness tracker web application that helps the user to track their workouts and provides guides on exercises.',
    url: 'https://pure-savannah-65137.herokuapp.com/',
    image: ufitimg,
    github: 'https://github.com/sampaul10/Fitness-Tracker.git'
  },
  {
    name: 'Regular Expressions Tutorial',
    description: 'This is a tutorial I wrote about RegEx explaining each component of the example code.',
    url: 'https://gist.github.com/jeremiahdorvil/e5483f68da1c043092c85c63b2c8ba64',
    image: regeximg,
  }
];


export function Display() {
  return (
<div className='row'>
  {repo.map(item => (
    <div className='col-md-4 col-sm-12'>
            <Card url={item.url} name={item.name} description={item.description} image={item.image} github={item.github }/>
    </div>
  ))};
</div>
  );
};
