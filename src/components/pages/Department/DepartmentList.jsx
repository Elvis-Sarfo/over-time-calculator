import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FeatherIcon from "feather-icons-react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination"
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'

const DepartmentList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const datasource = [
        {
            id:"1",
            DepartmentID: "PRE2209",
            Name: "Computer Science Engg",
            HOD: "Aaliyah",
            StartedYear: 1995,
            NoofStudents: 180,
            Action: ""
        },
        {
            id:"2",
            DepartmentID: "PRE2213",
            Name: "Mechanical Engg",
            HOD: "Malynne",
            StartedYear: 1999,
            NoofStudents: 240,
            Action: ""
        },
        {
            id:"3",
            DepartmentID: "PRE2143",
            Name: "Electrical Engg",
            HOD: "Levell Scott",
            StartedYear: 1994,
            NoofStudents: 163,
            Action: ""
        },
        {
            id:"4",
            DepartmentID: "PRE2431",
            Name: "Civil Engg",
            HOD: "Minnie",
            StartedYear: 2000,
            NoofStudents: 195,
            Action: ""
        },
        {
            id:"5",
            DepartmentID: "PRE1534",
            Name: "MCA",
            HOD: "Lois A",
            StartedYear: 1992,
            NoofStudents: 200,
            Action: ""
        },
        {
            id:"6",
            DepartmentID: "PRE2153",
            Name: "BCA",
            HOD: "Calvin",
            StartedYear: 1992,
            NoofStudents: 152,
            Action: ""
        }
    ]

    const column = [
        {
            title: "ID",
            dataIndex: "DepartmentID",
            sorter: (a, b) => a.DepartmentID.length - b.DepartmentID.length,
            // render: (text, record) => (
            //     <>

            //         <Link to="/viewinvoice">{record.DepartmentID}</Link>

            //     </>
            // )
        },
        {
            title: "Name",
            dataIndex: "Name",
            sorter: (a, b) => a.Name.length - b.Name.length
        },
        {
            title: "HOD",
            dataIndex: "HOD",
            sorter: (a, b) => a.HOD.length - b.HOD.length
        },
        {
            title: "Started Year",
            dataIndex: "StartedYear",
            sorter: (a, b) => a.StartedYear.length - b.StartedYear.length
        },
        {
            title: "No of Students",
            dataIndex: "NoofStudents",
            sorter: (a, b) => a.NoofStudents.length - b.NoofStudents.length
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: (text, record) => (
                <>
                    <div className="actions">
                        <Link to="#" className="btn btn-sm bg-success-light me-2">
                            <i className="feather-eye">
                                <FeatherIcon icon="eye" />
                            </i>
                        </Link>
                        <Link to="/editdepartment" className="btn btn-sm bg-danger-light">
                            <i className="feather-edit ">
                                <FeatherIcon icon="edit" className="list-edit"/>
                            </i>
                        </Link>
                    </div>
    
    
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
                                    <h3 className="page-title">Departments</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admindashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Departments</li>
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
                                            placeholder="Search by Year ..."
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
                                                    <h3 className="page-title">Departments</h3>
                                                </div>
                                                <div className="col-auto text-end float-end ms-auto download-grp">
                                                    <Link to="#" className="btn btn-outline-primary me-2">
                                                        <i className="fas fa-download" /> Download
                                                    </Link>
                                                    <Link to="/adddepartment" className="btn btn-primary">
                                                        <i className="fas fa-plus" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Page Header */}
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
                    {/* Footer */}
                    <Footer />
                </div>

            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default DepartmentList
