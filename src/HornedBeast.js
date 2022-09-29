import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: '',
    }
  };


  addFavorites = () => {
    this.setState({ favorites: this.state.favorites + '❤️‍🔥' });
  };



  render() {

    return (
      <Container>
        <Col>
        <Card>
          <Card.Body>
            <Card.Img variant="top"
              src={this.props.imageURL}
              alt={this.props.description}
              onClick={this.addFavorites}
              title={this.props.title} />

            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Favorited ❤️‍🔥 times :{this.state.favorites}</Card.Text>
            <Card.Text>Number of horns: {this.props.horns}</Card.Text>
            <Button onClick={() => this.props.handleShow(this.props.title)}>Select beast</Button>
          </Card.Body>
        </Card>
      </Col>
      </Container >
    );
  }
}




export default HornedBeast;

//Create state inside of horned beast component 

//add tag to display emoji within render function
//<p> insert emoji here: {th
// {/* my handleShow method isn't working; going to try and move this onClick to my image tag and see if that helps. */ }
// {/* <Card className="h-100 p-2" onClick={this.addFavorites}> */ }
