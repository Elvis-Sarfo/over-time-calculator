import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../../SideBar/SideBar'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { pagination, Table } from "antd"
import {img1, img10, img2, img3, img4, img5, img6, img7, img8, img9 } from "../../imagepath";
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import {onShowSizeChange,itemRender} from "../../Pagination"
import { useState } from 'react'
    

const Students = () => {
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
          Id : "1",
          StudentId: "PRE2209",
          Name: "Aaliyah",
          Img:img1,
          Class: "10 A",
          DOB: "2 Feb 2002",
          ParentName: "Jeffrey Wong",
          MobileNumber: "097 3584 5870",
          Address: "911 Deer Ridge Drive,USA",
          Action: ""
        },
        {
          Id : "2",
          StudentId: "PRE2213",
          Name: "Malynne",
          Img:img3,
          Class: "8 A",
          DOB: "3 June 2010",
          ParentName: "Fields Malynne",
          MobileNumber: "242 362 3100",
          Address: "Bacardi Rd P.O. Box N-4880, New Providence",
          Action: ""
        },
        {
            Id : "3",
          StudentId: "PRE2143",
          Name: "Levell Scott",
          Img:img2,
          Class: "10 A",
          DOB: "12 Apr 2002",
          ParentName: "Jeffrey Scott",
          MobileNumber: "026 7318 4366",
          Address: "P.O. Box: 41, Gaborone",
          Action: ""
        },
        {
            Id : "4",
          StudentId: "PRE2431",
          Name: "Minnie",
          Img:img3,
          Class: "11 C",
          DOB: "24 Feb 2000",
          ParentName: "J Shaffer",
          MobileNumber: "952 512 4909",
          Address: "4771  Oral Lake Road, Golden Valley",
          Action: ""
        },
        {
            Id : "5",
          StudentId: "PRE1534",
          Name: "Lois A",
          Img:img4,
          Class: "10 A",
          DOB: "22 Jul 2006",
          ParentName: "Cleary Wong",
          MobileNumber: "413 289 1314",
          Address: "2844 Leverton Cove Road, Palmer",
          Action: ""
        },
        {
            Id : "6",
          StudentId: "PRE2153",
          Name: "Calvin",
          Img:img5,
          Class: "9 B",
          DOB: "8 Dec 2003",
          ParentName: "Minnie J Shaffer",
          MobileNumber: "701 753 3810",
          Address: "1900  Hidden Meadow Drive, Crete",
          Action: ""
        },
        {
            Id : "7",
          StudentId: "PRE1252",
          Name: "Joe Kelley",
          Img:img6,
          Class: "11 C",
          DOB: "7 Oct 2000",
          ParentName: "Vincent Howard",
          MobileNumber: "402 221 7523",
          Address: "3979  Ashwood Drive, Omaha",
          Action: ""
        },
        {
            Id : "8",
          StudentId: "PRE1434",
          Name: "Vincent",
          Img:img7,
          Class: "10 A",
          DOB: "4 Jan 2002",
          ParentName: "Kelley Joe",
          MobileNumber: "402 221 7523",
          Address: "3979  Ashwood Drive, Omaha",
          Action: ""
        },
        {
            Id : "9",
          StudentId: "PRE2345",
          Name: "Kozma  Tatari",
          Img:img8,
          Class: "9 A",
          DOB: "1 Feb 2006",
          ParentName: "Lombardi",
          MobileNumber: "04 2239 968",
          Address: "Rruga E Kavajes, Condor Center, Tirana",
          Action: ""
        },
        {
            Id : "10",
          StudentId: "PRE2365",
          Name: "John Chambers",
          Img:img9,
          Class: "11 B",
          DOB: "13 Sept 2003",
          ParentName: "Wong Jeffrey",
          MobileNumber: "870 663 2334",
          Address: "4667 Sunset Drive, Pine Bluff",
          Action: ""
        },
        {
            Id : "11",
          StudentId: "PRE1234",
          Name: "Nathan Humphries",
          Img:img10,
          Class: "10 B",
          DOB: "26 Apr 1994",
          ParentName: "Stephen Marley",
          MobileNumber: "077 3499 9959",
          Address: "86 Lamphey Road, Thelnetham",
          Action: ""
        }
       ]
    console.log(datasource);
    const column = [
        {
            title: "ID",
            dataIndex: "StudentId",
            sorter: (a, b) => a.StudentId.length - b.StudentId.length
        },
        {
            title: "Name",
            dataIndex: "Name",
            sorter: (a, b) => a.Name.length - b.Name.length,
            render: (text, record) => (
                <>
                    <h2 className="table-avatar">
                        <Link to="/studentsview" className="avatar avatar-sm me-2 ">
                            <img
                                className="avatar-img rounded-circle"
                                src={record.Img}
                                alt="User Image"
                            />
                        </Link>
                        <Link className='text-dark' to="/studentsview">{record.Name}</Link>
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
            title: "DOB",
            dataIndex: "DOB",
            sorter: (a, b) => a.DOB.length - b.DOB.length
        },
        {
            title: "Parent Name",
            dataIndex: "ParentName",
            sorter: (a, b) => a.ParentName.length - b.ParentName.length
        },
        {
            title: "Mobile Number",
            dataIndex: "MobileNumber",
            sorter: (a, b) => a.MobileNumber.length - b.MobileNumber.length
        },
        {
            title: "Address",
            dataIndex: "Address",
            sorter: (a, b) => a.Address.length - b.Address.length
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
                        <Link to="/editstudent" className="btn btn-sm bg-danger-light">
                            <i className="feather-edit">
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
                    <div class="content container-fluid">
                     {/* Page Header  */}
                        <div class="page-header">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="page-sub-header">
                                        <h3 class="page-title">Students</h3>
                                        <ul class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/students">Student</Link></li>
                                            <li class="breadcrumb-item active">All Students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                            placeholder="Search by Phone ..."
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
                                <div className="card card-table comman-shadow">

                                    <div className="card-body">
                                        {/* Page Header */}
                                        <div className="page-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title">Students</h3>
                                                </div>
                                                <div className="col-auto text-end float-end ms-auto download-grp">
                                                    <Link
                                                        to="/students"
                                                        className="btn btn-outline-gray me-2 active"
                                                    >
                                                        <FeatherIcon className="feather-list" icon="list"/>
                                                    </Link>
                                                    <Link
                                                        to="/studentgrid"
                                                        className="btn btn-outline-gray me-2"
                                                    >
                                                        <FeatherIcon className="feather-grid" icon="grid" />
                                                    </Link>
                                                    <Link to="#" className="btn btn-outline-primary me-2">
                                                        <i className="fas fa-download" /> Download
                                                    </Link>
                                                    <Link to="/addstudent" className="btn btn-primary">
                                                        <i className="fas fa-plus" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="table-responsive" >
                                            <Table
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
                                                    rowKey={(record) => record.Id}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>

                <Footer />
                {/* /Page Wrapper */}
            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default Students
