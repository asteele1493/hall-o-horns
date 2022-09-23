import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
    //   //We are not allowed to use this.state unless we refer to super and list our props. 
    //   //State object will hold data about the class HornedBeast components
    //   this.state = {
    //     //You need an initial value of whatever state when the page gets loaded.
    //     //Need a way to listen for that click to happen.
  }
}

addFavorites = () => {
  this.setState({ favorites: this.state.favorites + 1 })
}
//the placement for the event handler is super important. Between constructor and render method
// handleClick = () => {

// }

//react classes require a render method. You need to call it like this.
render() {
  return (
    <Container>
      <Col>
      <Card className = "h-100 p-2">
        <Card.Body>

          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Img variant="top"
            src={this.props.imageURL}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.addFavorites} />
          <Card.Text>{this.props.favorites}</Card.Text>

        </Card.Body>
      </Card>
      </Col>
    </Container>
  )
}



export default HornedBeast;

//Create state inside of horned beast component 

//add tag to display emoji within render function
//<p> insert emoji here: {this.state.favorites}</p