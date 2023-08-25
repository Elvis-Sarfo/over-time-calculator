import React,{useState} from 'react';
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination"
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import Footer from '../../Footer/Footer'
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09, avatar10, avatar11 } from '../../imagepath'

const TeachersList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const datasource = 
    [
 {
   ID : "1",
   TeachersID: "PRE2209",
   Img:avatar02,
   Name: "Aaliyah",
   Class: 10,
   Gender: "Female",
   Subject: "Mathematics",
   Section: "A",
   MobileNumber: "097 3584 5870",
   Address: "911 Deer Ridge Drive,USA",
   Action: ""
 },
 {
   ID : "2",
   TeachersID: "PRE2213",
   Img:avatar03,
   Name: "Malynne",
   Class: 8,
   Gender: "Female",
   Subject: "Physics",
   Section: "A",
   MobileNumber: "242 362 3100",
   Address: "Bacardi Rd P.O. Box N-4880, New Providence",
   Action: ""
 },
 {
   ID : "3",
   TeachersID: "PRE2143",
   Img:avatar04,
   Name: "Levell Scott",
   Class: 10,
   Gender: "Male",
   Subject: "Science",
   Section: "B",
   MobileNumber: "026 7318 4366",
   Address: "P.O. Box: 41, Gaborone",
   Action: ""
 },
 {
   ID : "4",
   TeachersID: "PRE2431",
   Img:avatar05,
   Name: "Minnie",
   Class: 11,
   Gender: "Male",
   Subject: "History",
   Section: "C",
   MobileNumber: "952 512 4909",
   Address: "4771  Oral Lake Road, Golden Valley",
   Action: ""
 },
 {
   ID : "5",
   TeachersID: "PRE1534",
   Img:avatar06,
   Name: "Lois A",
   Class: 10,
   Gender: "Female",
   Subject: "English",
   Section: "B",
   MobileNumber: "413 289 1314",
   Address: "2844 Leverton Cove Road, Palmer",
   Action: ""
 },
 {
   ID : "6",
   TeachersID: "PRE2153",
   Img:avatar07,
   Name: "Calvin",
   Class: 9,
   Gender: "Male",
   Subject: "Mathematics",
   Section: "C",
   MobileNumber: "701 753 3810",
   Address: "1900  Hidden Meadow Drive, Crete",
   Action: ""
 },
 {
   ID : "7",
   TeachersID: "PRE1434",
   Img:avatar08,
   Name: "Vincent",
   Class: 10,
   Gender: "Male",
   Subject: "Mathematics",
   Section: "C",
   MobileNumber: "402 221 7523",
   Address: "3979  Ashwood Drive, Omaha",
   Action: ""
 },
 {
   ID : "8",
   TeachersID: "PRE2345",
   Img:avatar09,
   Name: "Kozma  Tatari",
   Class: 9,
   Gender: "Female",
   Subject: "Science",
   Section: "A",
   MobileNumber: "04 2239 968",
   Address: "Rruga E Kavajes, Condor Center, Tirana",
   Action: ""
 },
 {
   ID : "9",
   TeachersID: "PRE2365",
   Img:avatar10,
   Name: "John Chambers",
   Class: 11,
   Gender: "Male",
   Subject: "Botony",
   Section: "B",
   MobileNumber: "870 663 2334",
   Address: "4667 Sunset Drive, Pine Bluff",
   Action: ""
 },
 {
   ID : "10",
   TeachersID: "PRE1234",
   Img:avatar11,
   Name: "Nathan Humphries",
   Class: 10,
   Gender: "Male",
   Subject: "Biology",
   Section: "A",
   MobileNumber: "077 3499 9959",
   Address: "86 Lamphey Road, Thelnetham",
   Action: ""
 }
]
const column = [
    {
        title: "ID",
        dataIndex: "TeachersID",
        sorter: (a, b) => a.TeachersID.length - b.TeachersID.length,
        // render: (text, record) => (
        //     <>
        //         <Link to="/viewinvoice">{record.TeachersID}</Link>
        //     </>
        // )
    },
    {
        title: "Name",
        dataIndex: "Name",
        sorter: (a, b) => a.Name.length - b.Name.length,
        render: (text, record) => (
            <>
                <h2 className="table-avatar">
                    <Link to="/teachersprofile" className="avatar avatar-sm me-2">
                        <img
                            className="avatar-img rounded-circle"
                            src={record.Img}
                            alt="User Image"
                        />
                    </Link>
                    <Link to="/teachersprofile">{record.Name}</Link>
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
        title: "Gender",
        dataIndex: "Gender",
        sorter: (a, b) => a.Gender.length - b.Gender.length
    },
    
    {
        title: "Subject",
        dataIndex: "Subject",
        sorter: (a, b) => a.Subject.length - b.Subject.length
    },
    {
        title: "Section",
        dataIndex: "Section",
        sorter: (a, b) => a.Section.length - b.Section.length
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
                    <Link to="/editteacher" className="btn btn-sm bg-danger-light">
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
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Teachers</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admindashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Teachers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
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
                                <div className="card card-table">
                                    <div className="card-body">
                                        {/* Page Header */}
                                        <div className="page-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title">Teachers</h3>
                                                </div>
                                                <div className="col-auto text-end float-end ms-auto download-grp">
                                                    <Link
                                                        to="/teacherslist"
                                                        className="btn btn-outline-gray me-2 active"
                                                    >
                                                        <i className="feather-list">
                                                            <FeatherIcon icon="list" />
                                                        </i>
                                                    </Link>
                                                    <Link
                                                        to="/teachersgrid"
                                                        className="btn btn-outline-gray me-2"
                                                    >
                                                        <i className="feather-grid">
                                                            <FeatherIcon icon="grid" />
                                                        </i>
                                                    </Link>
                                                    <Link to="#" className="btn btn-outline-primary me-2">
                                                        <i className="fas fa-download" /> Download
                                                    </Link>
                                                    <Link to="/addteacher" className="btn btn-primary">
                                                        <i className="fas fa-plus" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Page Header */}
                                        <div className="table-responsive">
                                        <Table  className="table border-0 star-student table-hover table-center mb-0 datatable table-striped"
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
                                                rowKey={(record) => record.ID}
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

export default TeachersList
