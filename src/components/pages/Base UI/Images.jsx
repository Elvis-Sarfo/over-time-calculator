import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { imgg1, imgg4, user5, user6 } from "../../imagepath";
import { Link } from "react-router-dom";

const Images = () => {
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
                  <div className="row">
                    <div className="col">
                      <h3 className="page-title">Images</h3>
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
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-6">
                            <h4 className="header-title">Images shapes</h4>
                            <p>
                              Add classes to an <code>&lt;img&gt;</code> element
                              to easily style images in any project.
                            </p>
                            <div className="row">
                              <div className="col-sm-4">
                                <img
                                  src={imgg4}
                                  alt="image"
                                  className="img-fluid rounded"
                                  width={200}
                                />
                                <p className="mb-0">
                                  <code>.rounded</code>
                                </p>
                              </div>
                              <div className="col-sm-4 text-center">
                                <img
                                  src={user6}
                                  alt="image"
                                  className="img-fluid rounded-circle"
                                  width={120}
                                />
                                <p className="mb-0">
                                  <code>.rounded-circle</code>
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <img
                                  src={imgg1}
                                  alt="image"
                                  className="img-fluid img-thumbnail"
                                  width={200}
                                />
                                <p className="mb-0">
                                  <code>.img-thumbnail</code>
                                </p>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end col*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-6 mt-3 mt-xl-0">
                            <h4 className="header-title">Image sizes</h4>
                            <p>
                              Add classes to an <code>&lt;img&gt;</code> element
                              to easily style images in any project.
                            </p>
                            <div className="row">
                              <div className="col-sm-3">
                                <img
                                  src={user5}
                                  alt="image"
                                  className="img-fluid avatar-xs rounded"
                                />
                                <p className="mb-0">
                                  <code>.avatar-xs</code>
                                </p>
                                <img
                                  src={user5}
                                  alt="image"
                                  className="img-fluid avatar-sm rounded mt-2"
                                />
                                <p className="mb-0">
                                  <code>.avatar-sm</code>
                                </p>
                              </div>
                              <div className="col-sm-3">
                                <img
                                  src={user5}
                                  alt="image"
                                  className="img-fluid avatar-md rounded"
                                />
                                <p className="mb-0">
                                  <code>.avatar-md</code>
                                </p>
                              </div>
                              <div className="col-sm-3">
                                <img
                                  src={user5}
                                  alt="image"
                                  className="img-fluid avatar-lg rounded"
                                />
                                <p className="mb-0">
                                  <code>.avatar-lg</code>
                                </p>
                              </div>
                              <div className="col-sm-3">
                                <img
                                  src={user5}
                                  alt="image"
                                  className="img-fluid avatar-xl rounded"
                                />
                                <p className="mb-0">
                                  <code>.avatar-xl</code>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                      </div>
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row*/}
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

export default Images;
