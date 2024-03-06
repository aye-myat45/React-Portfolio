
import HomeIcon_1 from "../../assets/img/icon/circle.svg";
import HomeIcon_2 from "../../assets/img/icon/Frame 3.svg";
import HomeIcon_3 from "../../assets/img/icon/Frame 4.svg";
import HomeImg from "../../assets/img/imgs/me.jpg";
import PortfoPage from "../../assets/img/imgs/portfoilo-page.png";
import PortfoImg from "../../assets/img/imgs/Portfolio-ui.png";
import PortfoImg_1 from "../../assets/img/imgs/vanilla-ui.png";
import PortfoImg_2 from "../../assets/img/imgs/reohub.png";
import PortfoImg_3 from "../../assets/img/imgs/age-calcu.jpg";
import ContactIcon_1 from "../../assets/img/icon/linkedin.svg";
import ContactIcon_2 from "../../assets/img/icon/github.svg";
import ContactIcon_3 from "../../assets/img/icon/x.svg";
import ContactIcon_4 from "../../assets/img/icon/instagram.svg";
import ArrowIcon from "../../assets/img/icon/arrow.svg";
import ScrollReveal from 'scrollreveal';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const Home = (props) => {

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
            <title>Home | Portfolio</title>
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

        {/* Intro Section */}
        <div className="container-fluid one-section mb-5 mb-lg-0 ps-lg-4 pe-lg-4">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 m-lg-5">
                <div className="col p-3 p-md-5 mt-0 mt-lg-5">
                    <h1 className="waviy pe-5">
                        <span>H</span>
                        <span>I</span>
                        <span>,</span>&nbsp;
                        <span>I</span>&nbsp;
                        <span>A</span>
                        <span>M</span>&nbsp;
                        <span>A</span>
                        <span>Y</span>
                        <span>E</span>&nbsp;
                        <span>M</span>
                        <span>Y</span>
                        <span>A</span>
                        <span>T</span>&nbsp;
                        <span>M</span>
                        <span>Y</span>
                        <span>A</span>
                        <span>T</span>&nbsp;
                        <span>N</span>
                        <span>Y</span>
                        <span>E</span>
                        <span>I</span>
                        <span>N</span>
                        <span>.</span>&nbsp;
                        {/* HI, I AM AYE MYAT MYAT NYEIN. */}
                    </h1>
                    <p className="headline text-white pe-2 mt-2">A Myanmar based front-end developer passionate about building accessible and user friendly websites.</p>
                    <div className="row">
                        <div className="headline col d-flex justify-conter-center mt-2">
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
                <div className="col m-auto p-md-5 p-lg-0">
                    <img src={HomeImg} className="headline home-img" alt="Home Img"/>
                </div>
            </div>
        </div>

        {/* Project Section */}
        <div className="container-fluid one-section mb-5 ps-lg-4 pe-lg-4">
            <div className="row mb-3 m-lg-5 pt-0 ps-0 ps-md-5 pt-md-4">
                <h2 className="headline pe-5">FEATURED PROJECTS</h2>
                <p className="text-white headline pe-2 mt-2">Here are some of the selected projects that showcase my passion for front-end development.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 mb-md-0 m-lg-5 ps-0 ps-md-3">
                <div className="col mt-0 mt-lg-0">
                    <div className="proj-bg">
                        <img src={PortfoImg} className="headline proj-img" alt="Portfo Img"/>
                    </div>
                </div>
                <div className="col headline mt-3 mt-md-0 mt-lg-0 p-md-5 p-lg-0">
                    <div className="row">
                        <h3>Portfolio Software UI</h3>
                        <p>About Myself and my projects in details.</p>
                    </div>
                    <div className="row p-3 p-md-0 mt-3">
                        <div className="border-bottom">
                            <h5>PROJECT INFO</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Year</h5>
                            <h5>2019</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Role</h5>
                            <h5>Internship</h5>
                        </div>
                        <div>
                            <Link to="https://my-portfolio-lac-nu-56.vercel.app/" target='_blank' className="text-decoration-none d-flex flex-row mt-5">
                                <h4>Live Demo</h4>
                                <img src={ArrowIcon} className="arrow icon pb-2" alt="Arrow Icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 mb-md-0 m-lg-5 ps-0 ps-md-3">
                <div className="col mt-0 mt-lg-0">
                    <div className="proj-bg">
                        <img src={PortfoImg_3} className="headline proj-img" alt="Portfo Img"/>
                    </div>
                </div>
                <div className="col headline mt-3 mt-md-0 mt-lg-0 p-md-5 p-lg-0">
                    <div className="row">
                        <h3>Age Calculator App</h3>
                        <p>A calculator website that calculates ages exactly with days, months and years.</p>
                    </div>
                    <div className="row p-3 p-md-0 mt-3">
                        <div className="border-bottom">
                            <h5>PROJECT INFO</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Year</h5>
                            <h5>2022</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Role</h5>
                            <h5>Javascript testing project</h5>
                        </div>
                        <div>
                            <Link to="https://age-calculator-livid-theta.vercel.app/" target='_blank' className="text-decoration-none d-flex flex-row mt-5">
                                <h4>Live Demo</h4>
                                <img src={ArrowIcon} className="arrow icon pb-2" alt="Arrow Icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 mb-md-0 m-lg-5 ps-0 ps-md-3">
                <div className="col mt-0 mt-lg-0">
                    <div className="proj-bg">
                        <img src={PortfoImg_1} className="headline proj-img" alt="Portfo Img"/>
                    </div>
                </div>
                <div className="col headline mt-3 mt-md-0 mt-lg-0 p-md-5 p-lg-0">
                    <div className="row">
                        <h3>Vanilla | Remote Software UI</h3>
                        <p>It is a software ui created using Tailwind CSS framework. It has been created to be responsive for both mobile and desktop. Includes dark mode and mobile menu with animation.</p>
                    </div>
                    <div className="row p-3 p-md-0 mt-3">
                        <div className="border-bottom">
                            <h5>PROJECT INFO</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Year</h5>
                            <h5>2023</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Role</h5>
                            <h5>TailwindCSS (Own Project)</h5>
                        </div>
                        <div>
                            <Link to="https://vanilla-remote-desktop-ui-chi.vercel.app/" target='_blank' className="text-decoration-none d-flex flex-row mt-5">
                                <h4>Live Demo</h4>
                                <img src={ArrowIcon} className="arrow icon pb-2" alt="Arrow Icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 mb-md-0 m-lg-5 ps-0 ps-md-3">
                <div className="col mt-0 mt-lg-0">
                    <div className="proj-bg">
                        <img src={PortfoImg_2} className="headline proj-img" alt="Portfo Img"/>
                    </div>
                </div>
                <div className="col headline mt-3 mt-md-0 mt-lg-0 p-md-5 p-lg-0">
                    <div className="row">
                        <h3>RepoHub Software UI | React App </h3>
                        <p>It is a react app a created using React and Bootstrap framework. . It has been created to be responsive for mobile, tablet and desktop. And also, it has scrollreveal animation. Currently, only one home page has been completed and other pages are still to be implemented.</p>
                    </div>
                    <div className="row p-3 p-md-0 mt-3">
                        <div className="border-bottom">
                            <h5>PROJECT INFO</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Year</h5>
                            <h5>2023</h5>
                        </div>
                        <div className="border-bottom d-flex flex-row justify-content-between mt-2">
                            <h5>Role</h5>
                            <h5>React(Own Project)</h5>
                        </div>
                        <div>
                            <Link to="https://repo-hub-react-ui.vercel.app/" target='_blank' className="text-decoration-none d-flex flex-row mt-5">
                                <h4>Live Demo</h4>
                                <img src={ArrowIcon} className="arrow icon pb-2" alt="Arrow Icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* About Section */}
        <div className="container-fluid one-section mb-5 ps-lg-4 pe-lg-4">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 mb-5 m-lg-5">
                <div className="col p-3 p-md-0 mt-0">
                    <h2 className="ps-0 ps-md-5 headline">ABOUT ME</h2>
                </div>
                <div className="col headline m-auto p-md-5 p-lg-0">
                    <h3>I am a front-end developer based in Myanmar. Has Computer Science background. </h3>
                    <p className="mt-3">I am a front-end developer based in Myanmar looking for exciting opportunities. Has Computer Science background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy reading book and playing tennis. Learning more to improve skill.</p>
                    <div>
                        <Link to="https://repo-hub-react-ui.vercel.app/" target='_blank' className="text-decoration-none d-flex flex-row mt-5">
                            <h4>More about me</h4>
                            <img src={ArrowIcon} className="arrow icon pb-0" alt="Arrow Icon"/>
                        </Link>
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

export default Home;