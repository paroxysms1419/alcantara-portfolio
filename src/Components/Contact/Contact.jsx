import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import telephone from '../../assets/telephone.png'
import location from '../../assets/circle.png'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cfdbd498-c39e-4ff4-8725-2bdcf757a9cb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <>
      <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>If you're interested in learning more about how our services can help take your business to the next level, or if you have a specific project in mind, don't hesitate to reach out to me directly through the contact information provided.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img style={{width:'40px'}} src={mail} alt="" /> <p>paroxysms1419@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img style={{width:'40px'}} src={telephone} alt="" /> <p>+639156224247</p>
                    </div>
                    <div className="contact-detail">
                        <img style={{width:'40px'}} src={location} alt="" /> <p>San Roque, Legazpi City, Albay, 4500</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter Your Email" name="email" />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter Your Message" />
                <button className="contact-submit" type="submit">Submit</button>
            </form>
        </div>
       
      </div>

    </>
  )
}

export default Contact
