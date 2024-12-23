import React, { useEffect, useRef, useState } from "react";
import "./AdminNavbar.css"
import menu_icon from '../../Assets/menu.png'
// import menu_icon from "../Assets/menu.png";
import search_icon from "../../Assets/search.png";
import notification_icon from "../../Assets/notification.png";
import profile_icon from "../../Assets/profile-pic (1).png";




const AdminNavbar = () => {
        const navRef = useRef();
      
        useEffect(() => {
          window.addEventListener("scroll", () => {
            if (window.scrollY >= 10) {
              navRef.current.classList.add("dark");
            } else {
              navRef.current.classList.remove("dark");
            }
          });
        }, []);
const [menu,setMenu]=useState(false)

const showMenu=()=>{
    setMenu
}

  return (
    <>
          <nav ref={navRef} className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={showMenu} src={menu_icon} alt="" />
      </div>

      <div className="nav-middle flex-div">
        {" "}
        <div className="search-box flex-div">
          {" "}
          <input type="text" placeholder="Search" />{" "}
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" />
      </div>
    </nav>
    </>
  )
}

export default AdminNavbar
