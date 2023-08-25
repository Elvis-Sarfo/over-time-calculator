import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";

const Video = () => {
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
                  <h3 className="page-title">Video</h3>
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
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">
                      Responsive embed video 21:9
                    </h4>
                    <p className="sub-header">
                      Use class <code>.ratio-21x9</code>
                    </p>
                    {/* 21:9 aspect ratio */}
                    <div className="ratio ratio-21x9">
                      <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0" />
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">
                      Responsive embed video 16:9
                    </h4>
                    <p className="sub-header">
                      Use class <code>.ratio-16x9</code>
                    </p>
                    {/* 16:9 aspect ratio */}
                    <div className="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?ecver=1" />
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">Responsive embed video 4:3</h4>
                    <p className="sub-header">
                      Use class <code>.ratio-4x3</code>
                    </p>
                    {/* 4:3 aspect ratio */}
                    <div className="ratio ratio-4x3">
                      <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?ecver=1" />
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">Responsive embed video 1:1</h4>
                    <p className="sub-header">
                      Use class <code>.ratio-1x1</code>
                    </p>
                    {/* 1:1 aspect ratio */}
                    <div className="ratio ratio-1x1">
                      <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?ecver=1" />
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* Footer */}
          <Footer />
          {/* /Footer */}
        </div>

        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Video;
