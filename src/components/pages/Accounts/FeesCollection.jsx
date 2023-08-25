import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Footer from '../../Footer/Footer'
import { avatar01, avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09, avatar10, avatar11 } from '../../imagepath'
import { Table } from 'antd'
import { useState } from 'react'
// import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"



const FeesCollection = () => {
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
          Name: "Aaliyah",
          Img:avatar01,
          Gender: "Female",
          FeesType: "Mess Fees",
          Amount: "$120",
          PaidDate: "17 Aug 2020",
          Status: "Paid"
        },
        {
            id:2,
          ID: "PRE2213",
          Name: "Malynne",
          Img:avatar02,
          Gender: "Female",
          FeesType: "Class Test",
          Amount: "$56",
          PaidDate: "05 Aug 2020",
          Status: "Paid"
        },
        {
            id:3,
          ID: "PRE2143",
          Name: "Levell Scott",
          Img:avatar03,
          Gender: "Male",
          FeesType: "Exam Fees",
          Amount: "$378",
          PaidDate: "04 Sept 2020",
          Status: "Paid"
        },
        {
            id:4,
          ID: "PRE2431",
          Name: "Minnie",
          Img:avatar04,
          Gender: "Female",
          FeesType: "Exam Fees",
          Amount: "$246",
          PaidDate: "17 Sept 2020",
          Status: "Unpaid"
        },
        {
            id:5,
          ID: "PRE1534",
          Name: "Lois A",
          Img:avatar05,
          Gender: "Male",
          FeesType: "Exam Fees",
          Amount: "$56",
          PaidDate: "02 Oct 2020",
          Status: "Unpaid"
        },
        {
            id:6,
          ID: "PRE2153",
          Name: "Calvin",
          Img:avatar06,
          Gender: "Male",
          FeesType: "Exam Fees",
          Amount: "$236",
          PaidDate: "28 Oct 2020",
          Status: "Unpaid"
        },
        {
            id:7,
          ID: "PRE1252",
          Name: "Joe Kelley",
          Img:avatar07,
          Gender: "Female",
          FeesType: "Transport Fees",
          Amount: "$237",
          PaidDate: "17 Oct 2020",
          Status: "Paid"
        },
        {
            id:8,
          ID: "PRE1434",
          Name: "Vincent",
          Img:avatar08,
          Gender: "Male",
          FeesType: "Mess Fees",
          Amount: "$567",
          PaidDate: "05 Nov 2020",
          Status: "Paid"
        },
        {
            id:9,
          ID: "PRE2345",
          Name: "Kozma  Tatari",
          Img:avatar09,
          Gender: "Female",
          FeesType: "Exam Fees",
          Amount: "$564",
          PaidDate: "12 Nov 2020",
          Status: "Paid"
        },
        {
            id:10,
          ID: "PRE2365",
          Name: "John Chambers",
          Img:avatar10,
          Gender: "Male",
          FeesType: "Class Test",
          Amount: "$234",
          PaidDate: "15 Nov 2020",
          Status: "Paid"
        },
        {
            id:11,
          ID: "PRE1234",
          Name: "Nathan Humphries",
          Img:avatar11,
          Gender: "Male",
          FeesType: "Exam Fees",
          Amount: "$278",
          PaidDate: "17 Nov 2020",
          Status: "Paid"
        }
       ]
const column = [
  {
    title: "ID",
    dataIndex: "ID",
    sorter: (a, b) => a.ID.length - b.ID.length,
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
          <Link to="#">{record.Name}</Link>
        </h2>
      </>
    ),
  },
  {
    title: "Gender",
    dataIndex: "Gender",
    sorter: (a, b) => a.Gender.length - b.Gender.length,
  },
  {
    title: "Fees Type",
    dataIndex: "FeesType",
    sorter: (a, b) => a.FeesType.length - b.FeesType.length,
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: (a, b) => a.Amount.length - b.Amount.length,
  },
  {
    title: "Paid Date",
    dataIndex: "PaidDate",
    sorter: (a, b) => a.PaidDate.length - b.PaidDate.length,
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (text, record) => (
      <div>
      {text === "Paid" && (
        <span className="badge badge-success">
          {text}
        </span>
      )}    
      {text === "Unpaid" && (
        <span className="badge badge-danger">
          {text}
          </span>
      )}
    </div>
    ),
    sorter: (a, b) => a.Status.length - b.Status.length,
  },
];
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
                  <h3 className="page-title">Fees Collections</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Fees Collections</li>
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
                          <h3 className="page-title">Fees Collections</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className="btn btn-outline-primary me-2">
                            <i className="fas fa-download" /> Download
                          </Link>
                          <Link
                            to="/addfeescollection"
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
}

export default FeesCollection
