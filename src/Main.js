import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';


class Main extends React.Component {
  //react classes require a render method. You need to call it like this.
  render() {
    return (
      <>
        {data.map(beast => <HornedBeast
          title={beast.title}
          description={beast.description} 
          imageURL={beast.imageUrl}/>)}
      </>
    );
  };
};

export default Main;


          //map for iterating and rendering through beast objects.