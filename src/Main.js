import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  //react classes require a render method. You need to call it like this.
  render() {
    return (
      <>
        <HornedBeast 
        title={"Bosco, the demon queen of Seattle"}
        description={"Bosco, the demon queen of Seattle"}
        imageUrl={"https://www.tvfanatic.com/gallery/bosco-entrance-rupauls-drag-race-s14e1/"}
        />
        <HornedBeast />
        title={""}
        description={}
        imageUrl={}
      </>
        )
  }
}

        export default Main;