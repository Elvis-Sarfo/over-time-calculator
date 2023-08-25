import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select2 from "react-select2-wrapper";
import { useState } from 'react'

const EditFees = () => {
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [options, setOptions] = useState([
    { id: 2, text: "Class Test" },
    { id: 3, text: "Exam Fees" },
    { id: 4, text: "Hostel Fees" },
    {id: 5, text: "Transport Fees"},
    {id: 6, text: "Mess Fees"},
  ]);
  const [classType, setClassType] = useState([
    { id: 2, text: " LKG" },
    { id: 3, text: "UKG" },
    { id: 4, text: "1" },
    {id: 5, text: "2"},
    {id: 6, text: "3"},
    {id: 7, text: "4"},
    {id: 8, text: "5"},
    {id: 9, text: "6"},
    {id: 10, text: "7"},
    {id: 11, text: "8"},
    {id: 12, text: "9"},
    {id: 13, text: "10"},
    {id: 14, text: "11"},
    {id: 15, text: "12"},
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
                  <h3 className="page-title">Edit Fees</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/fees">Fees</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Fees</li>
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
                            <span>Fees Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Fees ID <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="PRE1234"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Fees Type <span className="login-danger">*</span>
                            </label>
                            {/* <select className="form-control select">
                              <option>Exam Fees</option>
                              <option>Class Test</option>
                              <option>Exam Fees</option>
                              <option>Hostel Fees</option>
                              <option>Transport Fees</option>
                              <option>Mess Fees</option>
                            </select> */}
                            <Select2
                              className="w-100 form-control select"
                              data={options}
                              options={{
                                placeholder: " Exam Fees",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Gender <span className="login-danger">*</span>
                            </label>
                            {/* <select className="form-control select">
                              <option>9</option>
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
                            <Select2
                              className="w-100 form-control select"
                              data={classType}
                              options={{
                                placeholder: " 9 ",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Fees Amount{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="$152"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Start Date <span className="login-danger">*</span>
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              defaultValue="23 Apr 2020"
                            /> */}
                             <DatePicker
                              className="form-control datetimepicker"
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              End Date <span className="login-danger">*</span>
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              defaultValue="28 Apr 2020"
                            /> */}
                            <DatePicker
                              className="form-control datetimepicker"
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
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

export default EditFees;
