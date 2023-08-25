import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { Link } from 'react-router-dom'
import { pagination, Table } from "antd"
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'
import { avatar01, avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08 } from "../../imagepath";


const TimeTable = () => {
    // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    // const onSelectChange = (newSelectedRowKeys) => {
    //   console.log("selectedRowKeys changed: ", selectedRowKeys);
    //   setSelectedRowKeys(newSelectedRowKeys);
    // };
  
    // const rowSelection = {
    //   selectedRowKeys,
    //   onChange: onSelectChange,
    // };

    const datasource = [
        {
            id:1,
          ID: "PRE2309",
          Img:avatar01,
          Name: "Aaliyah",
          Class: 10,
          Subject: "English",
          StartTime: "10:00 AM",
          EndTime: "01:00 PM",
          Date: "23 Apr 2020",
          Action: ""
        },
        {
            id:2,
          ID: "PRE2209",
          Img:avatar02,
          Name: "Malynne",
          Class: 1,
          Subject: "Botony",
          StartTime: "10:00 AM",
          EndTime: "01:00 PM",
          Date: "23 Apr 2020",
          Action: ""
        },
        {
            id:3,
          ID: "PRE2213",
          Img:avatar03,
          Name: "Levell Scott",
          Class: 9,
          Subject: "Biology",
          StartTime: "01:00 PM",
          EndTime: "04:00 PM",
          Date: "26 Nov 2020",
          Action: ""
        },
        {
            id:4,
          ID: "PRE2143",
          Img:avatar04,
          Name: "Minnie",
          Class: 8,
          Subject: "Science",
          StartTime: "01:00 PM",
          EndTime: "04:00 PM",
          Date: "18 Sep 2020",
          Action: ""
        },
        {
            id:5,
          ID: "PRE2009",
          Img:avatar05,
          Name: "Lois A",
          Class: 7,
          Subject: "History",
          StartTime: "01:00 PM",
          EndTime: "04:00 PM",
          Date: "23 Jul 2020",
          Action: ""
        },
        {
            id:6,
          ID: "PRE2431",
          Img:avatar06,
          Name: "Calvin",
          Class: 2,
          Subject: "Biology",
          StartTime: "10:00 AM",
          EndTime: "01:00 PM",
          Date: "15 Oct 2020",
          Action: ""
        },
        {
            id:7,
          ID: "PRE1534",
          Img:avatar07,
          Name: "Vincent",
          Class: 6,
          Subject: "Botony",
          StartTime: "10:00 AM",
          EndTime: "01:00 PM",
          Date: "02 Jun 2020",
          Action: ""
        },
        {
            id:8,
          ID: "PRE2153",
          Img:avatar08,
          Name: "Kozma  Tatari",
          Class: 12,
          Subject: "Mathematics",
          StartTime: "10:00 AM",
          EndTime: "01:00 PM",
          Date: "23 Apr 2020",
          Action: ""
        }
       ]

    const column = [
        {
            title: "ID",
            dataIndex: "ID",
            sorter: (a, b) => a.ID.length - b.ID.length
        },
        {
          title: "Name",
          dataIndex: "Name",
          sorter: (a, b) => a.Name.length - b.Name.length,
          render: (text, record) => (
              <>
                  <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2">
                          <img
                              className="avatar-img rounded-circle"
                              src={record.Img}
                              alt="User Image"
                          />
                      </Link>
                      <Link className='list-name' to="#">{record.Name}</Link>
                  </h2>
              </>
          )
      },
        {
            title: "Class",
            dataIndex: "Class",
            sorter: (a, b) => a.Class.length - b.Class.length
        },
        {
            title: "Subject",
            dataIndex: "Subject",
            sorter: (a, b) => a.Subject.length - b.Subject.length
        },
        {
            title: "Start Time",
            dataIndex: "StartTime",
            sorter: (a, b) => a.StartTime.length - b.StartTime.length
        },
        {
            title: "End Time",
            dataIndex: "EndTime",
            sorter: (a, b) => a.EndTime.length - b.EndTime.length
        },
        {
            title: "Date",
            dataIndex: "Date",
            sorter: (a, b) => a.Date.length - b.Date.length
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
                    <Link to="/edittimetable" className="btn btn-sm bg-danger-light ">
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
                  <h3 className="page-title">Time Table</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Time Table</li>
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
                          <h3 className="page-title">Time Table</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className="btn btn-outline-primary me-2 list-download">
                            <i className="fas fa-download" /> Download
                          </Link>
                          <Link
                            to="/addtimetable"
                            className="btn btn-primary"
                          >
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Page Header */}
                    <div className="table-responsive">
                      
                    <Table
                    className="table border-0 star-student table-hover table-center mb-0 datatable table-striped dataTable no-footer"
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
                        // rowKey={(record) => record.id}
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
  );
};

export default TimeTable;
