import React from 'react';
import Card from './WorkCards';

const Repo = {
  name: ['Quizard', 'Movie Randomizer', 'Regular Expressions Tutorial'], description: ['A quiz application capable of multiple choice questions in many different categories. Users can also chat in a live message board with others who are online.', 'This application allows the user to simply click a button to get a random movie recommendation. If you want another movie idea, just press the button again for a new result. The site also has persistence through local storage so you can see history of your previously displayed movies.', 'This is a tutorial I wrote about RegEx explaining each component of the example code.'], URL: ['https://warm-shore-84336.herokuapp.com/', 'https://cmp75.github.io/Movie-Randomizer/', 'https://gist.github.com/jeremiahdorvil/e5483f68da1c043092c85c63b2c8ba64']
};

export function Display() {
  return (
<div>
    <ul>
        <li>
            <Card url={Repo.URL[0]} name={Repo.name[0]} description={Repo.description[0]} />
        </li>
        <li>
            <Card url={Repo.URL[1]} name={Repo.name[1]} description={Repo.description[1]} />
        </li>
        <li>
            <Card url={Repo.URL[2]} name={Repo.name[2]} description={Repo.description[2]} />
        </li>
    </ul>
</div>
  );
}
