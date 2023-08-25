import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { pagination, Table } from "antd"
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'

const Hostel = () => {
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
          Block: "A Block",
          RoomNo: 101,
          RoomType: "Medium",
          NoofBeds: 6,
          CostperBed: "$10",
          Availability: "Full",
          Action: ""
        },
        {
            id:2,
          Block: "A Block",
          RoomNo: 101,
          RoomType: "Medium",
          NoofBeds: 6,
          CostperBed: "$10",
          Availability: "Available",
          Action: ""
        },
        {
            id:3,
          Block: "A Block",
          RoomNo: 102,
          RoomType: "Medium",
          NoofBeds: 6,
          CostperBed: "$10",
          Availability: "Full",
          Action: ""
        },
        {
            id:4,
          Block: "B Block",
          RoomNo: 104,
          RoomType: "Big",
          NoofBeds: 8,
          CostperBed: "$10",
          Availability: "Full",
          Action: ""
        },
        {
            id:5,
          Block: "A Block",
          RoomNo: 107,
          RoomType: "Medium",
          NoofBeds: 6,
          CostperBed: "$10",
          Availability: "Available",
          Action: ""
        },
        {
            id:6,
          Block: "A Block",
          RoomNo: 108,
          RoomType: "Medium",
          NoofBeds: 6,
          CostperBed: "$10",
          Availability: "Available",
          Action: ""
        },
        {
            id:7,
          Block: "B Block",
          RoomNo: 102,
          RoomType: "Medium",
          NoofBeds: 6,
          CostperBed: "$10",
          Availability: "2 Available",
          Action: ""
        },
        {
            id:8,
          Block: "B Block",
          RoomNo: 107,
          RoomType: "Small",
          NoofBeds: 6,
          CostperBed: "$10",
          Availability: "Available",
          Action: ""
        }
       ]

       const column = [
        {
            title: "Block",
            dataIndex: "Block",
            sorter: (a, b) => a.Block.length - b.Block.length
        },
        {
            title: "Room No",
            dataIndex: "RoomNo",
            sorter: (a, b) => a.RoomNo.length - b.RoomNo.length,
        },
        {
            title: "Room Type",
            dataIndex: "RoomType",
            sorter: (a, b) => a.RoomType.length - b.RoomType.length
        },
        {
            title: "No of Beds",
            dataIndex: "NoofBeds",
            sorter: (a, b) => a.NoofBeds.length - b.NoofBeds.length
        },
        {
            title: "Cost per Bed",
            dataIndex: "CostperBed",
            sorter: (a, b) => a.CostperBed.length - b.CostperBed.length
        },
        
        {
            title: "Availability",
            dataIndex: "Availability",
            render: (text, record) => (
              <div>
              {text === "Available" && (
                <span className="badge badge-success">
                  {text}
                </span>
              )}
              
              {text === "2 Available" && (
                <span className="badge badge-warning">
                  {text}
                </span>
              )}
              {text === "Full" && (
                <span className="badge badge-danger">
                  {text}
                  </span>
              )}
            </div>
            ),
            sorter: (a, b) => a.Availability.length - b.Availability.length
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
                    <Link to="/edithostel" className="btn btn-sm bg-danger-light ">
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
                  <h3 className="page-title">Hostel</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Hostel</li>
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
                          <h3 className="page-title">Hostel</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className="btn btn-outline-primary me-2">
                            <i className="fas fa-download" /> Download
                          </Link>
                          <Link to="/addhostel" className="btn btn-primary">
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Page Header */}
                    <div className="table-responsive"></div>
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

          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Hostel;
