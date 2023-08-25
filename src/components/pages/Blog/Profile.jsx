import React from 'react'
import SideBar from '../../SideBar/SideBar'
import Header from '../../Header/Header'
import { Link } from 'react-router-dom'
import { avatar02 } from '../../imagepath'
// import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const Profile = () => {
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
                                <div className="col">
                                    <h3 className="page-title">Profile</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admindashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Profile</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="profile-header">
                                    <div className="row align-items-center">
                                        <div className="col-auto profile-image">
                                            <Link to="#">
                                                <img
                                                    className="rounded-circle"
                                                    alt="User Image"
                                                    src={avatar02}
                                                />
                                            </Link>
                                        </div>
                                        <div className="col ms-md-n2 profile-user-info">
                                            <h4 className="user-name mb-0">John Doe</h4>
                                            <h6 className="text-muted">UI/UX Design Team</h6>
                                            <div className="user-Location">
                                                <i className="fas fa-map-marker-alt" /> Florida, United States
                                            </div>
                                            <div className="about-text">Lorem ipsum dolor sit amet.</div>
                                        </div>
                                        <div className="col-auto profile-btn">
                                            <Link to="#" className="btn btn-primary">
                                                Edit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-menu">
                                    <ul className="nav nav-tabs nav-tabs-solid">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active"
                                                data-bs-toggle="tab"
                                                to="#per_details_tab"
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" data-bs-toggle="tab" to="#password_tab">
                                                Password
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content profile-tab-cont">
                                    {/* Personal Details Tab */}
                                    <div className="tab-pane fade show active" id="per_details_tab">
                                        {/* Personal Details */}
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title d-flex justify-content-between">
                                                            <span>Personal Details</span>
                                                            <Link
                                                                className="edit-link"
                                                                // data-bs-toggle="modal"
                                                                to="#"
                                                            >
                                                                <i className="far fa-edit me-1" />
                                                                Edit
                                                            </Link>
                                                        </h5>
                                                        <div className="row">
                                                            <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                                                Name
                                                            </p>
                                                            <p className="col-sm-9">John Doe</p>
                                                        </div>
                                                        <div className="row">
                                                            <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                                                Date of Birth
                                                            </p>
                                                            <p className="col-sm-9">24 Jul 1983</p>
                                                        </div>
                                                        <div className="row">
                                                            <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                                                Email ID
                                                            </p>
                                                            <p className="col-sm-9">johndoe@example.com</p>
                                                        </div>
                                                        <div className="row">
                                                            <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                                                Mobile
                                                            </p>
                                                            <p className="col-sm-9">305-310-5857</p>
                                                        </div>
                                                        <div className="row">
                                                            <p className="col-sm-3 text-muted text-sm-end mb-0">
                                                                Address
                                                            </p>
                                                            <p className="col-sm-9 mb-0">
                                                                4663 Agriculture Lane,
                                                                <br />
                                                                Miami,
                                                                <br />
                                                                Florida - 33165,
                                                                <br />
                                                                United States.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                {/* Account Status */}
                                                <div className="card">
                                                    <div className="card-body profile-blog">
                                                        <h5 className="card-title d-flex justify-content-between">
                                                            <span>Account Status</span>
                                                            <Link className="edit-link" to="#">
                                                                <i className="far fa-edit me-1" /> Edit
                                                            </Link>
                                                        </h5>
                                                        <button className="btn btn-success" type="button">
                                                            {/* <i className="fe fe-check-verified" >
                                                                <FeatherIcon icon="check-verified" />
                                                                </i>  */}
                                                                Active
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* /Account Status */}
                                                {/* Skills */}
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title d-flex justify-content-between">
                                                            <span>Skills </span>
                                                            <Link className="edit-link" to="#">
                                                                <i className="far fa-edit me-1" /> Edit
                                                            </Link>
                                                        </h5>
                                                        <div className="skill-tags">
                                                            <span>Html5</span>
                                                            <span>CSS3</span>
                                                            <span>WordPress</span>
                                                            <span>Javascript</span>
                                                            <span>Android</span>
                                                            <span>iOS</span>
                                                            <span>Angular</span>
                                                            <span>PHP</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Skills */}
                                            </div>
                                        </div>
                                        {/* /Personal Details */}
                                    </div>
                                    {/* /Personal Details Tab */}
                                    {/* Change Password Tab */}
                                    <div id="password_tab" className="tab-pane fade">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Change Password</h5>
                                                <div className="row">
                                                    <div className="col-md-10 col-lg-6">
                                                        <form>
                                                            <div className="form-group">
                                                                <label>Old Password</label>
                                                                <input type="password" className="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>New Password</label>
                                                                <input type="password" className="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Confirm Password</label>
                                                                <input type="password" className="form-control" />
                                                            </div>
                                                            <button className="btn btn-primary" type="submit">
                                                                Save Changes
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Change Password Tab */}
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

export default Profile
