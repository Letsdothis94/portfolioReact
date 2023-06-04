import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
    return (
        <section className="contact-div" id="contact">
            <div className="form-container">
                <h2>CONTACT</h2>
                <span className="sub-About">
                    Feel free to <strong>contact</strong> me by submitting the form below.
                    I will get back to you as soon as possible.
                </span>
                <div className="form-container">
                    <form className="the-form" action="https://formsubmit.co/contreras.cristian994@gmail.com" method="POST">
                        <div>
                            <label htmlFor="name" id="name">Name</label><br />
                            <input type="text" name="name" id="name" placeholder="Enter your name" required className="name-input"></input>
                        </div>
                        <div>
                            <label htmlFor="email" id="email">E-mail</label><br />
                            <input type="text" name="email" id="email" placeholder="Enter your E-mail" required></input>
                        </div>
                        <div>
                            <label htmlFor="message" id="message">Message</label><br />
                            <textarea className="area" cols="30" rows="10" name="message" id="message" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" value="Send">SUBMIT</button>
                    </form>

                </div>
            </div>
        </section>
    )
};

export default Contact;