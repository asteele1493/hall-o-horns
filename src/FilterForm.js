import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class FilterForm extends React.Component {

  chooseHorns = (e) => {
    console.log('e.target.value: ', e.target.value)
  }
  render() {
    return (
<Container>
<Form>
    <Form.Label htmlFor='numOfHorns'>Filter by horns</Form.Label>
    <Form.Select 
    name='numOfHorns' 
    as="select"
    onChange={this.chooseHorns}
    >
      <option value=''>All Beasts</option>
      <option value="1">1 horn</option>
      <option value="2">2 horn</option>
      <option value="3">3 horn</option>
      <option value="4">4 horn</option>
    </Form.Select>
</Form>
</Container>
    );
  };
};

export default FilterForm;