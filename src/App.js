import React from 'react';
import './App.css';

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
    const people = this.state.people;
    console.log(people);
    return (
      <p>holi</p>
    );
  }


}


export default App;
