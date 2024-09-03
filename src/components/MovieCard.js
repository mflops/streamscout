import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  return (
    <Link
      to={props.type === 'movie' ? `/movie/${props.id}` : `/series/${props.id}`}
    >
      <div className='movie-card'>
        <h3>{props.title}</h3>
        <p>{props.year}</p>
        {props.poster === 'N/A' ? (
          <div
            style={{
              width: '200px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            No poster available.
          </div>
        ) : (
          <img
            className='movie-poster'
            src={props.poster}
            alt={`${props.title} poster`}
          />
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
