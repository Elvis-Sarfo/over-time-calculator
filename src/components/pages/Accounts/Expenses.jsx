import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { Table } from 'antd'
import {onShowSizeChange,itemRender} from "../../Pagination"

const Expenses = () => {
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
           id: 1,
          ID: "PRE2209",
          ItemName: "Chair",
          ItemQuality: 6,
          Amount: "$120",
          PurchaseSource: "Abc Shop",
          PurchaseDate: "17 Aug 2020",
          PurchaseBy: "Lois"
        },
        {
            id: 2,
          ID: "PRE2213",
          ItemName: "Table",
          ItemQuality: 2,
          Amount: "$56",
          PurchaseSource: "Online",
          PurchaseDate: "05 Aug 2020",
          PurchaseBy: "Malynne"
        },
        {
            id: 3,
          ID: "PRE2143",
          ItemName: "Desk",
          ItemQuality: 6,
          Amount: "$378",
          PurchaseSource: "Take Away",
          PurchaseDate: "04 Sept 2020",
          PurchaseBy: "Levell Scott"
        },
        {
            id: 4,
          ID: "PRE2431",
          ItemName: "Projector",
          ItemQuality: 1,
          Amount: "$246",
          PurchaseSource: "Real Shop",
          PurchaseDate: "17 Sept 2020",
          PurchaseBy: "Minnie"
        },
        {
            id: 5,
          ID: "PRE1534",
          ItemName: "Hard disk",
          ItemQuality: 2,
          Amount: "$560",
          PurchaseSource: "Sony Center",
          PurchaseDate: "02 Oct 2020",
          PurchaseBy: "Lois A"
        },
        {
            id: 6,
          ID: "PRE2153",
          ItemName: "Note books",
          ItemQuality: 100,
          Amount: "$236",
          PurchaseSource: "DJ Stationary",
          PurchaseDate: "28 Oct 2020",
          PurchaseBy: "Calvin"
        },
        {
            id: 7,
          ID: "PRE1252",
          ItemName: "Water Bottle",
          ItemQuality: 267,
          Amount: "$237",
          PurchaseSource: "DJ Stationary",
          PurchaseDate: "17 Oct 2020",
          PurchaseBy: "Joe Kelley"
        },
        {
            id: 8,
          ID: "PRE1536",
          ItemName: "Hard disk",
          ItemQuality: 3,
          Amount: "$560",
          PurchaseSource: "music Center",
          PurchaseDate: "02 Oct 2020",
          PurchaseBy: "Lois A"
        }
       ]

       const column = [
        {
          title: "ID",
          dataIndex: "ID",
          sorter: (a, b) => a.ID.length - b.ID.length,
        },
        {
          title: "Item Name",
          dataIndex: "ItemName",
          sorter: (a, b) => a.ItemName.length - b.ItemName.length,
        },
        {
          title: "Item Quality",
          dataIndex: "ItemQuality",
          sorter: (a, b) => a.ItemQuality.length - b.ItemQuality.length,
        },
        {
          title: "Amount",
          dataIndex: "Amount",
          sorter: (a, b) => a.Amount.length - b.Amount.length,
        },
        {
          title: "Purchase Source",
          dataIndex: "PurchaseSource",
          sorter: (a, b) => a.PurchaseSource.length - b.PurchaseSource.length,
        },
        {
          title: "Purchase Date",
          dataIndex: "PurchaseDate",
          sorter: (a, b) => a.PurchaseDate.length - b.PurchaseDate.length,
        },
        {
            title: "Purchase By",
            dataIndex: "PurchaseBy",
            sorter: (a, b) => a.PurchaseBy.length - b.PurchaseBy.length,
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
                  <h3 className="page-title">Expenses</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Expenses</li>
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
                          <h3 className="page-title">Expenses</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className="btn btn-outline-primary me-2">
                            <i className="fas fa-download" /> Download
                          </Link>
                          <Link
                            to="/addexpenses"
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
};

export default Expenses;
