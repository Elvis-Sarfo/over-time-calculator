import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'

const AddDepartment = () => {
    const [date, setDate] = useState(new Date());
    const handleChange = (date) => {
        setDate(date);
    };
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
                                    <h3 className="page-title">Add Department</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/department">Department</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Add Department</li>
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
                                                        <span>Department Details</span>
                                                    </h5>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Department ID <span className="login-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Department Name <span className="login-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Head of Department <span className="login-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms calendar-icon">
                                                        <label>
                                                            Department Start Date{" "}
                                                            <span className="login-danger">*</span>
                                                        </label>
                                                        {/* <input
                                                            className="form-control datetimepicker"
                                                            type="text"
                                                            placeholder="DD-MM-YYYY"
                                                        /> */}
                                                        <DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker" />
                                                                    

                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            No of Students <span className="login-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
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

export default AddDepartment
