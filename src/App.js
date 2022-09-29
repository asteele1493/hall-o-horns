// DONE: Import the data.json file into your App component and send that data into the Main component
// DONE: Map over the JSON data in your Main component to render each beast
// DONE: Create a SelectedBeast component and include it in your App
// TODO: Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

//Capital react is the variable name. React in quotations is the library we're pulling from. 
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast';


//This class is super important. 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {}
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (beastName) => {
    const selectedBeast = data.find(currentBeast => currentBeast.title === beastName);
    this.setState({ show: true, selectedBeast});
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main
        //don't need to store data in state because we aren't changing the array of beasts 
          data={data}
          handleShow={this.handleShow} />
        <SelectedBeast
          show={this.state.show}
          //doesn't refer to state because handleClose doesn't live in state. It's a method.
          handleClose={this.handleClose} 
          selectedBeast={this.state.selectedBeast}
          />
        <Footer />

      </div>
    );
  }
}

export default App;
