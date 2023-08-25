import React from 'react'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Footer from '../../Footer/Footer'
import { pagination, Table } from "antd"
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Transport = () => {
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
          RouteName: "New Cross",
          VehicleNumber: "TN 43 AS 5263",
          DriverName: "Steve",
          DriverLicense: "REDH968532",
          ContactNumber: "+91 8974158962",
          DriverAddress: "152, South Pole, 2nd Street, 3rd Cross",
          Action: ""
        },
        {
            id:2,
          RouteName: "North Pole",
          VehicleNumber: "TN 34 DB 5847",
          DriverName: "Akbar",
          DriverLicense: "RGTH958932",
          ContactNumber: "+91 8596841252",
          DriverAddress: "253, 2nd Street, 3rd Crosst",
          Action: ""
        },
        {
            id:3,
          RouteName: "South Wales",
          VehicleNumber: "TN 34 AK 6789",
          DriverName: "Joseph",
          DriverLicense: "DLFH985632",
          ContactNumber: "+91 9658741526",
          DriverAddress: "741, East Road, 2nd Street",
          Action: ""
        }
       ]

       const column = [
        {
            title: "Route Name",
            dataIndex: "RouteName",
            sorter: (a, b) => a.RouteName.length - b.RouteName.length
        },
        {
            title: "Vehicle Number",
            dataIndex: "VehicleNumber",
            sorter: (a, b) => a.VehicleNumber.length - b.VehicleNumber.length,
        },
        {
            title: "Driver Name",
            dataIndex: "DriverName",
            sorter: (a, b) => a.DriverName.length - b.DriverName.length
        },
        {
            title: "Driver License",
            dataIndex: "DriverLicense",
            sorter: (a, b) => a.DriverLicense.length - b.DriverLicense.length
        },
        {
            title: "ContactNumber",
            dataIndex: "ContactNumber",
            sorter: (a, b) => a.ContactNumber.length - b.ContactNumber.length
        },
        
        {
            title: "Driver Address",
            dataIndex: "DriverAddress",
            sorter: (a, b) => a.DriverAddress.length - b.DriverAddress.length
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
                      <Link to="/edittransport" className="btn btn-sm bg-danger-light">
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
          <h3 className="page-title">Transport</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admindashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Transport</li>
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
                  <h3 className="page-title">Transport</h3>
                </div>
                <div className="col-auto text-end float-end ms-auto download-grp">
                  <Link to="#" className="btn btn-outline-primary me-2">
                    <i className="fas fa-download" /> Download
                  </Link>
                  <Link to="/addtransport" className="btn btn-primary">
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

  )
}

export default Transport

