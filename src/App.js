import React from 'react';
import './App.css';
import CardList from './components/CardList';
import FilterGender from './components/FilterGender';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    }
    this.getData();
  }

  getData() {
    fetch('https://randomuser.me/api/?results=50')
      .then(result => result.json())
      .then(data => {
        this.setState({
          people: data.results,
        })
      })
  }

  render() {
    const {people} = this.state;
    return (  
      <React.Fragment>
         <FilterGender />
         <CardList data = {people}/>
      </React.Fragment>
    );
  }
}


export default App;
