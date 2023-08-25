import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    logo, logosmall, headericon01, headericon05, avatar02, avatar11, avatar17,avatar13, 
    headericon04, avatar01, lr, bl, cn
} from "../imagepath";

const Header = () => {

    const handlesidebar = () => {
        document.body.classList.toggle("mini-sidebar");
      };

      const handlesidebarmobilemenu=()=>{
        document.body.classList.toggle('slide-nav');
      }

    useEffect(() => {
        const handleClick = () => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }
        }
    
        const maximizeBtn = document.querySelector('.win-maximize');
        maximizeBtn.addEventListener('click', handleClick);
    
        return () => {
          maximizeBtn.removeEventListener('click', handleClick);
        };
        
      }, []);
  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/admindashboard" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/admindashboard" className="logo logo-small">
            <img src={logosmall} alt="Logo" width={30} height={30} />
          </Link>
        </div>
        {/* /Logo */}
        <div className="menu-toggle">
          <Link to="#" id="toggle_btn" onClick={handlesidebar}>
            <i className="fas fa-bars" />
          </Link>
        </div>
        {/* Search Bar */}
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        {/* /Search Bar */}
        {/* Mobile Menu Toggle */}
        <Link to="#" className="mobile_btn" id="mobile_btn" onClick={() => handlesidebarmobilemenu()}>
          <i className="fas fa-bars" />
        </Link>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          <li className="nav-item dropdown language-drop me-2">
            <Link
              to="#"
              className="dropdown-toggle nav-link header-nav-list"
              data-bs-toggle="dropdown"
            >
              <img src={headericon01} alt="" />
            </Link>
            <div className="dropdown-menu">
            <Link to="#" className="dropdown-item">
                <img src={lr} alt="" height={16} />
                <span className="flagg">English</span>
              </Link>
              <Link to="#" className="dropdown-item">
                <img src={bl} alt="" height={16} />
                <span className="flagg">Francais</span>
              </Link>
              <Link to="#" className="dropdown-item">
                <img src={cn} alt="" height={16} />
                <span className="flagg">Turkce</span>
              </Link>
            </div>
          </li>
          {/* Notifications */}
          <li className="nav-item dropdown noti-dropdown me-2">
            <Link
              to="#"
              className="dropdown-toggle nav-link header-nav-list"
              data-bs-toggle="dropdown"
            >
              <img src={headericon05} alt="" />
            </Link>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link to="#" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={avatar02}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Carlson Tech</span> has
                            approved{" "}
                            <span className="noti-title">your estimate</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={avatar11}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">
                              International Software Inc
                            </span>{" "}
                            has sent you a invoice in the amount of{" "}
                            <span className="noti-title">$218</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={avatar17}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">John Hendry</span> sent
                            a cancellation request{" "}
                            <span className="noti-title">Apple iPhone XR</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src={avatar13}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">
                              Mercury Software Inc
                            </span>{" "}
                            added a new product{" "}
                            <span className="noti-title">
                              Apple MacBook Pro
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="#">View all Notifications</Link>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* <li className="nav-item zoom-screen me-2">
                                <Link to="#" className="nav-link header-nav-list">
                                    <img src={headericon04} alt="" />
                                </Link>
                            </li> */}
          <li className="nav-item  has-arrow dropdown-heads ">
            <Link to="#" className="win-maximize maximize-icon">
              <img src={headericon04} alt="" />
            </Link>
          </li>
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow new-user-menus">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src={avatar01}
                  width={31}
                  alt="Ryan Taylor"
                />
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </span>
            </Link>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src={avatar01}
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <Link className="dropdown-item" to="/profile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/inbox">
                Inbox
              </Link>
              <Link className="dropdown-item" to="/login">
                Logout
              </Link>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Right Menu */}
      </div>
      {/* /Header */}
    </>
  );
}

export default Header
