import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import ContactIcon_1 from "../../assets/img/icon/linkedin.svg";
import ContactIcon_2 from "../../assets/img/icon/github.svg";
import ContactIcon_3 from "../../assets/img/icon/x.svg";
import ContactIcon_4 from "../../assets/img/icon/instagram.svg";
import ContactImg from "../../assets/img/imgs/image8.jpg";
import PortfoPage from "../../assets/img/imgs/portfoilo-page.png";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Contact = (props) => {

    useEffect( () => {
        ScrollReveal().reveal('.headline', {
          origin: 'bottom',
          distance: '43px',
          duration: 1200,
          interval: 200,
          scale: 0.9,
          viewFactor: 0.1,
          })
      })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for handling form submission here
        console.log('Form submitted:', formData);
        // You can send the form data to a server, or perform other actions.
      };

    return (
        <div>

            {/* Helmet Section */}
            <Helmet>
                <title>Contact | Portfolio</title>
                <meta name="title" content="Contact | Portfolio" />
                <meta name="description" content="Simple portfolio with react and bootstrap, scss" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="portfoilo.co" />
                <meta property="og:title" content="AMMN | Portfolio" />
                <meta property="og:description" content="Simple portfolio with react and bootstrap, scss" />
                <meta property="og:image" content={PortfoPage} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="portfoilo.co" />
                <meta property="twitter:title" content="AMMN | Portfolio" />
                <meta property="twitter:description" content="Simple portfolio with react and bootstrap, scss" />
                <meta property="twitter:image" content={PortfoPage} />
            </Helmet>

            {/* Contact Section */}
            <div className="content-wrapper">
                <div className="container-fluid mb-5 ps-lg-4 pe-lg-4">
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 m-lg-5">
                        <div className="col headline p-3 p-md-0 mt-0">
                            <h2 className="ps-0 ps-md-5">Get in touch!</h2>
                            <p className="ps-0 ps-md-5 mt-3">Say hello at <span className="imp-font">ayemyat2nyein@gmail.com</span></p>
                            <p className="ps-0 ps-md-5">
                                For more info, here’s my &nbsp;
                                    <Link to="https://resume.io/r/KAAtaZjlh" target='_blank' className="imp-font">
                                        resume
                                    </Link>
                            </p>
                            <div className="row ps-0 ps-md-5">
                                <div className="col headline d-flex justify-conter-center mt-4">
                                    <div className="">
                                        <img src={ContactIcon_1} className="" alt="Contact Icon"/>
                                    </div>
                                    <div className="">
                                        <img src={ContactIcon_2} className="ps-3" alt="Contact Icon"/>
                                    </div>
                                    <div className="">
                                        <img src={ContactIcon_3} className="ps-3" alt="Contact Icon"/>
                                    </div>
                                    <div className="">
                                        <img src={ContactIcon_4} className="ps-3" alt="Contact Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-5 mt-md-0 p-md-5 p-lg-0">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="menu-font mb-2 headline" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="menu-font headline"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div className="mt-3">
                                    <label className="menu-font mb-2 headline" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="menu-font headline"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div className="mt-3">
                                    <label className="menu-font mb-2 headline" htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="menu-font headline"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <div className="mt-3">
                                    <label className="menu-font mb-2 headline" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="menu-font headline"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required/>
                                </div>
                                <button className="default-btn btn-font mt-5  headline" type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 m-lg-5 bottom-img">
                        <div className="col d-flex flex-column justify-content-center p-5">
                            <h2 className="headline d-flex justify-content-center mb-3">
                                Hello! Let's work together.
                            </h2>
                            <h4 className="headline p-0 p-md-3 p-lg-4">
                                I'm always open to new opportunities and collaborations. Feel free to reach out to me.
                            </h4>
                        </div>
                        <div className="col d-flex justify-content-end justify-content-md-center">
                            <img src={ContactImg} className="headline contact-img m-5" alt="Contact Img"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;