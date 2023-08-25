import React, { useState } from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Select2 from "react-select2-wrapper";
import { Link } from "react-router-dom";
const AddBook = () => {
  const [options, setOptions] = useState([
    { id: 1, text: "English" },
    { id: 2, text: "Turkish" },
    { id: 3, text: "Chinese" },
    { id: 4, text: "Spanish" },
    { id: 4, text: "Arabic" },
  ]);
  const [option, setOption] = useState([
    { id: 1, text: "LKG" },
    { id: 2, text: "UKG" },
    { id: 3, text: "1" },
    { id: 4, text: "2" },
    { id: 5, text: "3" },
    { id: 6, text: "4" },
    { id: 7, text: "5" },
    { id: 8, text: "6" },
    { id: 9, text: "7" },
    { id: 10, text: "8" },
    { id: 11, text: "9" },
    { id: 12, text: "10" },
    { id: 13, text: "11" },
    { id: 14, text: "12" },
  ]);
  const [type, setType] = useState([
    { id: 1, text: "Book" },
    { id: 2, text: "DVD" },
    { id: 3, text: "CD" },
    { id: 4, text: "Newspaper" },
  ]);
  const [status, setStatus] = useState([
    { id: 1, text: "select Status" },
    { id: 2, text: " In Stock" },
    { id: 3, text: " Out of Stock" },
  ]);

  return (
    <div>
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
                    <h3 className="page-title">Add Books</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/librarylist">Library</Link>
                      </li>
                      <li className="breadcrumb-item active">Add Books</li>
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
                              <span>Book Information</span>
                            </h5>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Book ID <span className="login-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Book Name{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Language <span className="login-danger">*</span>
                              </label>
                              <Select2
                                className="form-control select"
                                data={options}
                                options={{
                                  placeholder: "Select Languages",
                                }}
                              />
                              {/* <select className="form-control select">
                      <option>Select Language</option>
                      <option>English</option>
                      <option>Turkish</option>
                      <option>Chinese</option>
                      <option>Spanish</option>
                      <option>Arabic</option>
                    </select> */}
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Department{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>Class</label>
                              <Select2
                                className="form-control select"
                                data={option}
                                options={{
                                  placeholder: "Select Class",
                                }}
                              />
                              {/* <select className="form-control select">
                      <option>Select Class *</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select> */}
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Type <span className="login-danger">*</span>
                              </label>
                              <Select2
                                className="form-control select"
                                data={type}
                                options={{
                                  placeholder: "Select Type",
                                }}
                              />
                              {/* <select className="form-control select">
                      <option>Select Type</option>
                      <option>Book</option>
                      <option>DVD</option>
                      <option>CD</option>
                      <option>Newspaper</option>
                    </select> */}
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Status <span className="login-danger">*</span>
                              </label>
                              <Select2
                                className="form-control select"
                                data={status}
                                options={{
                                  placeholder: "Select Status",
                                }}
                              />
                              {/* <select className="form-control select">
                      <option>Select Status</option>
                      <option>In Stock</option>
                      <option>Out of Stock</option>
                    </select> */}
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
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </div>
  );
};

export default AddBook;
