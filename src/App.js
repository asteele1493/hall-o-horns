// DONE: Import the data.json file into your App component and send that data into the Main component
// DONE: Map over the JSON data in your Main component to render each beast
// DONE: Create a SelectedBeast component and include it in your App
// DONE: Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap
// TODO: Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
// TODO: When the user chooses one of the options, the correct images should be displayed.

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
      selectedBeast: {},
      horns: {},
      gallery: data
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (beastName) => {
    const selectedBeast = data.find(currentBeast => currentBeast.title === beastName);
    this.setState({ show: true, selectedBeast});
  };

  updateGallery = (numOfHorns) => {
    console.log(numOfHorns);
    let gallery = data;
    if(numOfHorns){
      console.log("Made it inside if statement!");
      gallery = data.filter(beast => beast.horns === numOfHorns);
    }
    this.setState({gallery: gallery});
  }

  chooseHorns = (e) => {
    const value = e.target.value;
    let updatedValue;

    if (value === "1"){
      updatedValue = data.filter(num => num.horns === 1);
      this.updatedValue(updatedValue);
    }
    if (value === "2"){
      updatedValue = data.filter(num => num.horns === 2);
      this.updatedValue(updatedValue);
    }
    if (value === "3"){
      updatedValue = data.filter(num => num.horns === 3);
      this.updatedValue(updatedValue);    }
    if (value === "4"){
      updatedValue = data.filter(num => num.horns === 4);
      this.updatedValue(updatedValue);
        }
    console.log(updatedValue);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main
        //don't need to store data in state because we aren't changing the array of beasts 
          data={this.state.gallery}
          handleShow={this.handleShow}
          updateGallery = {this.updateGallery} />
        <SelectedBeast
          show={this.state.show}
          //doesn't refer to state because handleClose doesn't live in state. It's a method.
          handleClose={this.handleClose} 
          selectedBeast={this.state.selectedBeast}
          />
      {/* Using container will help the width of the form stay contained and not stretch to the width of the page. */}
        <Footer />

      </div>
    );
  }
}

export default App;
