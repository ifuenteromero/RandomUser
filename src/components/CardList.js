import React from 'react';

class CardList extends React.Component{
    render(){
        //Destructuring en this.props se llama data, pero yo quiero que se llame people
        const {data : people} = this.props;
        return(
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




export default CardList;