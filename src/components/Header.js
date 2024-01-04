import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    const [logText, setlogText] = useState('Login');

    useEffect(()=>{
        console.log('use effect called')
    },[logText]);
    console.log('header rendered');
    return <div className="header">
        <div>
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                <Link to='/'>Home</Link></li>
                <li>
                    <Link to='/about'>About Us </Link>
                </li>
                <li><Link to='/contact'>Contact Us </Link></li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                    setlogText(logText==='Login'?'Logout':'Login')}
                }>{logText}</button>
            </ul>
        </div>
    </div>
}

export default Header;