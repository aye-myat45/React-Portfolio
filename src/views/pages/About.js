import ScrollReveal from 'scrollreveal';
import { Link } from "react-router-dom";
import PortfoPage from "../../assets/img/imgs/portfoilo-page.png";
import HomeIcon_1 from "../../assets/img/icon/circle.svg";
import HomeIcon_2 from "../../assets/img/icon/Frame 3.svg";
import HomeIcon_3 from "../../assets/img/icon/Frame 4.svg";
import ContactIcon_1 from "../../assets/img/icon/linkedin.svg";
import ContactIcon_2 from "../../assets/img/icon/github.svg";
import ContactIcon_3 from "../../assets/img/icon/x.svg";
import ContactIcon_4 from "../../assets/img/icon/instagram.svg";
import MeImg from "../../assets/img/imgs/image7.jpeg";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';


const About = (props) => {

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
                <title>About | Portfolio</title>
                <meta name="title" content="AMMN | Portfolio" />
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
            
            {/* About Section */}
            <div className="container-fluid one-section mb-5 ps-lg-4 pe-lg-4">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 m-lg-5">
                    <div className="col p-3 p-md-0 mt-0">
                        <h2 className="ps-0 ps-md-5 headline">ABOUT ME</h2>
                    </div>
                    <div className="col headline m-auto p-md-5 p-lg-0">
                        <h3>I am a front-end developer based in Myanmar. Has Computer Science background. </h3>
                        <p className="mt-3">I am a front-end developer based in Myanmar looking for exciting opportunities. Has Computer Science background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy reading book and playing tennis. Learning more to improve skill.</p>
                        <div className="row mt-3">
                            <div className="col d-flex justify-conter-center mt-2">
                                <Link to="/contact" className="default-btn btn-font text-decoration-none">
                                    CONTACT ME
                                    <img src={HomeIcon_1} className="ps-2" alt="Home Img"/>
                                </Link>
                                <div className="">
                                    <img src={HomeIcon_2} className="ps-3" alt="Home Img"/>
                                </div>
                                <div className="">
                                    <img src={HomeIcon_3} className="ps-3" alt="Home Img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <img src={MeImg} className="home-img headline mb-5" alt="Me Img"/>
                </div>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 m-lg-5">
                    <div className="col p-3 p-md-0 mt-0">
                        <h2 className="ps-0 ps-md-5 headline">MY CAPABILITIES</h2>
                    </div>
                    <div className="col m-auto p-md-5 p-lg-0">
                        <p className="mt-3 headline">I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
                        <div className="row row-cols-4 row-cols-md-4 row-cols-lg-4 gap-3 mt-3 ms-1 ms-md-0">
                                <div className="col skill menu-font headline">
                                    HTML
                                </div>
                                <div className="col skill menu-font headline">
                                    CSS
                                </div>
                                <div className="col skill menu-font headline">
                                    Javascript
                                </div>
                                <div className="col skill menu-font headline">
                                    React
                                </div>
                                <div className="col skill menu-font headline">
                                    Bootstrap
                                </div>
                                <div className="col skill menu-font headline">
                                    TailwindCSS
                                </div>
                                <div className="col skill menu-font headline">
                                    Java
                                </div>
                                <div className="col skill menu-font headline">
                                    PHP
                                </div>
                                <div className="col skill menu-font headline">
                                    Laravel
                                </div>
                                <div className="col skill menu-font headline">
                                    MySQL
                                </div>
                                <div className="col skill menu-font headline">
                                    Wordpress
                                </div>
                                <div className="col skill menu-font headline">
                                    UI/UX
                                </div>
                                <div className="col skill menu-font headline">
                                    Figma
                                </div>
                                <div className="col skill menu-font headline">
                                    Git
                                </div>
                                <div className="col skill menu-font headline">
                                    Docker
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="container-fluid one-section mb-5 ps-lg-4 pe-lg-4">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 mb-md-0 m-lg-5 ps-0">
                    <div className="col mt-0 mt-lg-0">
                        <h2 className="headline ps-0 ps-md-5">MY EXPERIENCES</h2>
                    </div>
                    <div className="col mt-3 mt-md-0 mt-lg-0 mb-0 mb-md-5 p-md-3 p-lg-0">
                        <div className="row p-0 p-md-0 headline">
                            <div className="d-flex flex-row justify-content-between mt-2">
                                <h5>Junior Frontend Developer</h5>
                                <h5>July 2022 — Present</h5>
                            </div>
                            <div className="mt-2">
                                <h5 className="menu-font">Loftal Co.,td ( Japanese name: 株式会社ロフタル )</h5>
                               <p>I implemented pure websites using html, CSS, JavaScript and bootstrap. I worked with seniors on argent projects needed by the client using languages like react. When there are no tasks to do, I can learn new languages related to web development to improve my skills.</p> 
                            </div>
                        </div>
                        <div className="row p-0 p-md-0 mt-3 mt-md-5 headline">
                            <div className="d-flex flex-row justify-content-between mt-2">
                                <h5>Web Developer Intern</h5>
                                <h5>2019 June – 2019 August</h5>
                            </div>
                            <div className="mt-2">
                                <h5 className="menu-font">Myanmar IT Consulting</h5>
                               <p>I had to do an internship for the last intern project of the university.  I had to focus on PHP.  I also had to learn the basics of many languages for frontend and backend.  I also had to do many mini projects. </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
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
            </div>

        </div>
    )
}

export default About;