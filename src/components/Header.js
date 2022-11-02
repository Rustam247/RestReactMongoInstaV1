import {Link, useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <nav id = "navbar">
            <p id = "title">Instagram</p>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">Register</Link></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;