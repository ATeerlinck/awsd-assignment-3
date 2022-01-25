import React, { Component } from 'react';
 
 class MedalNoMui extends Component{
    render(){
        const { onIncrement, onDecrement, country, color } = this.props;
        return (
            <div>
                {color}: { country[color] }
                  <input type="button" style={{ cursor:'pointer', display: 'inline' }} onClick={ () => onIncrement(country.id, color) } value={"+"} />  
                  <input type="button" disabled={country.color <= 0 ? true : false} style={{ cursor:'pointer', display: 'inline' }} onClick={ () => onDecrement(country.id, color) }value={"-"} />
            </div>
        );
    }
}

export default MedalNoMui;