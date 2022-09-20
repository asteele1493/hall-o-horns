import React from 'react';



class HornedBeast extends React.Component {
  //react classes require a render method. You need to call it like this.
  render() {
    return (
      <>
       <h2>{this.props.title}</h2>
       <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
       <p>{this.props.description}</p>
      </>
        )
  }
}

export default HornedBeast;