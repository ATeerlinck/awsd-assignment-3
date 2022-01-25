import React, { Component } from 'react';
import MedalNoMui from './MedalNoMui'


class Country extends Component {
    render() { 
      const { onIncrement, onDecrement, country } = this.props;
        return (
                <div className='Country' style={{ margin: 'auto', display: 'block'}}>
                  { country.name }: {country.gold + country.silver + country.bronze}<br/>
                  <MedalNoMui
                  country={ country }
                  onIncrement={ onIncrement }
                  onDecrement={ onDecrement }
                  color={ "gold" } />
                  <MedalNoMui
                  country={ country }
                  onIncrement={ onIncrement }
                  onDecrement={ onDecrement }
                  color={ "silver" } />
                  <MedalNoMui
                  country={ country }
                  onIncrement={ onIncrement }
                  onDecrement={ onDecrement }
                  color={ "bronze" } />
                </div>
        );
    }
}
 
export default Country;