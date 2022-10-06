import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'

class SelectedBeast extends React.Component {
  render() {
    return (
      //Outermost modal
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Image src={this.props.selectedBeast.imageURL} alt={this.props.selectedBeast.description} roundedCircle fluid/>
        <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.props.handleClose}>
            Close
          </Button> 
        </Modal.Footer>
      </Modal>
    ) 
  }  
}

export default SelectedBeast;
