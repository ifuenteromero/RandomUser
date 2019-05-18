import React from 'react';
import Card from './Card'

class CardList extends React.Component{
    render(){
        //Destructuring en this.props se llama data, pero yo quiero que se llame people
        const {data : people} = this.props;
        return(
            <ul>
                {people.map((person,index)=>{
                    const infoCard={
                        name : `${person.name.first} ${person.name.last}`,
                        imgUrl : person.picture.large,
                        age:person.dob.age,
                        city :person.location.city
                         }

                    return( 
                        <li className="card mb-3" style={{maxWidth:540}} key ={index} >
                            <Card data = {infoCard} /> 
                        </li>
                    )
                            }
                            )
                }
            </ul>
        );
    }



}




export default CardList;