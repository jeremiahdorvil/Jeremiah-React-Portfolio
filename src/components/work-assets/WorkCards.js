import React from 'react';

export default function Card(props) {
  console.log(props)
  const cardStyle = {
    width: '18rem',
  };

  return (
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`${props.image}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h3 className="card-title">Name: {props.name}</h3>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">GitHub Repo: {props.github}</p>
          <a href={props.url} className="btn btn-primary">
            Visit {props.url}
          </a>
        </div>
      </div>
  );
}
