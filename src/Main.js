import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
import FilterForm from './FilterForm';

// TODO: Send a function into your Main component that allows the user to update state in the App


class Main extends React.Component {
  //react classes require a render method. You need to call it like this.

  render() {
    return (
      <>
      <FilterForm 
        updateGallery = {this.props.updateGallery} />
        <Row xs={2} sm={3} md={4} lg={5} >
        {this.props.data.map(beast => <HornedBeast
          key={beast._id}
          title={beast.title}
          description={beast.description} 
          horns={beast.horns}
          imageURL={beast.imageURL}
          handleShow={this.props.handleShow}
          />)}
        </Row>
      </>
    );
  };
};

export default Main;


