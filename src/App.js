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
         const imgSrc = person.picture.large;
         const fullName = `${person.name.first} ${person.name.last}`;
         const age = person.dob.age;
         const city = person.location.city;
         return(
                 <li className="card mb-3" style={{maxWidth:540}} key={index} >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img className="card-img"  src={imgSrc} alt={fullName} />
                        </div>
                        <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">{`${fullName}, ${age}`}</h5>
                                  <p className="card-text">{city}</p>
                              </div>
                          </div>
                      </div>
                 </li>
          )})}
      </ul>
    );
  }
}


export default App;
