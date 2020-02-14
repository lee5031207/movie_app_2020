import React from 'react';
//import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movies";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count"
    );
    this.setState({ movies, isLoading: false });
  };


  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? <div className="loader">
              <span className="loader_text">LOADING...</span>
          </div>
          : <div className="movies row">
              {movies.map( x=>(
                <Movie
                key={x.id}
                id={x.id}
                year={x.year}
                title={x.title}
                summary={x.summary}
                poster={x.medium_cover_image}
                genres={x.genres}
                rating={x.rating}
                />
              ))}
            </div>
            }
      </section>
    );
  }
}

export default App;
