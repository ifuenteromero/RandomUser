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
    const {people} = this.state;
    console.log(people);
    return (
      <ul>
       {people.map((person,index)=>{
         const fullName =  `${person.name.first} ${person.name.last}`;
         return(
                 <li key={index} >
                     <img src={person.picture.medium} alt={fullName} />
                     <h1>{fullName}</h1>
                 </li>
          )})}
      </ul>
    );
  }
}


export default App;
