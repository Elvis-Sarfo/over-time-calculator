import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
// import { LogoImg, LogoSmallImg } from "../_components/imagepath";

const Sidebar = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuLevel, setSideMenuLevel] = useState("");
  const [isSideMenuLevel2, setSideMenuLevel2] = useState("");

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    console.log(value);
    setSideMenuLevel(value);
  };
  const toggleSidebar2 = (value) => {
    console.log(value);
    setSideMenuLevel2(value);
  };

  useEffect(() => {
    function handleMouseOver(e) {
      e.stopPropagation();
      if (document.body.classList.contains('mini-sidebar') && document.querySelector('#toggle_btn').offsetParent !== null) {
        var targ = e.target.closest('.sidebar');
        if (targ) {
          document.body.classList.add('expand-menu');
          document.querySelectorAll('.subdrop + ul').forEach((ul) => ul.style.display = 'block');
        } else {
          document.body.classList.remove('expand-menu');
          document.querySelectorAll('.subdrop + ul').forEach((ul) => ul.style.display = 'none');
        }
        return false;
      }
    }
  
    document.addEventListener('mouseover', handleMouseOver);
  
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    $(document).on('change', '.sidebar-type-four input', function() {
	    if($(this).is(':checked')) {
	        $('.sidebar').addClass('sidebar-eight');
	        $('.sidebar-menu').addClass('sidebar-menu-eight');
	        $('.menu-title').addClass('menu-title-eight');
	        $('.header').addClass('header-eight');
	        $('.header-left-two').addClass('header-left-eight');
	        $('.user-menu').addClass('user-menu-eight');
	        $('.dropdown-toggle').addClass('dropdown-toggle-eight');
	        $('.white-logo').addClass('show-logo');
	        $('.header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)').addClass('hide-logo');
	        $('.header-two .header-left-two .logo:not(.logo-small)').removeClass('hide-logo');
	        $('.header-two .header-left-two .dark-logo').removeClass('show-logo');
	    } else {
	        $('.sidebar').removeClass('sidebar-eight');
	        $('.sidebar-menu').removeClass('sidebar-menu-eight');
	        $('.menu-title').removeClass('menu-title-eight');
	        $('.header').removeClass('header-eight');
	        $('.header-left-two').removeClass('header-left-eight');
	        $('.user-menu').removeClass('user-menu-eight');
	        $('.dropdown-toggle').removeClass('dropdown-toggle-eight');
	        $('.white-logo').removeClass('show-logo');
	        $('.header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)').removeClass('hide-logo');
	    }
	});
  }, [])
  
  

  let pathName = props.location.pathname;

  console.log("Working", pathName);


  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              {/* Main Menu */}
              <ul>
                <li className="menu-title">
                  <span>Main Menu</span>
                </li>
                <li
                  className={`${
                    "/admindashboard" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "index" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "index" ? "" : "index")
                    }
                  >
                    <FeatherIcon icon="grid" /> <span>Dashboard</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "index" ? (
                    <ul
                      style={{
                        display: isSideMenu == "index" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/admindashboard"
                          className={`${
                            "/admindashboard" === pathName ? "active" : ""
                          }`}
                        >
                          Admin Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/teacherdashboard"
                          className={`${
                            "/teacherdashboard" === pathName ? "active" : ""
                          }`}
                        >
                          Teachers Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/studentdashboard"
                          className={`${
                            "/studentdashboard" === pathName ? "active" : ""
                          }`}
                        >
                          Students Dashboard
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/students" === pathName ||
                    "/studentsview" === pathName ||
                    "/addstudent" === pathName ||
                    "/editstudent" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "Students" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Students" ? "" : "Students")
                    }
                  >
                    <i className="fas fa-graduation-cap" />{" "}
                    <span> Students</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Students" ? (
                    <ul
                      style={{
                        display: isSideMenu == "Students" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/students"
                          className={`${
                            "/students" === pathName ? "active" : ""
                          }`}
                        >
                          Student List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/studentsview"
                          className={`${
                            "/studentsview" === pathName ? "active" : ""
                          }`}
                        >
                          Student View
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addstudent"
                          className={`${
                            "/addstudent" === pathName ? "active" : ""
                          }`}
                        >
                          Student Add
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/editstudent"
                          className={`${
                            "/editstudent" === pathName ? "active" : ""
                          }`}
                        >
                          Student Edit
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/teacherslist" === pathName ||
                    "/teachersprofile" === pathName ||
                    "/addteacher" === pathName ||
                    "/editteacher" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "Teachers" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Teachers" ? "" : "Teachers")
                    }
                  >
                    <i className="fas fa-chalkboard-teacher" />{" "}
                    <span> Teachers</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Teachers" ? (
                    <ul
                      style={{
                        display: isSideMenu == "Teachers" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/teacherslist"
                          className={`${
                            "/teacherslist" === pathName ? "active" : ""
                          }`}
                        >
                          Teacher List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/teachersprofile"
                          className={`${
                            "/teachersprofile" === pathName ? "active" : ""
                          }`}
                        >
                          Teacher View
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addteacher"
                          className={`${
                            "/addteacher" === pathName ? "active" : ""
                          }`}
                        >
                          Teacher Add
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/editteacher"
                          className={`${
                            "/editteacher" === pathName ? "active" : ""
                          }`}
                        >
                          Teacher Edit
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/department" === pathName ||
                    "/adddepartment" === pathName ||
                    "/editdepartment" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "Departments" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "Departments" ? "" : "Departments"
                      )
                    }
                  >
                    <i className="fas fa-building" /> <span> Departments</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Departments" ? (
                    <ul
                      style={{
                        display: isSideMenu == "Departments" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/department"
                          className={`${
                            "/department" === pathName ? "active" : ""
                          }`}
                        >
                          Department List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/adddepartment"
                          className={`${
                            "/adddepartment" === pathName ? "active" : ""
                          }`}
                        >
                          Department Add
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/editdepartment"
                          className={`${
                            "/editdepartment" === pathName ? "active" : ""
                          }`}
                        >
                          Department Edit
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/subject" === pathName ||
                    "/addsubject" === pathName ||
                    "/editsubject" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "Subjects" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Subjects" ? "" : "Subjects")
                    }
                  >
                    <i className="fas fa-book-reader" /> <span> Subjects</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Subjects" ? (
                    <ul
                      style={{
                        display: isSideMenu == "Subjects" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/subject"
                          className={`${
                            "/subject" === pathName ? "active" : ""
                          }`}
                        >
                          Subject List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addsubject"
                          className={`${
                            "/addsubject" === pathName ? "active" : ""
                          }`}
                        >
                          Subject Add
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/editsubject"
                          className={`${
                            "/editsubject" === pathName ? "active" : ""
                          }`}
                        >
                          Subject Edit
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/invoicelist" === pathName ||
                    "/invoicegrid" === pathName ||
                    "/addinvoice" === pathName ||
                    "/editinvoice" === pathName ||
                    "/viewinvoice" === pathName ||
                    "/invoicesetting" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "Invoices" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Invoices" ? "" : "Invoices")
                    }
                  >
                    <i className="fas fa-clipboard" /> <span> Invoices</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Invoices" ? (
                    <ul
                      style={{
                        display: isSideMenu == "Invoices" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/invoicelist"
                          className={`${
                            "/invoicelist" === pathName ? "active" : ""
                          }`}
                        >
                          Invoices List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/invoicegrid"
                          className={`${
                            "/invoicegrid" === pathName ? "active" : ""
                          }`}
                        >
                          Invoices Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addinvoice"
                          className={`${
                            "/addinvoice" === pathName ? "active" : ""
                          }`}
                        >
                          Add Invoices
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/editinvoice"
                          className={`${
                            "/editinvoice" === pathName ? "active" : ""
                          }`}
                        >
                          Edit Invoices
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/viewinvoice"
                          className={`${
                            "/viewinvoice" === pathName ? "active" : ""
                          }`}
                        >
                          Invoices Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/invoicesetting"
                          className={`${
                            "/invoicesetting" === pathName ? "active" : ""
                          }`}
                        >
                          Invoices Settings
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default withRouter(Sidebar);
