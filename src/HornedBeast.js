import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    };
  }


addFavorites = () => {
  this.setState({ favorites: this.state.favorites + 1 });
  };
}

render() {

  return (
    <Container>
      <Col>
      <Card className = "h-100 p-2">
        <Card.Body>
        <Card.Img variant="top"
            src={this.props.imageURL}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.addFavorites} />
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{this.props.favorites}</Card.Text>

        </Card.Body>
      </Card>
      </Col>
    </Container>
  );
}




export default HornedBeast;

//Create state inside of horned beast component 

//add tag to display emoji within render function
//<p> insert emoji here: {this.state.favorites}</p