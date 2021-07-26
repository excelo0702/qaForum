import '../styles/Navbar.css';
import qalogo from '../assets/user.png';
import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
    return(
        <div>
            <ul className="navbar-parent-list">
                <ul className="navbar-left-list">
                <li><NavLink to="/"><img src={qalogo} className="navbar-logo"/></NavLink></li>
                <li><NavLink to="/"><input type="text" placeholder="Search" className="navbar-search"/></NavLink></li>
                </ul>
                <ul className="navbar-right-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">My Followers</NavLink></li>
                    <li><NavLink to="/">Messaging</NavLink></li>
                    <li><NavLink to="/profile">Me</NavLink></li>
                </ul>
            </ul>
        </div>
    );
}

export default Navbar;