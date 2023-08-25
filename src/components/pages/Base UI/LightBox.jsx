import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer.jsx";
import Header from "../../Header/Header.jsx";
import SideBar from "../../SideBar/SideBar.jsx";
import { img01, img02 } from "../../imagepath.jsx";
import { img03, img04, img05 } from '../../imagepath.jsx';

const LightBox = () => {
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
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Range Slider</h3>
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
      {/* Lightbox */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Single Image Lightbox</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-2 mb-md-0">
                <Link to={img01} className="image-popup">
                  <img
                    src={img01}
                    className="img-fluid"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="col-md-4 mb-2 mb-md-0">
                <Link to={img02} className="image-popup">
                  <img
                    src={img02}
                    className="img-fluid"
                    alt="image"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Lightbox */}
      {/* Lightbox */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Image with Description</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-2 mb-md-0">
                <Link
                  to={img03}
                  className="image-popup-desc"
                  data-title="Title 01"
                  data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                >
                  <img
                    src={img03}
                    className="img-fluid"
                    alt="work-thumbnail"
                  />
                </Link>
              </div>
              <div className="col-md-4 mb-2 mb-md-0">
                <Link
                  to={img04}
                  className="image-popup-desc"
                  data-title="Title 02"
                  data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                >
                  <img
                    src={img04}
                    className="img-fluid"
                    alt="work-thumbnail"
                  />
                </Link>
              </div>
              <div className="col-md-4 mb-2 mb-md-0">
                <Link
                  to={img05}
                  className="image-popup-desc"
                  data-title="Title 03"
                  data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                >
                  <img
                    src={img05}
                    className="img-fluid"
                    alt="work-thumbnail"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Lightbox */}
    </div>
          </div>
          {/* Footer */}
      <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};
export default LightBox;
