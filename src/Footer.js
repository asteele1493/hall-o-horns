import React from 'react';

class Footer extends React.Component {
  //react classes require a render method. You need to call it like this.
  render() {
    return (
      //the parens allow me to switch from javascript to jsx
      //fragments are my parentelement
      <>
        <footer>
          <p>Created by Andra Steele, horned beast enthusiast &copy;</p>

        </footer>
      </>
    )
  }
}

export default Footer;