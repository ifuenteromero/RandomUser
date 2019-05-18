import React from 'react';

class FilterGender extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="female" 
                        value="female" 
                        name="gender"/>
                    <label 
                        className="custom-control-label"
                        htmlFor="female">
                            Female
                    </label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="male" 
                        value="male"
                        name="gender"/>
                    <label 
                        className="custom-control-label"
                        htmlFor="male">
                              Male
                        </label>
                </div>
              </React.Fragment>
        );
    }

}


export default FilterGender;