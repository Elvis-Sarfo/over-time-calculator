import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'

const TaxSetting = () => {
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
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h3 className="page-title">Invoice settings</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/admindashboard">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Tax Settings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="row">
                                <div className="col-xl-3 col-md-4">
                                    <div className="widget settings-menu">
                                        <ul>
                                            <li className="nav-item">
                                                <Link to="/invoicesetting" className="nav-link">
                                                    <i className="fe fe-git-commit">
                                                        <FeatherIcon icon="git-commit" />
                                                        </i> 
                                                        <span>General Settings</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/taxsetting" className="nav-link active">
                                                    <i className="fe fe-bookmark">
                                                        <FeatherIcon icon="bookmark" />
                                                        </i> 
                                                        <span>Tax Settings</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/banksetting" className="nav-link">
                                                    <i className="fas fa-university" /> <span>Bank Settings</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-md-8">
                                    <div className="card invoices-settings-card">
                                        <div className="card-header">
                                            <h5 className="card-title">Tax Settings</h5>
                                        </div>
                                        <div className="card-body">
                                            {/* Form */}
                                            <form action="#" className="invoices-settings-form">
                                                <div className="row align-items-center form-group">
                                                    <label
                                                        htmlFor="name"
                                                        className="col-sm-3 col-form-label input-label"
                                                    >
                                                        Enable Tax
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <label className="custom_check">
                                                            <input type="checkbox" name="invoice" />
                                                            <span className="checkmark" /> Check to enable tax on
                                                            invoice
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center form-group">
                                                    <label
                                                        htmlFor="email"
                                                        className="col-sm-3 col-form-label input-label"
                                                    >
                                                        Tax Percentage
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center form-group">
                                                    <label
                                                        htmlFor="phone"
                                                        className="col-sm-3 col-form-label input-label"
                                                    >
                                                        GSTIN Number
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="invoice-setting-btn text-end">
                                                    <button type="submit" className="btn cancel-btn me-2">
                                                        Cancel
                                                    </button>
                                                    <button type="submit" className="btn btn-primary-save-bg">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                            {/* /Form */}
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

export default TaxSetting
