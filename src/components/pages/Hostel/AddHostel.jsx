import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import { useState } from "react";

const AddHostel = () => {
    const [option, setOption] = useState([
        { id: 1, text: "Select Availability" },
        { id: 2, text: "Available" },
        { id: 3, text: "Not Available" },
      ]);
      const [options, setOptions] = useState([
        { id: 1, text: "Select Type" },
        { id: 2, text: "Normal" },
        { id: 3, text: "AC" },
        { id: 4, text: "Suite" },
      ]);
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
                  <h3 className="page-title">Add Rooms</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/hostel">Hostel</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Rooms</li>
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
                            <span>Room Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Block <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Room No <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Room Type <span className="login-danger">*</span>
                            </label>
                            {/* <select className="form-control select">
                              <option>Select Type</option>
                              <option>Normal</option>
                              <option>AC</option>
                              <option>Suite</option>
                            </select> */}
                            <Select2
                                className="form-control select"
                                data={options}
                                options={{
                                  placeholder: "Select Type",
                                }}
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              No of Beds <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Cose per Bed{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Availability{" "}
                              <span className="login-danger">*</span>
                            </label>
                            {/* <select className="form-control select">
                              <option>Select Availability</option>
                              <option>Available</option>
                              <option>Not Available</option>
                            </select> */}
                            <Select2
                                className="form-control select"
                                data={option}
                                options={{
                                  placeholder: "Select Availability",
                                }}
                              />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="student-submit">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
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

export default AddHostel;
