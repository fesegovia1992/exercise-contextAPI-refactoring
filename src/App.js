import React from 'react';
import './App.css';
import Cars from './Cars';
import ContextCar from './context/ContextCar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    }
    return (
      <ContextCar.Provider value={context}>
        <Cars />
      </ContextCar.Provider>
    );
  }
}

export default App;
