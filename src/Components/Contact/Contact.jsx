import { useState } from 'react';
import './Contact.css';
function Contact(){
   const [result, setResult] = useState();
      const onSubmit = async (event) => {

        alert('Form Submitted SuccessFully')

        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "aa33c389-e112-4e87-9508-293d0d93d80d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });
        
        setResult({
            name:'',
            email: '',
            text : '',
            textarea: ''
        });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
    return(
        <>
         <div id="Contact">
            <section className="hero">
                <h1>Contact Water Research Portal</h1>
                <p>
                    Connect with our researchers, scientists, and technical teams for
                    collaborations, project inquiries, water quality studies, and research support.
                </p>
            </section>  
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <div className="info-box">
                            <h4>📍 Address</h4>
                            <p>
                                Water Research<br/>
                                Sustainable Water Management Hub<br/>
                                Puranpur Uttar Pradesh  <br/>
                           </p>
                            </div>
                        <div className="info-box">
                            <h4>📞 Phone</h4>
                            <p>+91 96275 09661</p>
                        </div>

                        <div className="info-box">
                            <h4>📧 Email</h4>
                            <p>ashish25122022gautam@gmail.com</p>
                        </div>

                        <div className="info-box">
                            <h4>🕒 Working Hours</h4>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        </div>

                        <div className="social-links">
                            <a href="#">f</a>
                            <a href="#">X</a>
                            <a href="#">in</a>
                            <a href="#">▶</a>
                        </div>

                    </div>
                    <div className="contact-form">
                        <h2>Send a Message</h2>
                        <form onSubmit={onSubmit} method='POST'>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" name='name'/>
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" name='email'/>
                            </div>

                            <div className="form-group">
                                <label>Organization</label>
                                <input type="text" placeholder="University / Institute / Company" name='text'/>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Write your message here..."></textarea>
                            </div>

                            <button type="submit" className="btn">
                                Send Message
                            </button>
                        </form>       
                    </div>
                </div>
                        <div className="map-section">
                            <h2>Our Location</h2>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps?q=New+Delhi+India&output=embed"
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                   </div> 
                </>
    );
}
export default Contact;
