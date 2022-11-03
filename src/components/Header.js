import {Link, useNavigate, Route, Routes, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home"
import Logining from "../pages/Logining"
import Registeration from "../pages/Registeration"

const Header = () => {

    // const navigate = useNavigate();

    // const clickHandler = () =>{
    //     console.log("Going home")
    //     navigate("/")
    //   }
    return (
        <div id = "container">
            <BrowserRouter>
                <nav id="nav-bar">
                    <p id = "title">Instagram</p>
                    <div id="links">
                    <Link id="Linkto" to="/">Home</Link>
                    <Link id="Linkto" to="/logining">Logining</Link>
                    <Link id="Linkto" to="/registeration">Registeration</Link>
                    </div>
                </nav>
                {/* <button onClick={clickHandler}>Send me home</button> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/logining" element={<Logining />} />
                    <Route path="/registeration" element={<Registeration />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Header;