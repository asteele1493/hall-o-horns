import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  //react classes require a render method. You need to call it like this.
  render() {
    return (
      <>
        <HornedBeast 
        title={data[0].title}
        description={data[0].description}
        imageUrl={data[0].imageUrl}
        />
        <HornedBeast 
        title={data[1].title}
        description={data[1].title}
        imageUrl={data[1].imageUrl}
        />
        <HornedBeast 
        title={data[2].title}
        description={data[2].title}
        imageUrl={data[2].imageUrl}
        />
        <HornedBeast 
        title={data[3].title}
        description={data[3].title}
        imageUrl={data[3].imageUrl}
        />
      </>
        )
  }
}

        export default Main;