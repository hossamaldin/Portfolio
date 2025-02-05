export default function ContactMe() {
    return(
        <section id="Contact" className="contact-section">
            <div >
                <h2 className="skills-section-heading">Contact Me</h2>
                <p className="hero-section-description">
                    Feel free to get in touch using the form below!
                </p>
            </div>
            <form className="contact-form-container">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">
                            First Name
                        </span>
                        <input type="text" className="contact-input text-md" name="first-name" id="first-name" required/>
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">
                            Last Name
                        </span>
                        <input type="text" className="contact-input text-md" name="email" id="email" required/>
                    </label>
                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">
                            Email
                        </span>
                        <input type="email" className="contact-input text-md" name="email" id="email" required/>
                    </label>
                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">
                            Phone Number
                        </span>
                        <input type="number" className="contact-input text-md" name="phone-number" id="phone-number" required/>
                        
                    </label>
                </div>
                <label htmlFor="message" className="contact-label">
                        <span className="text-md">
                            Message
                        </span>
                        <textarea name="" id="message" className="contact-input text-md" cols="30" rows="8" placeholder="Type your message..."></textarea>
                    </label>
            
                    <div><button className="btn btn-primary contact-form-btn">Submit</button></div>
            </form>
        </section>
    )
 }