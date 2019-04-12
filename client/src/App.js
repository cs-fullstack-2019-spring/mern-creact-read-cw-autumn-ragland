import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import all called components
import ListMovies from "./ListMovies";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";


//RE-RENDER SOLUTION
//pass a function down to child component LISTMOVIES and call it in when edit link is clicked
//the function should set a fake state this.setState({}) because it will force a render

class App extends Component {
  render() {
    return (
        <Router>
          {/*nav bar*/}
          <div className="App">
            <h1>Welcome to the Movie Database</h1>
            <Link className='linkClass' to={'/'}>Home</Link>
            <Link className='linkClass' to={'/list'}>List</Link>
            <Link className='linkClass' to={'/add'}>Add</Link>
          </div>
          {/*components*/}
          <Route path={'/list'} component={ListMovies}/>
          <Route path={'/add'} component={AddMovie}/>
          <Route path={'/edit/:id'} component={EditMovie}/>
        </Router>

    );
  }
}

export default App;
