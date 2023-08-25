import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { avatar03, avatar04, avatar06, avatar08, avatar09, avatar10, avatar11, avatar12, invoicesicon5 } from '../../imagepath'

const InvoiceGrid = () => {
    return (
        <>
            <div className="main-wrapper">
                {/* Header */}
                <Header />
                {/* Sidebar */}
                <SideBar />
                {/* Page Wrapper */}
                <div class="page-wrapper">

                    <div class="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Invoice Grid</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admindashboard">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Invoice Grid</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Invoice Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col" />
                                <div className="col-auto">
                                    <Link to="/invoicelist" className="invoices-links">
                                        <FeatherIcon className="feather feather-list" icon="list" />
                                    </Link>
                                    <Link to="/invoicegrid" className="invoices-links active">
                                        <FeatherIcon className="feather feather-grid" icon="grid" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Report Filter */}

                        <div className="card report-card">
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="app-listing">
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox">
                                                        <p className="mb-0">
                                                            <i className="fas fa-user-plus me-1 select-icon" /> Select
                                                            User
                                                        </p>
                                                        <span className="down-icon">
                                                            <i className="fas fa-chevron-down" />
                                                        </span>
                                                    </div>
                                                    <div id="checkBoxes">
                                                        <form action="#">
                                                            <p className="checkbox-title">Customer Search</p>
                                                            <div className="form-custom">
                                                                <input
                                                                    type="text"
                                                                    className="form-control bg-grey"
                                                                    placeholder="Enter Customer Name"
                                                                />
                                                            </div>
                                                            <div className="selectBox-cont">
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark" /> Brian Johnson
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark" /> Russell Copeland
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark" /> Greg Lynch
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark" /> John Blair
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark" /> Barbara Moore
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark" /> Hendry Evan
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="username" />
                                                                    <span className="checkmark" /> Richard Miles
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn w-100 btn-primary">
                                                                Apply
                                                            </button>
                                                            <button type="reset" className="btn w-100 btn-grey">
                                                                Reset
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox">
                                                        <p className="mb-0">
                                                            <i className="fas fa-calendar me-1 select-icon" /> Select Date
                                                        </p>
                                                        <span className="down-icon">
                                                            <i className="fas fa-chevron-down" />
                                                        </span>
                                                    </div>
                                                    <div id="checkBoxes">
                                                        <form action="#">
                                                            <p className="checkbox-title">Date Filter</p>
                                                            <div className="selectBox-cont selectBox-cont-one h-auto">
                                                                <div className="date-picker">
                                                                    <div className="form-custom cal-icon">
                                                                        <input
                                                                            className="form-control datetimepicker"
                                                                            type="text"
                                                                            placeholder="Form"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="date-picker pe-0">
                                                                    <div className="form-custom cal-icon">
                                                                        <input
                                                                            className="form-control datetimepicker"
                                                                            type="text"
                                                                            placeholder="To"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="date-list">
                                                                    <ul>
                                                                        <li>
                                                                            <Link to="#" className="btn date-btn">
                                                                                Today
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="#" className="btn date-btn">
                                                                                Yesterday
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="#" className="btn date-btn">
                                                                                Last 7 days
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="#" className="btn date-btn">
                                                                                This month
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="#" className="btn date-btn">
                                                                                Last month
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox">
                                                        <p className="mb-0">
                                                            <i className="fas fa-book-open me-1 select-icon" /> Select
                                                            Status
                                                        </p>
                                                        <span className="down-icon">
                                                            <i className="fas fa-chevron-down" />
                                                        </span>
                                                    </div>
                                                    <div id="checkBoxes">
                                                        <form action="#">
                                                            <p className="checkbox-title">By Status</p>
                                                            <div className="selectBox-cont">
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" defaultChecked="" />
                                                                    <span className="checkmark" /> All Invoices
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark" /> Paid
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark" /> Overdue
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark" /> Draft
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark" /> Recurring
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="name" />
                                                                    <span className="checkmark" /> Cancelled
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn w-100 btn-primary">
                                                                Apply
                                                            </button>
                                                            <button type="reset" className="btn w-100 btn-grey">
                                                                Reset
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="multipleSelection">
                                                    <div className="selectBox">
                                                        <p className="mb-0">
                                                            <i className="fas fa-bookmark me-1 select-icon" /> By Category
                                                        </p>
                                                        <span className="down-icon">
                                                            <i className="fas fa-chevron-down" />
                                                        </span>
                                                    </div>
                                                    <div id="checkBoxes">
                                                        <form action="#">
                                                            <p className="checkbox-title">Category</p>
                                                            <div className="form-custom">
                                                                <input
                                                                    type="text"
                                                                    className="form-control bg-grey"
                                                                    placeholder="Enter Category Name"
                                                                />
                                                            </div>
                                                            <div className="selectBox-cont">
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark" /> Advertising
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark" /> Food
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark" /> Marketing
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark" /> Repairs
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark" /> Software
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark" /> Stationary
                                                                </label>
                                                                <label className="custom_check w-100">
                                                                    <input type="checkbox" name="category" />
                                                                    <span className="checkmark" /> Travel
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn w-100 btn-primary">
                                                                Apply
                                                            </button>
                                                            <button type="reset" className="btn w-100 btn-grey">
                                                                Reset
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="report-btn">
                                                    <Link to="#" className="btn">
                                                        <img
                                                            src={invoicesicon5}
                                                            alt=""
                                                            className="me-2"
                                                        />{" "}
                                                        Generate report
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <>
                            <div className="card invoices-tabs-card border-0">
                                <div className="card-body card-body pt-0 pb-0">
                                    <div className="invoices-main-tabs border-0 pb-0">
                                        <div className="row align-items-center">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="invoices-settings-btn invoices-settings-btn-one">
                                                    <Link
                                                        to="/invoicesettings"
                                                        className="invoices-settings-icon"
                                                    >
                                                        <FeatherIcon className="feather feather-settings" icon="settings" />
                                                    </Link>
                                                    <Link to="/addinvoice" className="btn">
                                                        <FeatherIcon className="feather feather-plus-circle" icon="plus-circle" /> New Invoice
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@09
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar04}
                                                        alt="User Image"
                                                    />{" "}
                                                    Barbara Moore
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$1,54,220</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">23 Mar, 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-success-dark">Paid</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@10
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar06}
                                                        alt="User Image"
                                                    />{" "}
                                                    Karlene Chaidez
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$1,222</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">18 Mar 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-danger-dark">Overdue</span>
                                                </div>
                                                <div className="col text-end">
                                                    <span className="text-danger text-sm">Overdue 14 days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@11
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar08}
                                                        alt="User Image"
                                                    />{" "}
                                                    Russell Copeland
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$3,470</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">10 Mar 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-secondary-dark">Cancelled</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@12
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar10}
                                                        alt="User Image"
                                                    />{" "}
                                                    Joseph Collins
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$8,265</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">30 Mar 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-primary-dark">Sent</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@13
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar11}
                                                        alt="User Image"
                                                    />{" "}
                                                    Jennifer Floyd
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$5,200</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">20 Mar 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-secondary-dark">Cancelled</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@14
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar09}
                                                        alt="User Image"
                                                    />{" "}
                                                    Leatha Bailey
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$480</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">15 Mar 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-primary-dark">Sent</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@15
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar12}
                                                        alt="User Image"
                                                    />{" "}
                                                    Alex Campbell
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$1,999</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">08 Mar 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-danger-dark">Overdue</span>
                                                </div>
                                                <div className="col text-end">
                                                    <span className="text-danger text-sm">Overdue 10 days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                                    <div className="card invoices-grid-card w-100">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <Link to="/viewinvoice" className="invoice-grid-link">
                                                IN093439#@016
                                            </Link>
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <h2 className="card-middle-avatar">
                                                <Link to="/profile">
                                                    <img
                                                        className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                                        src={avatar03}
                                                        alt="User Image"
                                                    />{" "}
                                                    Marie Canales
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <span>
                                                        <i className="far fa-money-bill-alt" /> Amount
                                                    </span>
                                                    <h6 className="mb-0">$2,700</h6>
                                                </div>
                                                <div className="col-auto">
                                                    <span>
                                                        <i className="far fa-calendar-alt" /> Due Date
                                                    </span>
                                                    <h6 className="mb-0">18 Mar, 2022</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="badge bg-success-dark">Paid</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="invoice-load-btn">
                                        <Link to="#" className="btn">
                                            <span className="spinner-border text-primary" /> Load more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
                {/* /Page Wrapper */}
            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default InvoiceGrid
