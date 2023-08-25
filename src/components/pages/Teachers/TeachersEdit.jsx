import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select2 from 'react-select2-wrapper';
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'

const TeachersEdit = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [options, setOptions] = useState([
        { id: 1, text: 'Male' },
        { id: 2, text: 'Female' },        
        { id: 3, text: 'Others' }      
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
                                    <h3 className="page-title">Edit Teachers</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/teacherslist">Teachers</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Edit Teachers</li>
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
                                                        <span>Basic Details</span>
                                                    </h5>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Teacher ID <span className="login-danger">*</span>
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
                                                            Name <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Vincent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Gender <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <select className="form-control select">
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Others</option>
                                                        </select> */}
                                                        < Select2
                                                            className="w-100 form-group local-forms form-control select"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Male',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms calendar-icon">
                                                        <label>
                                                            Date Of Birth <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <input
                                                            className="form-control datetimepicker"
                                                            type="text"
                                                            placeholder="29-04-2022"
                                                        /> */}
                                                        <DatePicker className="form-control datetimepicker" 
                                                        selected={startDate} 
                                                        onChange={(date) => setStartDate(date)} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Mobile <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="077 3499 9959"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms calendar-icon">
                                                        <label>
                                                            Joining Date <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <input
                                                            className="form-control datetimepicker"
                                                            type="text"
                                                            placeholder="29-04-2022"
                                                        /> */}
                                                        <DatePicker className="form-control datetimepicker" 
                                                        selected={startDate1} 
                                                        onChange={(date) => setStartDate1(date)} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Qualification <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            defaultValue="Bachelor of Engineering"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Experience <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            defaultValue={5}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <h5 className="form-title">
                                                        <span>Login Details</span>
                                                    </h5>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Username <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Vincent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Email ID <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            defaultValue="vincent20@gmail.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Password <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            defaultValue="vincent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Repeat Password <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            defaultValue="vincent"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <h5 className="form-title">
                                                        <span>Address</span>
                                                    </h5>
                                                </div>
                                                <div className="col-12 ">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Address <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="3979 Ashwood Drive"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            City <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Omaha"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            State <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Omaha"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Zip Code <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue={3979}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Country <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="USA"
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
    )
}

export default TeachersEdit
