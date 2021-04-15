import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Contact(props) {

  console.log("brand", props.location.aboutProps)
  return (
    <>
      <h1 className="contact__header">CONTACT ME</h1>
      <img className="contact__img" src='images/sample_contact.jpg' alt="contact image"/>
      <div className="contact__text">
        <p> Feel free to contact me regarding freelance or contract work</p>
        <a href="mailto:dkim730@gmail.com">Email Here</a>
      </div>

      <Footer />
    </>

  )
}

export default Contact;