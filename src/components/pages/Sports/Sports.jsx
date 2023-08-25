import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { Link } from 'react-router-dom'
import { pagination, Table } from "antd"
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'

const Sports = () => {
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
          Name: "Cricket",
          Coach: "Jenny",
          StartedYear: 2002,
          Action: ""
        },
        {
            id:2,
          ID: "PRE2209",
          Name: "Cricket",
          Coach: "Jenny",
          StartedYear: 2002,
          Action: ""
        },
        {
            id:3,
          ID: "PRE2213",
          Name: "Basketball",
          Coach: "Jenny",
          StartedYear: 2002,
          Action: ""
        },
        {
            id:4,
          ID: "PRE2143",
          Name: "Volleyball",
          Coach: "Thomas",
          StartedYear: 2006,
          Action: ""
        },
        {
            id:5,
          ID: "PRE2009",
          Name: "Carrom",
          Coach: "Joseph",
          StartedYear: 2002,
          Action: ""
        },
        {
            id:6,
          ID: "PRE2431",
          Name: "Football",
          Coach: "Joseph",
          StartedYear: 2002,
          Action: ""
        },
        {
            id:7,
          ID: "PRE1534",
          Name: "Hockey",
          Coach: "Thomas",
          StartedYear: 2005,
          Action: ""
        },
        {
            id:8,
          ID: "PRE2153",
          Name: "Volleyball",
          Coach: "Joseph",
          StartedYear: 2003,
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
        },
        {
            title: "Coach",
            dataIndex: "Coach",
            sorter: (a, b) => a.Coach.length - b.Coach.length
        },
        {
            title: "Started Year",
            dataIndex: "StartedYear",
            sorter: (a, b) => a.StartedYear.length - b.StartedYear.length
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
                    <Link to="/editsports" className="btn btn-sm bg-danger-light ">
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
                  <h3 className="page-title">Sports</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Sports</li>
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
                          <h3 className="page-title">Sports</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className="btn btn-outline-primary me-2">
                            <i className="fas fa-download" /> Download
                          </Link>
                          <Link to="/addsports" className="btn btn-primary">
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Page Header */}
                    <div className="table-responsive">


                      <Table
                      className="table border-0 star-student table-hover table-center mb-0 datatable table-striped"
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

export default Sports;
