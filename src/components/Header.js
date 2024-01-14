import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logText, setlogText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("use effect called");
  }, [logText]);
  return (
    <div className="flex space-between bg-yellow-200">
      <div className="w-20">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/Demo">Demo</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setlogText(logText === "Login" ? "Logout" : "Login");
            }}
          >
            {logText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
