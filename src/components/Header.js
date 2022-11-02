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
        <div id = "navbar">
            <p id = "title">Instagram</p>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/logining">Logining</Link>
                    <Link to="/registeration">Registeration</Link>
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