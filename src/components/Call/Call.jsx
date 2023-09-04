import React, { useRef } from 'react'
import "./call.css"
import emailjs from '@emailjs/browser';
const Call = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_trryabh', 'template_1y0rvgk', form.current, 'tsK61lb7k7XQmYwM0')
      .then((result) => {
          console.log(result.text);
          alert("email send sucessfull")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="c-container">
            <div className="c-wraper">
                <div className="Contact">
                    <div className="email">
                        sreeshanthubr999@gmail.com
                    </div>
                    <div className="phone">
                        +91 9746288760
                    </div>
                    <div className="address">
                     pilangatta ,badhiadka ,kasaragod,kerala,671551
                    </div>
                </div>
                <form id="contact-form" onSubmit={sendEmail} ref={form}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Call