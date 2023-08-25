import React from 'react'
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import { useState } from 'react';
import { pagination, Table } from "antd";
import { Link } from 'react-router-dom';

import {onShowSizeChange,itemRender} from "../../Pagination"

import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const LibraryList = () => {
    // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // const onSelectChange = (newSelectedRowKeys) => {
    //     console.log("selectedRowKeys changed: ", selectedRowKeys);
    //     setSelectedRowKeys(newSelectedRowKeys);
    //   };
    //   const rowSelection = {
    //   selectedRowKeys,
    //   onChange: onSelectChange,
    // };

    const datasource = [
            {
                ID: "1",
             StudentId: "PRE2309",

                Name: "Acoustics",
                Language: "English",
                Department: "Science",
                Class: 10,
                Type: "Book",
                Status: "In Stock",
                Action: ""
            },
            {
                ID: "2",
             StudentId: "PRE2209",

                Name: "Acoustics",
                Language: "Geometry",
                Department: "Science",
                Class: 8,
                Type: "Book",
                Status: "In Stock",
                Action: ""
            },
            {
                ID: "3",
             StudentId: "PRE2213",

                Name: "Games",
                Language: "English",
                Department: "General",
                Class: 9,
                Type: "Book",
                Status: "In Stock",
                Action: ""
            },
            {
                ID: "4",
             StudentId: "PRE2143",

                Name: "Chess",
                Language: "English",
                Department: "General",
                Class: 7,
                Type: "Book",
                Status: "Out of Stock",
                Action: ""
            },
            {
                ID: "5",
             StudentId: "PRE2009",

                Name: "Calculus",
                Language: "English",
                Department: "Mathematics",
                Class: 9,
                Type: "Book",
                Status: "In Stock",
                Action: ""
            },
            {
                ID: "6",
             StudentId: "PRE2431",

                Name: "Visual Basic",
                Language: "English",
                Department: "Computer Science",
                Class: 11,
                Type: "Book",
                Status: "Out of Stock",
                Action: ""
            },
            {
                ID: "7",
             StudentId: "PRE1534",

                Name: "Acoustics",
                Language: "English",
                Department: "Science",
                Class: 10,
                Type: "Book",
                Status: "In Stock",
                Action: ""
            },
            {
                ID: "8",
             StudentId: "PRE2153",

                Name: "Robotics",
                Language: "English",
                Department: "Science",
                Class: 10,
                Type: "Book",
                Status: "Out of Stock",
                Action: ""
            }
        ]
        const column = [
          {
            title: "ID",
            dataIndex: "StudentId",
            sorter: (a, b) => a.StudentId.length - b.StudentId.length,
          },
          {
            title: "Name",
            dataIndex: "Name",
            sorter: (a, b) => a.Name.length - b.Name.length,
          },
          {
            title: "Language",
            dataIndex: "Language",
            sorter: (a, b) => a.Language.length - b.Language.length,
          },
          {
            title: "Department",
            dataIndex: "Department",
            sorter: (a, b) => a.Department.length - b.Department.length,
          },
          {
            title: "Class",
            dataIndex: "Class",
            sorter: (a, b) => a.Class.length - b.Class.length,
          },
          {
            title: "Status",
            dataIndex: "Status",
            render: (text, record) => (
              <>
                {text === "In Stock" && (
                  <span className="badge badge-success">
                    {text}
                  </span>
                )}
                
                {text === "Out of Stock" && (
                  <span className="badge badge-danger">
                    {text}
                  </span>
                )}
              </>
            ),
            sorter: (a, b) => a.Status.length - b.Status.length,
          },
          {
            title: "Action",
            dataIndex: "Action",
            render: (text, record) => (
              <>
                <Link
                  to="#"
                  className="btn btn-sm bg-success-light me-2 "
                >
                  <i className="departmenteye feather-eye">
                    <FeatherIcon icon="eye" />
                  </i>
                </Link>
                <Link to="/editbook" className="btn btn-sm bg-danger-light ">
                  <i className="departmentedit feather-edit">
                    <FeatherIcon icon="edit" />
                  </i>
                </Link>
              </>
            ),
          },
        ];
  return (
    <div>
      <>
      <div className="main-wrapper">
                    {/* Header */}
                    <Header />
                    {/* Sidebar */}
                    <SideBar />
                    <div className="page-wrapper">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">Library</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admindashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Library</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-table">
          <div className="card-body">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Library</h3>
                </div>
                <div className="col-auto text-end float-end ms-auto download-grp">
                  <Link to="#" className="btn btn-outline-primary me-2">
                    <i className="fas fa-download" /> Download
                  </Link>
                  <Link to="/addbook" className="btn btn-primary">
                    <i className="fas fa-plus" />
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="table-responsive">
            <Table
            className='table border-0 star-student table-hover table-center mb-0 datatable table-striped dataTable no-footer'
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

                                                // rowSelection={rowSelection}
                                                //     rowKey={(record) => record.ID}
                                            />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer>
    <p>Copyright © 2022 Dreamguys.</p>
  </footer>
  {/* /Footer */}
</div>



                    
    </div>
                {/* /Main Wrapper */}
        </>
                
    </div>
  )
}

export default LibraryList;
