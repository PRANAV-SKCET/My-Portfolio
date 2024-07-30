import '../cssfolder/Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <div className="nav-container">
            <Link to="/">
            <h1 className="nav-head">Portfolio</h1></Link>
            <ul className="nav-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certificates">Licence and Certification</Link></li>
            </ul>
        </div>
    );
}