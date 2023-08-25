import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';
import Select2 from "react-select2-wrapper";
import { useState } from 'react'
import { TextField } from "@mui/material";

const EditExam = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState("10:00");
    const [endTime, setEndTime] = useState("13:00");
    const [classType, setClassType] = useState([
        { id: 1, text: "Select class" },
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
                  <h3 className="page-title">Edit Exam</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/exam">Exam</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Exam</li>
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
                            <span>Exam Information</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Exam Name <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Class Test"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Class <span className="login-danger">*</span>
                            </label>
                            {/* <select className="form-control select">
                              <option>10</option>
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
                                placeholder: "10",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Subject <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="English"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Fees <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="$50"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Start Time <span className="login-danger">*</span>
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              defaultValue="10:00 AM"
                            /> */}
                            {/* <TimePicker className="form-control" onChange={setStartTime} value={startTime} /> */}
                            <TextField
                            className="form-control"
                              id="outlined-controlled"
                              type="time"
                              value={startTime}
                              onChange={(event) => {
                                setStartTime (event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              End Time <span className="login-danger">*</span>
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              defaultValue="01:00 PM"
                            /> */}                            
                            <TextField
                            className="form-control"
                              id="outlined-controlled"
                              type="time"
                              value={endTime}
                              onChange={(event) => {
                                setEndTime (event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Event Date <span className="login-danger">*</span>
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              defaultValue="26-11-2020"
                            /> */}
                            <DatePicker
                              className="form-control datetimepicker"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
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

export default EditExam;
