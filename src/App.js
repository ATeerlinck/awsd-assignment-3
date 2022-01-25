import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import CountryNoMui from './components/CountryNoMui';
import Avatar from '@mui/material/Avatar';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 2 },
      { id: 2, name: 'China', gold: 3, silver: 2, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 3 },
    ]
  };
  handleIncrement = (countryId, type) =>{
    const countriesMutable = [...this.state.countries];
    const country = countriesMutable.findIndex(c => c.id === countryId);
    console.log("hey");
    countriesMutable[country][type] += 1;
    this.setState({countries: countriesMutable});
  };
  handleDecrement = (countryId, type) =>{
    const countriesMutable = [...this.state.countries];
    const country = countriesMutable.findIndex(c => c.id === countryId);
    console.log("yeh");
    countriesMutable[country][type] -= 1;
    this.setState({countries: countriesMutable});
  };
  getMedalCount = (medal) =>{
    return this.state.countries.reduce((a, b) => a + b[medal], 0);
  };
  render() { 
    return ( 
      <div className="App">
        <header style= {{display: 'flex', alignItems: 'center', justifyContent: 'center' , flexWrap: 'wrap'}} className="App-header">
          <div>Olypmic Medals</div>
          <Avatar sx={{ bgcolor: '#ffca28', mx:2}}>{ this.getMedalCount("gold") }</Avatar>
          <Avatar sx={{ bgcolor: '#a0a0a0', mx:2}}>{ this.getMedalCount("silver") }</Avatar>
          <Avatar sx={{ bgcolor: '#7c4600', mx:2}}>{ this.getMedalCount("bronze") }</Avatar>
        </header>
        {this.state.countries.map(country =>
          <Country 
            key={ country.id } 
            country={ country }
            onIncrement={ this.handleIncrement } 
            onDecrement={ this.handleDecrement } />
        )}
        {this.state.countries.map(country =>
          <CountryNoMui 
            key={ country.id } 
            country={ country }
            onIncrement={ this.handleIncrement } 
            onDecrement={ this.handleDecrement } />
        )}
      </div>
     );
  }
}

export default App;
