import React, { useState } from 'react';
import './MapsContact.css';

const MapsContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    number: '',
    body: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="container-maps-contact">
        <div className="innerwrap">
          <section className="section2 clearfix">
            <div className="coll2 column1 first">
              <iframe
                className="maps-iframe"
                title="store-location"
                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1415.3678200061574!2d20.469267913033313!3d44.80657594836174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d44.806817699999996!2d20.4695254!5e0!3m2!1sen!2shu!4v1590670439874!5m2!1sen!2shu"
                width="500"
                height="350"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="coll2 column2 last">
              <div className="sec2contactform">
                <form onSubmit={onFormSubmit}>
                  <div className="clearfix">
                    <input
                      value={formData.name}
                      onChange={(e) => handleChange(e)}
                      className="coll2 first"
                      type="text"
                      name="name"
                      placeholder="First Name"
                    />
                    <input
                      value={formData.lastname}
                      onChange={(e) => handleChange(e)}
                      className="coll2 last"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="clearfix">
                    <input
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      className="coll2 first"
                      type="Email"
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      value={formData.number}
                      onChange={(e) => handleChange(e)}
                      className="coll2 last"
                      type="text"
                      name="number"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="clearfix">
                    <textarea
                      value={formData.body}
                      onChange={(e) => handleChange(e)}
                      name="body"
                      id=""
                      placeholder="Your message here..."
                      cols="30"
                      rows="7"
                    ></textarea>
                  </div>
                  <div className="clearfix">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MapsContact;
