import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import { avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09, avatar10 } from '../../imagepath'
import Footer from '../../Footer/Footer'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const StudentGrid = () => {
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
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Students</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/students">Student</Link>
                                            </li>
                                            <li className="breadcrumb-item active">All Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-table comman-shadow">
                                    <div className="card-body pb-0">
                                        {/* Page Header */}
                                        <div className="page-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title">Students</h3>
                                                </div>
                                                <div className="col-auto text-end float-end ms-auto download-grp">
                                                    <Link to="/students" className="btn btn-outline-gray me-2">
                                                        <i className="feather-list">
                                                            <FeatherIcon icon ="list" />
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="/studentsgrid"
                                                        className="btn btn-outline-gray me-2 active"
                                                    >
                                                        <i className="feather-grid ">
                                                            <FeatherIcon icon="grid" />
                                                        </i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Page Header */}
                                        <div className="student-pro-list">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar03}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Malynne</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar04}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Levell&nbsp;Scott</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar05}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Minnie</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar06}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Lois&nbsp;A</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar07}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Calvin</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar08}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Charles Dickens</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar09}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Joe Kelley</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="student-box flex-fill">
                                                                <div className="student-img">
                                                                    <Link to="/studentsview">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar10}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/studentsview">Charles Dickens</Link>
                                                                    </h5>
                                                                    <h6>Student</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                   <Footer />
                    {/* /Footer */}
                </div>


            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default StudentGrid
