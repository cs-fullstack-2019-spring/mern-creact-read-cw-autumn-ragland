import React, { Component } from 'react';
import './App.css';

class EditMovie extends Component {

    //variables with state
    constructor(props) {
        super(props);
        this.state = {
            movieName:'',
            genre:'',
            mainActor:'',
            mainActress:'',
            supportingActor:'',
            supportingActress:'',
        }
    }

    //update event handlers
    updateMovieName = (e) => {
        this.setState({movieName:e.target.value})
    };

    updateGenre = (e) => {
        this.setState({genre:e.target.value})
    };

    updateMainActor = (e) => {
        this.setState({mainActor:e.target.value})
    };

    updateMainActress = (e) => {
        this.setState({mainActress:e.target.value})
    };

    updateSupportingActor = (e) => {
        this.setState({supportingActor:e.target.value})
    };

    updateSupportingActress = (e) => {
        this.setState({supportingActress:e.target.value})
    };

    //submit event handler
    submission = (e) => {
        e.preventDefault();
        let bodyData = {
            movieName:this.state.movieName,
            genre:this.state.genre,
            cast:{
                mainActor:this.state.mainActor,
                mainActress:this.state.mainActress,
                supportingActor:this.state.supportingActor,
                supportingActress:this.state.supportingActress,
            },
        };
        fetch('/movies/' + this.props.match.params.id ,{
            method:"PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        })

            .then(() => window.alert('Edited'))
    };
    //form
    render() {
        return (
            <div>
                <h2 className='App'>Edit Movie</h2>
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
                        <label>Main Actor: </label>
                        <input type="text" value={this.state.mainActor} onChange={this.updateMainActor}/>
                    </div>
                    <br/>
                    <div>
                        <label>Main Actress: </label>
                        <input type="text" value={this.state.mainActress} onChange={this.updateMainActress}/>
                    </div>
                    <br/>
                    <div>
                        <label>Supporting Actor: </label>
                        <input type="text" value={this.state.supportingActor} onChange={this.updateSupportingActor}/>
                    </div>
                    <br/>
                    <div>
                        <label>Supporting Actress: </label>
                        <input type="text" value={this.state.supportingActress} onChange={this.updateSupportingActress}/>
                    </div>
                    <br/>
                    <div>
                        <input type="submit" value={'Edit Movie'}/>
                    </div>
                </form>
            </div>

        );
    }
}

export default EditMovie;