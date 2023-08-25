import React from "react";
import { Link } from "react-router-dom";
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const Stickynote = () => {
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SideBar />

        {/* Page Wrapper */}

        <div className="page-wrapper cardhead">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Sticky Note</h3>
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
            <div className="row">
              {/* Sticky */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Sticky Note </h5>
                  </div>
                  <div className="card-body">
                    <ReactStickyNotes />
                  </div>
                </div>
              </div>
              {/* /Sticky */}
            </div>
          </div>
         
        </div>
      </div>
       {/* Footer */}
          <Footer />
      {/* /Main Wrapper */}
    </>
  );
};
export default Stickynote;
