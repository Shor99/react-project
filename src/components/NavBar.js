import { Link } from "react-router-dom";
import './NavBar.css';
function NavBar() {
    return ( 
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to="/" className="nav-link active text-white">
                    <i class="bi bi-shop me-2"></i>
                    BizAd
                </Link>

                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item me-2">
                        <Link to="/services" className="nav-link active">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link active">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

export default NavBar;