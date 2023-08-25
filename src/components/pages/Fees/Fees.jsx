import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { Link } from 'react-router-dom'
import { pagination, Table } from "antd"
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'

const Fees = () => {
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
          ID: "PRE2209",
          FeesName: "Exam Fees",
          Class: 10,
          Amount: "$345",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:2,
          ID: "PRE2213",
          FeesName: "Exam Fees",
          Class: 1,
          Amount: "$255",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:3,
          ID: "PRE2143",
          FeesName: "Exam Fees",
          Class: 9,
          Amount: "$545",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:4,
          ID: "PRE2431",
          FeesName: "Sports Day Fees",
          Class: 8,
          Amount: "$234",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:5,
          ID: "PRE1534",
          FeesName: "Exam Fees",
          Class: 7,
          Amount: "$265",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:6,
          ID: "PRE2153",
          FeesName: "Sports Day Fees",
          Class: 2,
          Amount: "$334",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:7,
          ID: "PRE1434",
          FeesName: "Sports Day Fees",
          Class: 6,
          Amount: "$341",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:8,
          ID: "PRE2345",
          FeesName: "Exam Fees",
          Class: 12,
          Amount: "$365",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:9,
          ID: "PRE2365",
          FeesName: "Annual Day Fees",
          Class: 11,
          Amount: "$83",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
          Action: ""
        },
        {
            id:10,
          ID: "PRE1234",
          FeesName: "Class Test Fees",
          Class: 5,
          Amount: "$242",
          StartDate: "23 Apr 2020",
          EndDate: "28 Apr 2020",
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
            title: "Fees Name",
            dataIndex: "FeesName",
            sorter: (a, b) => a.FeesName.length - b.FeesName.length,
        },
        {
            title: "Class",
            dataIndex: "Class",
            sorter: (a, b) => a.Class.length - b.Class.length
        },
        {
            title: "Amount",
            dataIndex: "Amount",
            sorter: (a, b) => a.Amount.length - b.Amount.length
        },
        {
            title: "Start Date",
            dataIndex: "StartDate",
            sorter: (a, b) => a.StartDate.length - b.StartDate.length
        },
        {
            title: "End Date",
            dataIndex: "EndDate",
            sorter: (a, b) => a.EndDate.length - b.EndDate.length
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
                    <Link to="/editfees" className="btn btn-sm bg-danger-light ">
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
                  <h3 className="page-title">Fees</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Fees</li>
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
                          <h3 className="page-title">Fees</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className="btn btn-outline-primary me-2">
                            <i className="fas fa-download" /> Download
                          </Link>
                          <Link to="/addfees" className="btn btn-primary">
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

export default Fees;
