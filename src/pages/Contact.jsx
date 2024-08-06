import React from 'react';
import './styles/contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <section className="contact-page-sec overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="contact-page-form">
              <h2>Get in Touch</h2>
              <form action="contact-mail.php" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Your Name" name="name" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="single-input-field">
                      <input type="email" placeholder="E-mail" name="email" required />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Phone Number" name="phone" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-field">
                      <textarea placeholder="Write Your Message" name="message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
