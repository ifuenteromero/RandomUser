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
         const fullName = `${person.name.first} ${person.name.last}`;
         const age = person.dob.age;
         const city = person.location.city;
         return(
                 <li key={index} >
                     <img src={person.picture.medium} alt={fullName} />
                     <h1>{`${fullName}, ${age}`}</h1>
                     <h2>{city}</h2>
                 </li>
          )})}
      </ul>
    );
  }
}


export default App;
