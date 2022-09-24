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
      showBeast: false,
    };
  }

  handleCloseModal = () => {
    this.setState({ showBeast: false });
  };

  handleShowModal = () => {
    this.setState({ showBeast: true });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          data = {data}
        handleShowModal={this.handleShowModal} />
        <SelectedBeast
          show={this.state.showBeast}
          handleClose={this.handleCloseModal} />
        <Footer />

      </div>
    );
  }
}

export default App;
