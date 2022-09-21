import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //clicked = 0;
  //   //We are not allowed to use this.state unless we refer to super and list our props. 
  //   //State object will hold data about the class HornedBeast components
  //   this.state = {
  //     //You need an initial value of whatever state when the page gets loaded.
  //     //Need a way to listen for that click to happen.
  //   }
  // }

  //the placement for the event handler is super important. Between constructor and render method
    // handleClick = () => {
    //   if (this.state.whatever === 'idk') {
    //     this.setState({whatever: 'Yay!'})
    //   } else {
    //     this.setState({whatever: 'Nay!'})
    //   }
    // }

  //react classes require a render method. You need to call it like this.
  render() {
    return (
      <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <Card.Img variant="top" 
        src={this.props.imageURL} 
        alt={this.props.description} 
        title={this.props.title} 
        onClick={this.handleClick}
        />
      </Card>
      </Container>
    )
  }
}

export default HornedBeast;

