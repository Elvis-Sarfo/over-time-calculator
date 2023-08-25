import React from 'react';
import TextEditor from '../../TextEditor';
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import { Link } from 'react-router-dom';

const EditBlog = () => {
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
                        <div className="row">
                            <div className="col-xl-12">
                                {/* Page Header */}
                                <div className="page-header">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h3 className="page-title">Edit Post</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* /Page Header */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="bank-inner-details">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>
                                                            Title<span className="text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="All the Lorem Ipsum generators on the Internet"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Blog Image</label>
                                                        <div className="change-photo-btn">
                                                            <div>
                                                                <p>Upload File</p>
                                                            </div>
                                                            <input type="file" className="upload" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>Description</label>
                                                        <TextEditor/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" blog-categories-btn pt-0 ">
                                        <div className="bank-details-btn ">
                                            <Link to="blog" className="btn bank-cancel-btn me-2">
                                                Add Post
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* /Page Wrapper */}
            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default EditBlog
