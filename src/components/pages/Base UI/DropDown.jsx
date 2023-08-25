import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const Dropdown = () => {
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SideBar />
        
        {/* Page Wrapper */}

        <div class="page-wrapper">
          <div class="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Drop Down</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Components</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Dropdowns */}
            <section
              className="comp-section comp-dropdowns"
              id="comp_dropdowns"
            >          
              <div>
                <h4 className="card-title">Dropdowns within Text</h4>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Dropdown{" "}
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </div>
                </div>
                <hr />
                <h4 className="card-title">Dropdowns within Buttons</h4>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-success dropdown-toggle me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <hr />
                <h4 className="card-title">Split button dropdowns</h4>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle dropdown-toggle-split me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-success">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-success dropdown-toggle dropdown-toggle-split me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-warning">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle dropdown-toggle-split me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-danger">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle dropdown-toggle-split me-1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* /Dropdowns */}
          </div>
        </div>

        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Dropdown;
