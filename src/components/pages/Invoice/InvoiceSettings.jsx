import React from 'react'
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
import SideBar from '../../SideBar/SideBar'
import Header from '../../Header/Header';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const InvoiceSettings = () => {
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
                <div className="col">
                  <h3 className="page-title">Invoice settings</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">General Settings</li>
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
                      <Link to="/invoicesetting" className="nav-link active">
                        <i className="fe fe-git-commit">
                        <FeatherIcon icon="git-commit" />
                        </i>
                        <span>General Settings</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/taxsetting" className="nav-link">
                        <i className="fe fe-bookmark" >
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
                    <h5 className="card-title">General Settings</h5>
                  </div>
                  <div className="card-body">
                    {/* Form */}
                    <form action="#" className="invoices-settings-form">
                      <div className="row align-items-center form-group">
                        <label
                          htmlFor="name"
                          className="col-sm-3 col-form-label input-label"
                        >
                          Invoice Status
                        </label>
                        <div className="col-sm-9">
                          <label className="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span className="checkmark" /> Change invoice status to paid
                            after an order is complete
                          </label>
                        </div>
                      </div>
                      <div className="row align-items-center form-group">
                        <label
                          htmlFor="email"
                          className="col-sm-3 col-form-label input-label"
                        >
                          Invoice Amount
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
                          Invoice number starts with
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="$"
                            defaultValue="$"
                          />
                        </div>
                      </div>
                      <div className="row align-items-center form-group">
                        <label
                          htmlFor="addressline1"
                          className="col-sm-3 col-form-label input-label"
                        >
                          Prefix
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="row align-items-center form-group">
                        <label
                          htmlFor="addressline2"
                          className="col-sm-3 col-form-label input-label"
                        >
                          Number Reset
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="row align-items-center form-group">
                        <label
                          htmlFor="zipcode"
                          className="col-sm-3 col-form-label input-label"
                        >
                          Default Due Time
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="row align-items-center form-group ">
                        <label
                          htmlFor="zipcode"
                          className="col-sm-3 col-form-label input-label"
                        >
                          Default Digital Signatory
                        </label>
                        <div className="col-sm-9">
                          <div className="invoices-upload-btn">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              onchange="loadFile(event)"
                              className="hide-input"
                            />
                            <label htmlFor="file" className="upload">
                              upload File
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center form-group">
                        <label
                          htmlFor="zipcode"
                          className="col-sm-3 col-form-label input-label"
                        >
                          Default Digital Name
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

export default InvoiceSettings
