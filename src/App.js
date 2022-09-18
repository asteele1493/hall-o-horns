//Capital react is the variable name. React in quotations is the library we're pulling from. 
import React from 'react';
import './App.css';

//This class is super important. 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ye Olde Hall o\' Horns </h1>
      </div>
    );
  }
}

export default App;
