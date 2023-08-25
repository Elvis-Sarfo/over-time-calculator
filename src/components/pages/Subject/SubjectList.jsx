import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FeatherIcon from "feather-icons-react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination"
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Footer from '../../Footer/Footer';

const SubjectList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const datasource =
        [
            {
                id: "1",
                SubjectID: "PRE2209",
                Name: "Mathematics",
                Class: 5,
                Action: ""
            },
            {
                id: "2",
                SubjectID: "PRE2213",
                Name: "History",
                Class: 6,
                Action: ""
            },
            {
                id: "3",
                SubjectID: "PRE2143",
                Name: "Science",
                Class: 3,
                Action: ""
            },
            {
                id: "4",
                SubjectID: "PRE2431",
                Name: "Geography",
                Class: 8,
                Action: ""
            },
            {
                id: "5",
                SubjectID: "PRE1534",
                Name: "Botony",
                Class: 9,
                Action: ""
            },
            {
                id: "6",
                SubjectID: "PRE2153",
                Name: "English",
                Class: 4,
                Action: ""
            }
        ]
    const column = [
        {
            title: "ID",
            dataIndex: "SubjectID",
            sorter: (a, b) => a.DepartmentID.length - b.DepartmentID.length,
        },
        {
            title: "Name",
            dataIndex: "Name",
            sorter: (a, b) => a.Name.length - b.Name.length
        },
        {
            title: "Class",
            dataIndex: "Class",
            sorter: (a, b) => a.Class.length - b.Class.length
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: (text, record) => (
                <>
                    <Link to="#" className="btn btn-sm bg-success-light me-2 ">
                        <i className="departmenteye feather-eye">
                            <FeatherIcon icon="eye" />
                        </i>
                    </Link>
                    <Link to="/editsubject" className="btn btn-sm bg-danger-light ">
                        <i className="departmentedit feather-edit">
                            <FeatherIcon icon="edit" />
                        </i>
                    </Link>
                </>
            )
        },

    ]
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
                                    <h3 className="page-title">Subjects</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admindashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Subjects</li>
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
                                            placeholder="Search by Class ..."
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
                                                    <h3 className="page-title">Subjects</h3>
                                                </div>
                                                <div className="col-auto text-end float-end ms-auto download-grp">
                                                    <Link to="#" className="btn btn-outline-primary me-2">
                                                        <i className="fas fa-download" /> Download
                                                    </Link>
                                                    <Link to="/addsubject" className="btn btn-primary">
                                                        <i className="fas fa-plus" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Page Header */}
                                        <div className="table-responsive">
                                            <Table class="table table-stripped table-hover datatable"
                                                pagination={{
                                                    total: datasource.length,
                                                    showTotal: (total, range) =>
                                                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                    showSizeChanger: true,
                                                    onShowSizeChange: onShowSizeChange,
                                                    itemRender: itemRender,
                                                }}
                                                columns={column}
                                                dataSource={datasource}

                                                rowSelection={rowSelection}
                                                rowKey={(record) => record.id}
                                            />
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

export default SubjectList
