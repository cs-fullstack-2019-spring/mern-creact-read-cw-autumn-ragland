import React, { Component } from 'react';
import './App.css';


//POPULATE FORM SOLUTION
//fetch data with a findOne to and set state of form props?

class AddMovie extends Component {

    //variables with state
    constructor(props) {
        super(props);
        this.state = {
            movieName:'',
            genre:'',
        }
    }

    //update event handlers
    updateMovieName = (e) => {
        this.setState({movieName:e.target.value})
    };

    updateGenre = (e) => {
        this.setState({genre:e.target.value})
    };

    submission = (e) => {
        e.preventDefault();
        let bodyData = {
            movieName:this.state.movieName,
            genre:this.state.genre,
        };
        fetch('/movies',{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        })

        .then(() => window.alert('Added'))
    };

    //form
    render() {
        return (
            <div>
                <h2 className='App'>Add Movie</h2>
                <form className='formClass' onSubmit={this.submission}>
                    <div>
                        <label>Movie Name: </label>
                        <input type="text" value={this.state.movieName} onChange={this.updateMovieName}/>
                    </div>
                    <br/>
                    <div>
                        <label>Movie Genre: </label>
                        <input type="text" value={this.state.genre} onChange={this.updateGenre}/>
                    </div>
                    <br/>
                    <div>
                        <input type="submit" value={'Add Movie'}/>
                    </div>
                </form>
            </div>

        );
    }
}

export default AddMovie;