import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Footer from '../../Footer/Footer'
import { avatar02, avatar03, avatar04, avatar06, avatar08, avatar09, avatar10 } from '../../imagepath'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const TeachersGrid = () => {
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
                                    <h3 className="page-title">Teachers</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admindashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Teachers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="student-group-form">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search by ID ..."
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search by Name ..."
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search by Phone ..."
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="search-student-btn">
                                        <button type="btn" className="btn btn-primary">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-table">
                                    <div className="card-body">
                                        {/* Page Header */}
                                        <div className="page-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title">Teachers</h3>
                                                </div>
                                                <div className="col-auto text-end float-end ms-auto download-grp">
                                                    <Link to="/teacherslist" className="btn btn-outline-gray me-2">
                                                        <i className="feather-list">
                                                            <FeatherIcon icon="list" />
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="/teachersgrid"
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar06}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Malynne</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar04}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Levell&nbsp;Scott</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar03}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Minnie</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar02}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Lois&nbsp;A</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar08}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Calvin</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar09}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Charles Dickens</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar10}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Joe Kelley</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                                                                    <Link to="/teachersProfile">
                                                                        <img
                                                                            className="img-fluid"
                                                                            alt="Students Info"
                                                                            src={avatar08}
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="student-content pb-0">
                                                                    <h5>
                                                                        <Link to="/teachersProfile">Charles Dickens</Link>
                                                                    </h5>
                                                                    <h6>Teacher</h6>
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
                </div>


            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default TeachersGrid
