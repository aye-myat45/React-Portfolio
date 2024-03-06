import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/img/icon/Frame 35.svg";

const Navbar = props => {
    return (
      <div>
        <div className ="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand text-white logo-font" href="/">
                            AMMN
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={MenuIcon} className="" alt="Menu Img"/>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto m-lg-0 mb-2">
                                <li className="nav-item px-2">
                                    <NavLink to="/" className={({isActive}) => isActive ? "menu-font text-warning text-decoration-none" : "menu-font text-white text-decoration-none" } >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink to="/about" className={({isActive}) => isActive ? "menu-font text-warning text-decoration-none" : "menu-font text-white text-decoration-none" } >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink to="/contact" className={ ({isActive}) => isActive ? "menu-font text-warning text-decoration-none" : "menu-font text-white text-decoration-none" } >
                                        Contact
                                    </NavLink>
                                </li>      
                            </ul>        
                        </div>
                                       
                    </nav>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Navbar;