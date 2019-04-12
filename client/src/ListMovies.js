import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class ListMovies extends Component {
    //variables with state
    constructor(props) {
        super(props);
        this.state = {
            movieData: [],
        }
    }

    //on load fetch
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        fetch('/movies')
            .then(data => data.json())
            .then(data => this.setState({movieData: data}))
    };
    //structure and render data
    render() {
        let mapMovieData = this.state.movieData.map((eachMovie) => {
            return (
                <Router>
                    <div key={eachMovie._id} className='movieItem'>
                        <h2>{eachMovie.movieName}</h2>
                        <h3>{eachMovie.genre}</h3>
                        <Link to={'/edit/' + eachMovie._id}>Edit</Link>
                    </div>
                </Router>
            );

        });

        //failed conditional cast
        // let mapCastData = this.state.movieData.cast.map((eachMovie, index) => {
        //     return (
        //         <div key={index}>
        //             <h3>{eachMovie.mainActor}</h3>
        //             <h3>{eachMovie.mainActress}</h3>
        //             <h3>{eachMovie.supportingActor}</h3>
        //             <h3>{eachMovie.supportingActress}</h3>
        //         </div>
        //     )
        // });

        return (
            <div className="App">
                <h2>List Movies</h2>
                <div className='movieGrid'>
                    {mapMovieData}
                </div>
            </div>

        );
    }
}

export default ListMovies;