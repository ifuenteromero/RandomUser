import React from 'react';

class Card extends React.Component{
    render(){
        const {data :inforCard } = this.props;
        const {name,imgUrl,age,city} = inforCard;
    
        return (       
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img"  src={imgUrl} alt={name} />
                </div>
                <div className="col-md-8">
                      <div className="card-body">
                          <h5 className="card-title">{`${name}, ${age}`}</h5>
                          <p className="card-text">{city}</p>
                      </div>
                </div>
            </div>
        
        );
    }



}

export default Card;