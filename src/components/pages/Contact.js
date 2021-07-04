import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Contact(props) {
  return (
    <>
      <h1 className="contact__header">CONTACT ME</h1>
      <img className="contact__img" src='https://res.cloudinary.com/dkagcuui6/image/upload/v1625433247/diesel_digital_1_cmomxg.gif' alt="contact"/>
      <div className="contact__text">
        <p> Feel free to contact me regarding freelance or contract work</p>
        <a href="mailto:dkim730@gmail.com">Email Here</a>
      </div>

      <Footer />
    </>

  )
}

export default Contact;