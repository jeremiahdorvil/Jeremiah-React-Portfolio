import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`C:\Users\jerem\bootcamp\Challenges\Jeremiah-React-Portfolio\new-portfolio\public\assets\Quizard Screenshot.JPG${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Name: {props.name[0]}</h5>
          <p className="card-text">Description: {props.description[0]}</p>
          <a href="#" className="btn btn-primary">
            Visit {props.URL[0]}
          </a>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`C:\Users\jerem\bootcamp\Challenges\Jeremiah-React-Portfolio\new-portfolio\public\assets\Randomize-Movie.JPG${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Name: {props.name[1]}</h5>
          <p className="card-text">Description: {props.description[1]}</p>
          <a href="#" className="btn btn-primary">
            Visit {props.URL[1]}
          </a>
        </div>
      </div>
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={`C:\Users\jerem\bootcamp\Challenges\Jeremiah-React-Portfolio\new-portfolio\public\assets\RegEx Screenshot.JPG${randomWidth()}`}
            alt="Card cap"
          />
        <div className="card-body">
        <h5 className="card-title">Name: {props.name[2]}</h5>
          <p className="card-text">Description: {props.description[2]}</p>
          <a href="#" className="btn btn-primary">
            Visit {props.URL[2]}
          </a>
        </div>
      </div>
    </div>
  );
}
