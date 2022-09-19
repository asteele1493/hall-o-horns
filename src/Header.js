import React from 'react';

class Header extends React.Component {
  //react classes require a render method. You need to call it like this.
  render() {
    return (
      //the parens allow me to switch from javascript to jsx
      //fragments are my parentelement
      <>
        <h1>Greetings from Ye Olde Hall o' Horns</h1>
      </>
    )
  }
}

export default Header;