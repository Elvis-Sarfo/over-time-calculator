import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";

const EditEvent = () => {
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
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Edit Event</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/event">Events</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Event</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="form-title">
                            <span>Event Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Event ID</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={1}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Event Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Sports Day"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Event Date</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="23-09-2020"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default EditEvent;
