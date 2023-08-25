import React from 'react';
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import {
    avatar01, blog6, blog2, blog3, avatar03,avatar02,
    blog4, avatar04, blog5, avatar05, blog1, avatar06
} from "../../imagepath";

const BlogView = () => {
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
                            {/* Blog List */}
                            <div className="row">
                                <div className="col-md-9">
                                    <ul className="list-links mb-4">
                                        <li className="active">
                                            <Link to="/blog">Active Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/pendingblog">Pending Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 text-md-end">
                                    <Link to="/addblog" className="btn btn-primary btn-blog mb-3">
                                        <i className="feather-plus-circle me-1 ">
                                        <FeatherIcon icon="plus-circle" className="blog-add"/>
                                         Add New
                                         </i>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                {/* Blog Post */}
                                <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
                                    <div className="blog grid-blog flex-fill">
                                        <div className="blog-image">
                                            <Link to="/blogdetails">
                                                <img
                                                    className="img-fluid"
                                                    src={blog6}
                                                    alt="Post Image"
                                                />
                                            </Link>
                                            <div className="blog-views">
                                                <i className="feather-eye me-1 " > 
                                                <FeatherIcon icon="eye"  className="blog-eye"/>
                                                225
                                                </i>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/profile">
                                                            <img
                                                                src={avatar01}
                                                                alt="Post Author"
                                                            />
                                                            <span>
                                                                <span className="post-title">Vincent</span>
                                                                <span className="post-date">
                                                                    <i className="far fa-clock" /> 4 Dec 2022
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h3 className="blog-title">
                                                <Link to="/blogdetails">
                                                    Learning is an objective, Lorem Ipsum is not
                                                </Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                                                sed do eiusmod tempor.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="edit-options">
                                                <div className="edit-delete-btn fetrash">
                                                    <Link to="/editblog" className="text-success">
                                                        <i className="feather-edit-3 me-1 blog-edit" > 
                                                        <FeatherIcon icon='edit-3' className="blog-edit"/>
                                                        Edit
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                    >
                                                        <i className="feather-trash-2 me-1 blog-trash" > 
                                                        <FeatherIcon icon='trash-2' className="blog-trash"/>
                                                        Delete
                                                        </i>
                                                    </Link>
                                                </div>
                                                <div className="text-end inactive-style">
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteNotConfirmModal"
                                                    >
                                                        <i className="feather-eye-off me-1" >
                                                            <FeatherIcon icon='eye-off' />
                                                         Inactive
                                                         </i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Blog Post */}
                                {/* Blog Post */}                                
                                <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
                                    <div className="blog grid-blog flex-fill">
                                        <div className="blog-image">
                                            <Link to="/blogdetails">
                                                <img
                                                    className="img-fluid"
                                                    src={blog2}
                                                    alt="Post Image"
                                                />
                                            </Link>
                                            <div className="blog-views">
                                                <i className="feather-eye me-1 blog-eye" > 
                                                <FeatherIcon icon="eye"/>
                                                225
                                                </i>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/profile">
                                                            <img
                                                                src={avatar02}
                                                                alt="Post Author"
                                                            />
                                                            <span>
                                                                <span className="post-title">Lois A</span>
                                                                <span className="post-date">
                                                                    <i className="far fa-clock" /> 4 Dec 2022
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h3 className="blog-title">
                                                <Link to="/blogdetails">
                                                    Learning is an objective, Lorem Ipsum is not
                                                </Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                                                sed do eiusmod tempor.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="edit-options">
                                                <div className="edit-delete-btn fetrash">
                                                    <Link to="/editblog" className="text-success">
                                                        <i className="feather-edit-3 me-1" > 
                                                        <FeatherIcon icon='edit-3' className="blog-edit"/>
                                                        Edit
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                    >
                                                        <i className="feather-trash-2 me-1" > 
                                                        <FeatherIcon icon='trash-2' className="blog-trash"/>
                                                        Delete
                                                        </i>
                                                    </Link>
                                                </div>
                                                <div className="text-end inactive-style">
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteNotConfirmModal"
                                                    >
                                                        <i className="feather-eye-off me-1" >
                                                            <FeatherIcon icon='eye-off' />
                                                         Inactive
                                                         </i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Blog Post */}
                                {/* Blog Post */}
                                <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
                                    <div className="blog grid-blog flex-fill">
                                        <div className="blog-image">
                                            <Link to="/blogdetails">
                                                <img
                                                    className="img-fluid"
                                                    src={blog3}
                                                    alt="Post Image"
                                                />
                                            </Link>
                                            <div className="blog-views">
                                            <i className="feather-eye me-1" > 
                                                <FeatherIcon icon="eye"/>
                                                344
                                                </i>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/profile">
                                                            <img
                                                                src={avatar03}
                                                                alt="Post Author"
                                                            />
                                                            <span>
                                                                <span className="post-title">Levell Scott</span>
                                                                <span className="post-date">
                                                                    <i className="far fa-clock" /> 4 Dec 2022
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h3 className="blog-title">
                                                <Link to="/blogdetails">
                                                    Music reduces stress,Lorem Ipsum is not{" "}
                                                </Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                                                sed do eiusmod tempor.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="edit-options">
                                                <div className="edit-delete-btn">
                                                    <Link to="/editblog" className="text-success">
                                                    <i className="feather-edit-3 me-1" > 
                                                        <FeatherIcon icon='edit-3' className="blog-edit"/>
                                                        Edit
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="/editblog"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                    >
                                                        <i className="feather-trash-2 me-1" > 
                                                        <FeatherIcon icon='trash-2' className="blog-trash" />
                                                        Delete
                                                        </i>
                                                    </Link>
                                                </div>
                                                <div className="text-end inactive-style">
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteNotConfirmModal"
                                                    >
                                                        <i className="feather-eye-off me-1" >
                                                            <FeatherIcon icon='eye-off' />
                                                         Inactive
                                                         </i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Blog Post */}
                                {/* Blog Post */}
                                <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
                                    <div className="blog grid-blog flex-fill">
                                        <div className="blog-image">
                                            <Link to="/blogdetails">
                                                <img
                                                    className="img-fluid"
                                                    src={blog4}
                                                    alt="Post Image"
                                                />
                                            </Link>
                                            <div className="blog-views">
                                            <i className="feather-eye me-1" > 
                                                <FeatherIcon icon="eye"/>
                                                215
                                                </i> 
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/profile">
                                                            <img
                                                                src={avatar04}
                                                                alt="Post Author"
                                                            />
                                                            <span>
                                                                <span className="post-title">Calvin</span>
                                                                <span className="post-date">
                                                                    <i className="far fa-clock" /> 4 Dec 2022
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h3 className="blog-title">
                                                <Link to="/blogdetails">
                                                    Sports reduced risk of obesity, Lorem Ipsum is not
                                                </Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                                                sed do eiusmod tempor.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="edit-options">
                                                <div className="edit-delete-btn">
                                                    <Link to="/editblog" className="text-success">
                                                    <i className="feather-edit-3 me-1" > 
                                                        <FeatherIcon icon='edit-3' className="blog-edit"/>
                                                        Edit
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="/editblog"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                    >
                                                        <i className="feather-trash-2 me-1" > 
                                                        <FeatherIcon icon='trash-2' className="blog-trash"/>
                                                        Delete
                                                        </i>
                                                    </Link>
                                                </div>
                                                <div className="text-end inactive-style">
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteNotConfirmModal"
                                                    >
                                                        <i className="feather-eye-off me-1" >
                                                            <FeatherIcon icon='eye-off' />
                                                         Inactive
                                                         </i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Blog Post */}
                                {/* Blog Post */}
                                <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
                                    <div className="blog grid-blog flex-fill">
                                        <div className="blog-image">
                                            <Link to="/blogdetails">
                                                <img
                                                    className="img-fluid"
                                                    src={blog5}
                                                    alt="Post Image"
                                                />
                                            </Link>
                                            <div className="blog-views">
                                            <i className="feather-eye me-1" > 
                                                <FeatherIcon icon="eye"/>
                                                285
                                                </i>  
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/profile">
                                                            <img
                                                                src={avatar05}
                                                                alt="Post Author"
                                                            />
                                                            <span>
                                                                <span className="post-title">Aaliyah </span>
                                                                <span className="post-date">
                                                                    <i className="far fa-clock" /> 4 Dec 2022
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h3 className="blog-title">
                                                <Link to="/blogdetails">
                                                    Yoga can ease arthritis symptoms
                                                </Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                                                sed do eiusmod tempor.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="edit-options">
                                                <div className="edit-delete-btn">
                                                    <Link to="/editblog" className="text-success">
                                                    <i className="feather-edit-3 me-1" > 
                                                        <FeatherIcon icon='edit-3' className="blog-edit"/>
                                                        Edit
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="/editblog"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                    >
                                                        <i className="feather-trash-2 me-1" > 
                                                        <FeatherIcon icon='trash-2' className="blog-trash"/>
                                                        Delete
                                                        </i>
                                                    </Link>
                                                </div>
                                                <div className="text-end inactive-style">
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteNotConfirmModal"
                                                    >
                                                        <i className="feather-eye-off me-1" >
                                                            <FeatherIcon icon='eye-off' />
                                                         Inactive
                                                         </i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Blog Post */}
                                {/* Blog Post */}
                                <div className="col-md-6 col-xl-4 col-sm-12 d-flex">
                                    <div className="blog grid-blog flex-fill">
                                        <div className="blog-image">
                                            <Link to="/blogdetails">
                                                <img
                                                    className="img-fluid"
                                                    src={blog1}
                                                    alt="Post Image"
                                                />
                                            </Link>
                                            <div className="blog-views">
                                            <i className="feather-eye me-1" > 
                                                <FeatherIcon icon="eye"/>
                                                654
                                                </i>  
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="entry-meta meta-item">
                                                <li>
                                                    <div className="post-author">
                                                        <Link to="/profile">
                                                            <img
                                                                src={avatar06}
                                                                alt="Post Author"
                                                            />
                                                            <span>
                                                                <span className="post-title">Malynne</span>
                                                                <span className="post-date">
                                                                    <i className="far fa-clock" /> 4 Dec 2022
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h3 className="blog-title">
                                                <Link to="/blogdetails">
                                                    Education gives Greater Sense of Disciplinet
                                                </Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                                                sed do eiusmod tempor.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="edit-options">
                                                <div className="edit-delete-btn">
                                                    <Link to="/editblog" className="text-success">
                                                    <i className="feather-edit-3 me-1" > 
                                                        <FeatherIcon icon='edit-3' className="blog-edit"/>
                                                        Edit
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="/editblog"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteModal"
                                                    >
                                                        <i className="feather-trash-2 me-1" > 
                                                        <FeatherIcon icon='trash-2' className="blog-trash"/>
                                                        Delete
                                                        </i>
                                                    </Link>
                                                </div>
                                                <div className="text-end inactive-style">
                                                    <Link
                                                        to="#"
                                                        className="text-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteNotConfirmModal"
                                                    >
                                                        <i className="feather-eye-off me-1" >
                                                            <FeatherIcon icon='eye-off' />
                                                         Inactive
                                                         </i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Blog Post */}
                            </div>
                            {/* Pagination */}
                            <div className="row ">
                                <div className="col-md-12">
                                    <div className="pagination-tab  d-flex justify-content-center">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="/blog" tabIndex={-1}>
                                                    <i className="feather-chevron-left mr-2" />
                                                    Previous
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="/blog">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link className="page-link" to="#">
                                                    2 <span className="sr-only">(current)</span>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="/blog">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="/blog">
                                                    4
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="/blog">
                                                    Next
                                                    <i className="feather-chevron-right ml-2" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /Pagination */}
                            {/* Modal */}
                            <div
                                className="modal fade contentmodal"
                                id="deleteModal"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content doctor-profile">
                                        <div className="modal-header pb-0 border-bottom-0  justify-content-end">
                                            <button
                                                type="button"
                                                className="close-btn"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <i className="feather-x-circle" />
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="delete-wrap text-center">
                                                <div className="del-icon">
                                                    <i className="feather-x-circle" />
                                                </div>
                                                <h2>Sure you want to delete</h2>
                                                <div className="submit-section">
                                                    <Link to="/blog" className="btn btn-success me-2">
                                                        Yes
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-danger"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        No
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Modal */}
                        </div>
                    </div>
                    {/* /Page Wrapper */}
                </div>
                {/* /Main Wrapper */}
                {/* jQuery */}
                {/* Bootstrap Core JS */}
                {/* Feather Icon JS */}
                {/* Slimscroll JS */}
                {/* Select JS*/}
                {/* Feathericon js */}
                {/* Custom JS */}
            </>

    </div>
  )
}

export default BlogView
