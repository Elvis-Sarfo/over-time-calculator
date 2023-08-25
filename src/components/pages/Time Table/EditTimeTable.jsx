import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { TextField } from "@mui/material";

const EditTimeTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('13:00');
  const [endTime, setEndTime] = useState('13:45');
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
                  <h3 className="page-title">Edit Time Table</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/timetable">Time Table</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Time Table</li>
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
                            <span>Time Table</span>
                          </h5>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Teacher Id <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="PRE1534"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Name <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Kozma  Tatari"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Class <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={11}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Section <span className="login-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="B"
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
                              defaultValue="Mathematics"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms calendar-icon">
                            <label>
                              Date <span className="login-danger">*</span>
                            </label>
                            {/* <input
                              className="form-control datetimepicker"
                              type="text"
                              placeholder="DD-MM-YYYY"
                            /> */}
                            <DatePicker
                              className="form-control datetimepicker"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
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
                              defaultValue="01:00 PM"
                            /> */}
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
                              defaultValue="01:45 PM"
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

export default EditTimeTable;
