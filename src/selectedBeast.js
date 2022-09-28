import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      //Outermost modal
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More about this beast: </Modal.Title>
        </Modal.Header>
        <Modal.Body>Check out those specs!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;