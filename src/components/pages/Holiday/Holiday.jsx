import React from "react";
import { Link } from 'react-router-dom'
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { pagination, Table } from "antd"
import {img1, img10, img2, img3, img4, img5, img6, img7, img8, img9 } from "../../imagepath";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'

const Holiday = () => {
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
          HolidayName: "Sports Day",
          Type: "College Holiday",
          StartDate: "17 Aug 2020",
          EndDate: "19 Aug 2020"
        },
        {
            id:2,
          ID: "PRE2213",
          HolidayName: "Memorial Day",
          Type: "Public Holiday",
          StartDate: "05 Aug 2020",
          EndDate: "06 Aug 2020"
        },
        {
            id:3,
          ID: "PRE2143",
          HolidayName: "Annual Day",
          Type: "College Holiday",
          StartDate: "04 Sept 2020",
          EndDate: "07 Sept 2020"
        },
        {
            id:4,
          ID: "PRE2431",
          HolidayName: "Exam Holiday",
          Type: "Semester leave",
          StartDate: "17 Sept 2020",
          EndDate: "30 Sept 2020"
        },
        {
            id:5,
          ID: "PRE2209",
          HolidayName: "Sports Day",
          Type: "College Holiday",
          StartDate: "17 Aug 2020",
          EndDate: "19 Aug 2020"
        },
        {
            id:6,
          ID: "PRE2213",
          HolidayName: "Memorial Day",
          Type: "Public Holiday",
          StartDate: "05 Aug 2020",
          EndDate: "06 Aug 2020"
        },
        {
            id:7,
          ID: "PRE2143",
          HolidayName: "Annual Day",
          Type: "College Holiday",
          StartDate: "04 Sept 2020",
          EndDate: "07 Sept 2020"
        },
        {
            id:8,
          ID: "PRE2431",
          HolidayName: "Exam Holiday",
          Type: "Semester leave",
          StartDate: "17 Sept 2020",
          EndDate: "30 Sept 2020"
        }
       ]
       const column = [
        {
            title: "ID",
            dataIndex: "ID",
            sorter: (a, b) => a.ID.length - b.ID.length
        },
        {
            title: "Holiday Name",
            dataIndex: "HolidayName",
            sorter: (a, b) => a.HolidayName.length - b.HolidayName.length,
        },
        {
            title: "Type",
            dataIndex: "Type",
            sorter: (a, b) => a.Type.length - b.Type.length
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
                  <h3 className="page-title">Holiday</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Holiday</li>
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
                          <h3 className="page-title">Holiday</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className="btn btn-outline-primary me-2">
                            <i className="fas fa-download" /> Download
                          </Link>
                          <Link
                            to="/addholiday"
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
          <footer>
            <p>Copyright © 2022 Dreamguys.</p>
          </footer>
          {/* /Footer */}
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Holiday;
