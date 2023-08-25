import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select2 from 'react-select2-wrapper';
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const AddStudent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [options, setOptions] = useState([
        { id: 1, text: 'Select Gender' },
        { id: 2, text: 'Female' },
        { id: 3, text: 'Male' },
        { id: 4, text: 'Others' }      
	]);
    const [group, setGroup] = useState([
        { id: 1, text: 'Please Select Group' },
        { id: 2, text: 'B+' },
        { id: 3, text: 'A+' },
        { id: 4, text: 'O+' }      
	]);
    const [religion, setReligion] = useState([
        { id: 1, text: 'Please Select Religion' },
        { id: 2, text: 'Hindu' },
        { id: 3, text: 'Christian' },
        { id: 4, text: 'Others' }      
	]);
    const [clas, setClas] = useState([
        { id: 1, text: 'Please Select Class' },
        { id: 2, text: '12' },
        { id: 3, text: '11' },
        { id: 4, text: '10' }      
	]);
    const [section, setSection] = useState([
        { id: 1, text: 'Please Select Section' },
        { id: 2, text: 'A' },
        { id: 3, text: 'B' },
        { id: 4, text: 'C' }      
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
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Add Students</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/students">Student</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Add Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card comman-shadow">
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-12">
                                                    <h5 className="form-title student-info">
                                                        Student Information{" "}
                                                        <span>
                                                            <Link to="#">
                                                                <i className="feather-more-vertical">
                                                                    <FeatherIcon icon="more-vertical" />
                                                                </i>
                                                            </Link>
                                                        </span>
                                                    </h5>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            First Name <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter First Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Last Name <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter First Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Gender <span className="login-danger">*</span>
                                                        </label>
                                                        
                                                        < Select2
                                                            className="w-100 form-group local-forms form-control select"
                                                            data={options}
                                                            options={{
                                                                placeholder: 'Select Gender',
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
                                                            placeholder="DD-MM-YYYY"
                                                        /> */}
                                                        <DatePicker className="form-control datetimepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>Roll </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Roll Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Blood Group <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <select className="form-control select">
                                                            <option>Please Select Group </option>
                                                            <option>B+</option>
                                                            <option>A+</option>
                                                            <option>O+</option>
                                                        </select> */}
                                                        < Select2
                                                            className="w-100 form-control select"
                                                            data={group}
                                                            options={{
                                                                placeholder:'Please Select Group'
                                                            }}
                                                     />	
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Religion <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <select className="form-control select">
                                                            <option>Please Select Religion</option>
                                                            <option>Hindu</option>
                                                            <option>Christian</option>
                                                            <option>Others</option>
                                                        </select> */}
                                                        < Select2
                                                            className="w-100 form-control select"
                                                            data={religion}
                                                            options={{
                                                                placeholder:'Please Select Religion'
                                                            }}
                                                     />	
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            E-Mail <span className="login-danger">*</span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Email Address"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Class <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <select className="form-control select">
                                                            <option>Please Select Class</option>
                                                            <option>12</option>
                                                            <option>11</option>
                                                            <option>10</option>
                                                        </select> */}
                                                        < Select2
                                                            className="w-100 form-control select"
                                                            data={clas}
                                                            options={{
                                                                placeholder:'Please Select Class'
                                                            }}
                                                     />	
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Section <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <select className="form-control select">
                                                            <option>Please Select Section </option>
                                                            <option>B</option>
                                                            <option>A</option>
                                                            <option>C</option>
                                                        </select> */}
                                                        < Select2
                                                            className="w-100 form-control select"
                                                            data={section}
                                                            options={{
                                                                placeholder:'Please Select Section'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>Admission ID </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Admission ID"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>Phone </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Phone Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group students-up-files">
                                                        <label>Upload Student Photo (150px X 150px)</label>
                                                        <div className="uplod">
                                                            <label className="file-upload image-upbtn mb-0">
                                                                Choose File <input type="file" />
                                                            </label>
                                                        </div>
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

export default AddStudent
