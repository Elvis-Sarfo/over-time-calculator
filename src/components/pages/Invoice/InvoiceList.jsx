import React from 'react'
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import FeatherIcon from "feather-icons-react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination"
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import { avatar04, avatar06, avatar08, avatar10, avatar11, invoicesicon1, invoicesicon2, invoicesicon3, invoicesicon4, invoicesicon5 } from '../../imagepath';
import { useState, useEffect } from 'react';


const InvoiceList = () => {
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
            ID: "1",
            InvoiceID: "IN093439#@09",
            Category: "Advertising",
            Createdon: "16 Mar 2022",
            Invoiceto: "Barbara Moore",
            Img: avatar04,
            Amount: "$1,54,220",
            Duedate: "23 Mar 2022",
            Status: "Paid",
            Action: ""
        },
        {
            ID: "2",
            InvoiceID: "IN093439#@10",
            Category: "Food",
            Createdon: "14 Mar 2022",
            Invoiceto: "Karlene Chaidez",
            Img: avatar06,
            Amount: "$1,222",
            Duedate: "18 Mar 2022",
            Status: "Overdue",
            Action: ""
        },
        {
            ID: "3",
            InvoiceID: "IN093439#@11",
            Category: "Marketing",
            Createdon: "7 Mar 2022",
            Invoiceto: "Russell Copeland",
            Img: avatar08,
            Amount: "$3,470",
            Duedate: "10 Mar 2022",
            Status: "Cancelled",
            Action: ""
        },
        {
            ID: "4",
            InvoiceID: "IN093439#@12",
            Category: "Repairs",
            Createdon: "24 Mar 2022",
            Invoiceto: "Joseph Collins",
            Img: avatar10,
            Amount: "$8,265",
            Duedate: "30 Mar 2022",
            Status: "Paid",
            Action: ""
        },
        {
            ID: "",
            InvoiceID: "IN093439#@13",
            Category: "Software",
            Createdon: "17 Mar 2022",
            Invoiceto: "Jennifer Floyd",
            Img: avatar11,
            Amount: "$5,200",
            Duedate: "20 Mar 2022",
            Status: "Overdue",
            Action: ""
        }
    ]
    console.log(datasource);
    const column = [
        {
            title: "Invoice ID",
            dataIndex: "InvoiceID",
            sorter: (a, b) => a.InvoiceID.length - b.InvoiceID.length,
            render: (text, record) => (
                <>
                    
                    <Link to="/viewinvoice">{record.InvoiceID}</Link>

                </>
            )
        },
        {
            title: "Category",
            dataIndex: "Category",
            sorter: (a, b) => a.Category.length - b.Category.length
        },
        {
            title: "Created on",
            dataIndex: "Createdon",
            sorter: (a, b) => a.Createdon.length - b.Createdon.length
        },
        {
            title: "Invoice to",
            dataIndex: "Invoiceto",
            render: (text, record) => (
                <>
                    <h2 className="table-avatar">
                        <Link to="/profile" className="avatar avatar-sm me-2">
                            <img
                                className="avatar-img rounded-circle"
                                src={record.Img}
                                alt="User Image"
                            />
                        </Link>
                        <Link className='text-dark' to="/profile">{record.Invoiceto}</Link>
                    </h2>

                </>
            )
        },
        {
            title: "Amount",
            dataIndex: "Amount",
            className: "text-primary",
            sorter: (a, b) => a.Amount.length - b.Amount.length
        },
        {
            title: "Due date",
            dataIndex: "Duedate",
            sorter: (a, b) => a.Duedate.length - b.Duedate.length
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text, record) => (
                <div>
                {text === "Paid" && (
                  <span className="badge bg-success-light text-success-light">
                    {text}
                  </span>
                )}    
                {text === "Overdue" && (
                  <span className="badge bg-danger-light text-danger-light">
                    {text}
                    </span>
                )}
                {text === "Cancelled" && (
                  <span className="badge bg-primary-light text-primary-light">
                    {text}
                    </span>
                )}
              </div>
              ),
            sorter: (a, b) => a.Status.length - b.Status.length
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: (text, record) => (
                <>
                    <div className="text-end">
                        <div className="dropdown dropdown-action">
                            <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" to="/editinvoice">
                                    <i className="far fa-edit me-2" />
                                    Edit
                                </Link>
                                <Link className="dropdown-item" to="/viewinvoice">
                                    <i className="far fa-eye me-2" />
                                    View
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    <i className="far fa-trash-alt me-2" />
                                    Delete
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    <i className="far fa-check-circle me-2" />
                                    Mark as sent
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    <i className="far fa-paper-plane me-2" />
                                    Send Invoice
                                </Link>
                                <Link className="dropdown-item" to="#">
                                    <i className="far fa-copy me-2" />
                                    Clone Invoice
                                </Link>
                            </div>
                        </div>
                    </div>

                </>
            )
        },

    ]


    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [menu, setMenu] = useState(false)
    const [date, setDate] = useState(new Date());

    const toggleSetShow = (value) => {
        setShow(value)
        setShow1(false)
        setShow2(false)
        setShow3(false)
    }
    const toggleSetShowone = (value) => {
        setShow(false)
        setShow1(value)
        setShow2(false)
        setShow3(false)
    }
    const toggleSetShowtwo = (value) => {
        setShow(false)
        setShow1(false)
        setShow2(value)
        setShow3(false)
    }
    const toggleSetShowthree = (value) => {
        setShow(false)
        setShow1(false)
        setShow2(false)
        setShow3(value)
    }
    // const toggleMobileMenu = () => {
    //     setMenu(!menu)
    // }
    useEffect(() => {
        let elements = Array.from(document.getElementsByClassName('react-datepicker-wrapper'));
        elements.map(element => element.classList.add("width-100"))
    }, []);

    const handleChange = (date) => {
        setDate(date);
    };

    const [options, setOptions] = useState([
        { id: 1, text: 'Select Status' },
        { id: 2, text: 'Draft' },
        { id: 3, text: 'Sent' },
        { id: 4, text: 'Viewed' },
        { id: 5, text: 'Expired' },
        { id: 6, text: 'Accepted' },
        { id: 7, text: 'Rejected' }
    ]);
    return (
        <>
            <div className="main-wrapper">
                {/* Header */}
                <Header />

                {/* Sidebar */}
                <SideBar />

                {/* /Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Invoices</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admindashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Invoices</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        {/* Invoice Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col" />
                                <div className="col-auto">
                                    <Link to="/invoicelist" className="invoices-links active">
                                        <i className="feather feather-list" >
                                            <FeatherIcon icon="list" />
                                        </i>
                                    </Link>
                                    <Link to="/invoicegrid" className="invoices-links">
                                        <i className="feather feather-grid" >
                                            <FeatherIcon icon="grid" />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* /Invoice Header */}
                        {/* Report Filter */}
                        <div className="card report-card">
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="app-listing">
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox" onClick={() => toggleSetShow(!show)} >
                                                        <p class="mb-0"><i class="fas fa-user-plus me-1 select-icon"></i> Select User</p>
                                                        <span class="down-icon"><i class="fas fa-chevron-down"></i></span>
                                                    </div>
                                                    <div id="checkBoxes" style={{ display: show ? "block" : "none" }}>
                                                        <form action="#">
                                                            <p className="checkbox-title">Customer Search</p>
                                                            <div className="form-custom">
                                                                <input type="text" className="form-control bg-grey" placeholder="Enter Customer Name" />
                                                            </div>
                                                            <div className="selectBox-cont">
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark"></span>  Brian Johnson
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark"></span>  Russell Copeland
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark"></span>  Greg Lynch
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark"></span> John Blair
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark"></span> Barbara Moore
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark"></span> Hendry Evan
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark"></span> Richard Miles
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                            <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox" onClick={() => toggleSetShowone(!show1)}>
                                                        <p class="mb-0"><i class="fas fa-calendar me-1 select-icon"></i> Select Date</p>
                                                        <span class="down-icon"><i class="fas fa-chevron-down"></i></span>
                                                    </div>
                                                    <div id="checkBoxes" style={{ display: show1 ? "block" : "none" }}>
                                                        <form action="#">
                                                            <p className="checkbox-title">Date Filter</p>
                                                            <div className="selectBox-cont selectBox-cont-one h-auto">
                                                                <div className="date-picker">
                                                                    <div className="form-custom cal-icon">
                                                                        <DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker" />
                                                                    </div>
                                                                </div>
                                                                <div className="date-picker pe-0">
                                                                    <div className="form-custom cal-icon">
                                                                        <DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker" />
                                                                    </div>
                                                                </div>
                                                                <div className="date-list">
                                                                    <ul>
                                                                        <li><Link to="#" className="btn date-btn">Today</Link ></li>
                                                                        <li><Link to="#" className="btn date-btn">Yesterday</Link ></li>
                                                                        <li><Link to="#" className="btn date-btn">Last 7 days</Link ></li>
                                                                        <li><Link to="#" className="btn date-btn">This month</Link ></li>
                                                                        <li><Link to="#" className="btn date-btn">Last month</Link ></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox" onClick={() => toggleSetShowtwo(!show2)}>
                                                        <p class="mb-0"><i class="fas fa-book-open me-1 select-icon"></i> Select Status</p>
                                                        <span class="down-icon"><i class="fas fa-chevron-down"></i></span>
                                                    </div>
                                                    <div id="checkBoxes" style={{ display: show2 ? "block" : "none" }}>
                                                        <form action="#">
                                                            <p className="checkbox-title">By Status</p>
                                                            <div className="selectBox-cont">
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" defaultChecked />
                                                                    <span className="checkmark"></span> All Invoices
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark"></span> Paid
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark"></span> Overdue
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark"></span> Draft
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark"></span> Recurring
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark"></span> Cancelled
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                            <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox" onClick={() => toggleSetShowthree(!show3)}>
                                                        <p class="mb-0"><i class="fas fa-bookmark me-1 select-icon"></i> By Category</p>
                                                        <span class="down-icon"><i class="fas fa-chevron-down"></i></span>
                                                    </div>
                                                    <div id="checkBoxes" style={{ display: show3 ? "block" : "none" }}>
                                                        <form action="#">
                                                            <p className="checkbox-title">Category</p>
                                                            <div className="form-custom">
                                                                <input type="text" className="form-control bg-grey" placeholder="Enter Category Name" />
                                                            </div>
                                                            <div className="selectBox-cont">
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark"></span> Advertising
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark"></span> Food
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark"></span> Marketing
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark"></span> Repairs
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark"></span> Software
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark"></span> Stationary
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark"></span> Travel
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn w-100 btn-primary">Apply</button>
                                                            <button type="reset" className="btn w-100 btn-grey">Reset</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="report-btn">
                                                    <Link to="#" className="btn">
                                                        <img src={invoicesicon5} alt="" className="me-2" /> Generate report
                                                    </Link >
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Report Filter */}
                        <div className="card invoices-tabs-card border-0">
                            <div className="card-body card-body pt-0 pb-0">
                                <div className="invoices-main-tabs">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8 col-md-8">
                                            <div className="invoices-tabs">
                                                <ul>
                                                    <li>
                                                        <Link to="/invoicelist" className="active">
                                                            All Invoice
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/invoicepaid">Paid</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/invoiceoverdue">Overdue</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/invoicedraft">Draft</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/invoicerecurring">Recurring</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/invoicecancelled">Cancelled</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="invoices-settings-btn">
                                                <Link
                                                    to="/invoicesetting"
                                                    className="invoices-settings-icon"
                                                >
                                                    <i className="feather feather-settings">
                                                        <FeatherIcon icon="settings" />
                                                    </i>
                                                </Link>
                                                <Link to="/addinvoice" className="btn">
                                                    <i className="feather feather-plus-circle" >
                                                        <FeatherIcon icon="plus-circle" />
                                                    </i> New Invoice
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card inovices-card">
                                    <div className="card-body">
                                        <div className="inovices-widget-header">
                                            <span className="inovices-widget-icon">
                                                <img src={invoicesicon1} alt="" />
                                            </span>
                                            <div className="inovices-dash-count">
                                                <div className="inovices-amount">$8,78,797</div>
                                            </div>
                                        </div>
                                        <p className="inovices-all">
                                            All Invoices <span>50</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card inovices-card">
                                    <div className="card-body">
                                        <div className="inovices-widget-header">
                                            <span className="inovices-widget-icon">
                                                <img src={invoicesicon2} alt="" />
                                            </span>
                                            <div className="inovices-dash-count">
                                                <div className="inovices-amount">$4,5884</div>
                                            </div>
                                        </div>
                                        <p className="inovices-all">
                                            Paid Invoices <span>60</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card inovices-card">
                                    <div className="card-body">
                                        <div className="inovices-widget-header">
                                            <span className="inovices-widget-icon">
                                                <img src={invoicesicon3} alt="" />
                                            </span>
                                            <div className="inovices-dash-count">
                                                <div className="inovices-amount">$2,05,545</div>
                                            </div>
                                        </div>
                                        <p className="inovices-all">
                                            Unpaid Invoices <span>70</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card inovices-card">
                                    <div className="card-body">
                                        <div className="inovices-widget-header">
                                            <span className="inovices-widget-icon">
                                                <img src={invoicesicon4} alt="" />
                                            </span>
                                            <div className="inovices-dash-count">
                                                <div className="inovices-amount">$8,8,797</div>
                                            </div>
                                        </div>
                                        <p className="inovices-all">
                                            Cancelled Invoices <span>80</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-table">
                                    <div className="card-body">
                                        <div className="table-responsive">

                                            <Table class="table table-stripped table-hover datatable"
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
                </div>

            </div>
            {/* /Main Wrapper */}

        </>
    )
}
export default InvoiceList
