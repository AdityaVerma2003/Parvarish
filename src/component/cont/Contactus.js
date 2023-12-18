import React, { useState }from 'react';
import Ourcontact from '../home/Ourcontact'
import emailjs from '@emailjs/browser';
import './cont.css'


const Contactus = () => {
  
  return (<>
  <section id="contact">
      <div className="container contact-container">
        <div class="left"></div>
        <div class="right">
      <h5>Get In Touch</h5>
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSfdlXQgNohw-rdYQ8jmzQc9275PrmB9skCYpXP3PYNbCOGTvg/formResponse" method='post'>
          <input type="text"  class ="field" name="entry.2005620554" placeholder="Full Name"   />
          <input type="email" class ="field" name="entry.1045781291" placeholder="Email"  />
          <textarea
            name="entry.1065046570"
            placeholder=" Message"
            id=""
            cols="30"
            rows="10"
            required
            class ="field area" 
            
          ></textarea>
          <button type="submit" onClick={()=>{
          }} className="btn btn-primary">
            send message
          </button>
        </form>
        </div>
      </div>
    </section>
    <Ourcontact/>
  </>
  )
}

export default Contactus;