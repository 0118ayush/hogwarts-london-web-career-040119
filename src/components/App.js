import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hoglist from "./Hoglist.js"
import Hogshow from "./Hogshow.js"


class App extends Component {


  state = {
    selectedHog: null,
    allHogs: hogs,
    searchTerm: "",
    greasedFilter: false, 
    sortBy: "none"
}

updateSortBy =(e) => {
  this.setState({
    sortBy: e.target.value 
  })
}

updateGreasedFilter =()=>{
  this.setState({
    greasedFilter: !this.state.greasedFilter
  })
}

updateSearchTerm = (event) => {
  this.setState({
    searchTerm: event.target.value 
  })
}


selectHog = (hog) => {
    this.setState({
        selectedHog: hog
    })
}

deselectHog = () => {
    this.setState({
        selectedHog: null
    })
}


  render() {
    return (
      <div className="App">
          < Nav updateSearchTerm={this.updateSearchTerm} updateGreasedFilter={this.updateGreasedFilter} updateSortBy={this.updateSortBy}/>
          {
            this.state.selectedHog
              ? <Hogshow hog={this.state.selectedHog} deselectHog = {this.deselectHog}/> 
              : <Hoglist selectHog = {this.selectHog} allHogs={this.state.allHogs} searchTerm = {this.state.searchTerm} greasedFilter={this.state.greasedFilter} sortBy={this.state.sortBy}/> 
          }
      </div>
    )
  }
}

export default App;


// create an index displaying all hog tiles -- 
// render each hog name and picture in a tile -- 
// show the hog's details upon a user's click -- 
// allow users to sort the hogs based on name and weight and filter the hogs that are greased

// BONUS: allow users to hide hogs (not delete them, just hide them from view!)

// BONUS: bring in pig gifs from an API

// BONUS: implement Semantic Cards for each hog

// {
//     name: 'Mudblood',
//     specialty: 'Mediocre magic',
//     greased: false,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//     'highest medal achieved': 'bronze'
//   },

