import '../Contact/Contact.css';


const Contact = () => {
    return (
        <section className="contact-div" id="contact">
            <div className="form-container">
                <h2>CONTACT</h2>
                <span className="sub-About">
                    Feel free to <strong>contact</strong> me by submitting the form below.
                    I will get back to you as soon as possible.
                </span>
                <section>
                    <div className="form-container">
                        <form className="the-form" action="https://formsubmit.co/contreras.cristian994@gmail.com" method="POST">
                            <input type="text" name="name" id="name" placeholder="NAME" required className="name-input"></input>
                            <input type="text" name="email" id="email" placeholder="EMAIL" required></input>
                            <textarea className="area" cols="30" rows="10" name="message" id="message" placeholder="MESSAGE" required></textarea>
                            <button type="submit" value="Send"><img src="../images/icons8-paper-plane-50.png" alt='paper plane icon' /></button>
                        </form>
                    </div>
                </section>
            </div>
        </section>
    )
};

export default Contact;