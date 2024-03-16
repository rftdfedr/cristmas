import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="container">
            <img src="img/bx-x.svg" className="mobile-menu-button-off" />
            <Link className="logo nav-link" to="/">
                <img src="img/1.svg" alt="#" />
                <span className="h4">Christmas</span>
            </Link>
            <div className="nav">
                <img src="img/nav 1.png" alt="#" className="mobile-menu-decoration" />
                <Link className="h4 nav-link" to="/">Home</Link>
                <Link className="h4 nav-link" to="/celebrate">Celebrate</Link>
                <Link className="h4 nav-link"  to="/gifts">Gifts</Link>
                <Link className="h4 nav-link">New</Link>
                <img src="img/Vector.svg" alt="#" className="change-theme-icon"/>
                <img src="img/Vector_menu.svg" className="mobile-menu-button"  alt="#"/>
            </div>
        </nav>
    )
}

export default Nav