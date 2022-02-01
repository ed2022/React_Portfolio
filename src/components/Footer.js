import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className= "contacts"> 
          <h3>Phone: (555)-555-5555</h3>
          <h3>LinkedIn: <a href="https://www.linkedin.com/in/eldana-desalgne-96b580180/">Eldana Desalgne</a></h3>
          <h3>Email: <a href="mailto:eldanadesalgne@gmail.com">tech@gmail.com</a></h3> 
          <h3>Github:<a href="https://github.com/ed2022">ed2022</a></h3>
        </div>
    </footer>
  );
}

export default Footer;