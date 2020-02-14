import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function Movie({id,year,title,summary,poster,genres,rating}){
    return (
        <div className="movie col-md-5">   
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <p className="movie_title">{title}</p>
                <p className="movie_year">{year}</p>
                <p className="genre">{genres[0]}&nbsp;&nbsp;&nbsp;</p>
                <p className="genre">{genres[1]}&nbsp;&nbsp;&nbsp;</p>
                <p className="genre">{genres[2]}&nbsp;&nbsp;&nbsp;</p>
                <p className="genre">{genres[3]}&nbsp;&nbsp;&nbsp;</p>
            </div>
            <p className="movie_summary">{summary.slice(0,150)}
                ...<a href="">more</a>
            </p>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;

/*{genres.map(genre =>(
    <p className="genre">{genre}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    ))}*/





