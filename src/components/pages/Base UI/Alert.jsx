import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";

const Alert = () => {
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SideBar />

        {/* Page Wrapper */}

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Alert</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Components</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Alerts */}
            <div className="card bg-white">
              <div className="card-body">
                <div
                  className="alert alert-primary alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-secondary alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-info alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-light alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
                <div
                  className="alert alert-dark alert-dismissible fade show mb-0"
                  role="alert"
                >
                  <strong>Holy guacamole!</strong> You should check in on some
                  of those fields below.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  />
                </div>
              </div>
            </div>
            {/* /Alerts */}
          </div>
          {/* Footer */}
          <Footer />
        </div>

        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Alert;
