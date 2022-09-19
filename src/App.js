//Capital react is the variable name. React in quotations is the library we're pulling from. 
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

//This class is super important. 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
