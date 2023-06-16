import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <h1>Alaa Blog's</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Nav;
