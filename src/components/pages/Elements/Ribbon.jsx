import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Ribbon = () => {
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
                  <h3 className="page-title">Ribbon</h3>
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
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-primary">Ribbon</div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-secondary">Ribbon</div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-success">Ribbon</div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-primary ribbon-right">
                      Ribbon
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-secondary  ribbon-right">
                      Ribbon
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-success ribbon-right">
                      Ribbon
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-vertical-left-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-primary ribbon-vertical-left">
                      <i className="fas fa-gift" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-vertical-left-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-secondary  ribbon-vertical-left">
                      <i className="fas fa-gift" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-vertical-left-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-success ribbon-vertical-left">
                      <i className="fas fa-gift" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-vertical-right-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-primary ribbon-vertical-right">
                      <i className="fas fa-gift" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-vertical-right-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-secondary  ribbon-vertical-right">
                      <i className="fas fa-gift" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
              {/* Ribbon */}
              <div className="col-md-4 col-sm-6">
                <div className="ribbon-vertical-right-wrapper card">
                  <div className="card-body">
                    <div className="ribbon ribbon-success ribbon-vertical-right">
                      <i className="fas fa-gift" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Ribbon */}
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

export default Ribbon;
