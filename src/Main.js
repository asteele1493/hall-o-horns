import React from 'react';
import HornedBeast from './HornedBeast';
import App from './App.js';

// TODO: Send a function into your Main component that allows the user to update state in the App


class Main extends React.Component {
  //react classes require a render method. You need to call it like this.
  constructor(props) {
    super(props);
    this.state = {showBeast: false}
  }



  render() {
    return (
      <>
        {this.props.data.map(beast => <HornedBeast
          title={beast.title}
          description={beast.description} 
          imageURL={beast.imageURL}/>)}
      </>
    );
  };
};

export default Main;


          //map for iterating and rendering through beast objects.