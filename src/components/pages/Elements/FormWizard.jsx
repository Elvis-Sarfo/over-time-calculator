import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../../../assets/plugins/twitter-bootstrap-wizard/form-wizard.css"
import "../../../assets/plugins/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"
import "../../../assets/plugins/twitter-bootstrap-wizard/prettify.js"
import "../../../assets/plugins/twitter-bootstrap-wizard/form-wizard.js"
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';


const setProgresBarWidth = (val) => {
  if (val === 'progress-seller-details') {
    return '33.3333%'
  } else if (val === 'progress-company-document') {
    return '66.6667%'
  } else if (val === 'progress-bank-detail') {
    return '100%'
  }
}

const Formwizard = () => {
  const [str, setStr] = useState("seller-details");
  const [str1, setStr1] = useState("progress-seller-details");

  useEffect(() => {
    var element = document.getElementById("progress-bar");
    element.style.width = "33.3333%";
  }, [])

  return (

    <>
    <div className="main-wrapper">
        {/* Header */}
        <Header />
        
        {/* Sidebar */}
        <SideBar />

        {/* Page Wrapper */}
      <div className="page-wrapper">       
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Form Wizard</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Components</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* /Page Header */}
          <div className="row">
            {/* Lightbox */}
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Wizard</h4>
                </div>
                <div className="card-body">
                  <div id="basic-pills-wizard" className="twitter-bs-wizard">
                    <ul className="twitter-bs-wizard-nav">
                      <li className="nav-item">
                        <Link
                          to="#seller-details"
                          className={`nav-link ${str === 'seller-details' ? 'active' : ''}`}
                          // className="nav-link"
                          data-bs-toggle="tab"
                        >
                          <div
                            className="step-icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Seller Details"
                          >
                            <i className="fa fa-user" />
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="#company-document"
                          className={`nav-link ${str === 'company-document' ? 'active' : ''}`}
                          // className="nav-link"
                          data-bs-toggle="tab"
                        >
                          <div
                            className="step-icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Company Document"
                          >
                            <i className="fa fa-map-pin" />
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="#bank-detail"
                          className={`nav-link ${str === 'bank-detail' ? 'active' : ''}`}
                          // className="nav-link"
                          data-bs-toggle="tab"
                        >
                          <div
                            className="step-icon"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Bank Details"
                          >
                            <i className="fa fa-credit-card" />
                          </div>
                        </Link>
                      </li>
                    </ul>
                    {/* wizard-nav */}
                    <div className="tab-content twitter-bs-wizard-tab-content">
                      <div style={{ display: str == 'seller-details' ? 'block' : 'none' }} className="tab-pane" id="seller-details">
                        <div className="mb-4">
                          <h5>Enter Your Personal Details</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-firstname-input"
                                  className="form-label"
                                >
                                  First name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-lastname-input"
                                  className="form-label"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-lastname-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="form-label"
                                >
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-phoneno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-email-input"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="basicpill-email-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <ul className="pager wizard twitter-bs-wizard-pager-link">
                          <li className="next">
                            <button className="btn btn-primary" onClick={() => setStr('company-document')}>
                              Next <i className="bx bx-chevron-right ms-1" />
                            </button>
                          </li>
                        </ul>
                      </div>
                      {/* tab pane */}
                      <div className="tab-pane" style={{ display: str == 'company-document' ? 'block' : 'none' }} id="company-document">
                        <div>
                          <div className="mb-4">
                            <h5>Enter Your Address</h5>
                          </div>
                          <form>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-pancard-input"
                                    className="form-label"
                                  >
                                    Address 1
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-pancard-input"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-vatno-input"
                                    className="form-label"
                                  >
                                    Address 2
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-vatno-input"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-cstno-input"
                                    className="form-label"
                                  >
                                    Landmark
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-cstno-input"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-servicetax-input"
                                    className="form-label"
                                  >
                                    Town
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-servicetax-input"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                          <ul className="pager wizard twitter-bs-wizard-pager-link">
                            <li className="previous">
                              <button
                                onClick={() => setStr('seller-details')}
                                className="btn btn-primary"
                              >
                                <i className="bx bx-chevron-left me-1" /> Previous
                              </button>
                            </li>
                            <li className="next">
                              <button
                                onClick={() => setStr('bank-detail')}
                                className="btn btn-primary"
                              >
                                Next <i className="bx bx-chevron-right ms-1" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* tab pane */}
                      <div className="tab-pane" id="bank-detail" style={{ display: str == 'bank-detail' ? 'block' : 'none' }}>
                        <div>
                          <div className="mb-4">
                            <h5>Payment Details</h5>
                          </div>
                          <form>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-namecard-input"
                                    className="form-label"
                                  >
                                    Name on Card
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Credit Card Type
                                  </label>
                                  <select className="form-select">
                                    <option selected="">Select Card Type</option>
                                    <option defaultValue="AE">American Express</option>
                                    <option defaultValue="VI">Visa</option>
                                    <option defaultValue="MC">MasterCard</option>
                                    <option defaultValue="DI">Discover</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-cardno-input"
                                    className="form-label"
                                  >
                                    Credit Card Number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-cardno-input"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-card-verification-input"
                                    className="form-label"
                                  >
                                    Card Verification Number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-card-verification-input"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="basicpill-expiration-input"
                                    className="form-label"
                                  >
                                    Expiration Date
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-expiration-input"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                          <ul className="pager wizard twitter-bs-wizard-pager-link">
                            <li className="previous">
                              <button
                                onClick={() => setStr('company-document')}
                                className="btn btn-primary"
                              >
                                <i className="bx bx-chevron-left me-1" /> Previous
                              </button>
                            </li>
                            <li className="float-end">
                              <Link
                                to="#"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target=".confirmModal"
                              >
                                Save Changes
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* tab pane */}
                    </div>
                    {/* end tab content */}
                  </div>
                </div>
                {/* end card body */}
              </div>
            </div>
            {/* /Wizard */}
            {/* Wizard */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Wizard with Progressbar</h4>
                  </div>
                  <div className="card-body">
                    <div id="progrss-wizard" className="twitter-bs-wizard">
                      <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                        <li className="nav-item">
                          <Link
                            onClick={() => setStr1('progress-seller-details')}
                            to="#progress-seller-details"
                            className={`nav-link ${str1 === 'progress-seller-details' ? 'active' : ''}`}
                            // className="nav-link"
                            data-bs-toggle="tab"
                          >
                            <div
                              className="step-icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="User Details"
                            >
                              <i className="fa fa-user" />
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            onClick={() => setStr1('progress-company-document')}
                            to="#progress-company-document"
                            className={`nav-link ${str1 === 'progress-company-document' ? 'active' : ''}`}
                            // className="nav-link"
                            data-bs-toggle="tab"
                          >
                            <div
                              className="step-icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Address Detail"
                            >
                              <i className="fa fa-map-pin" />
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            onClick={() => setStr1('progress-bank-detail')}

                            to="#progress-bank-detail"
                            className={`nav-link ${str1 === 'progress-bank-detail' ? 'active' : ''}`}
                            // className="nav-link"
                            data-bs-toggle="tab"
                          >
                            <div
                              className="step-icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Payment Details"
                            >
                              <i className="fa fa-credit-card" />
                            </div>
                          </Link>
                        </li>
                      </ul>
                      {/* wizard-nav */}
                      <div id="bar" className="progress mt-4">
                        <div id="progress-bar" style={{ width: setProgresBarWidth(str1) }}
                          className="progress-bar bg-success progress-bar-striped progress-bar-animated" />
                      </div>
                      <div className="tab-content twitter-bs-wizard-tab-content">
                        <div style={{ display: str1 == 'progress-seller-details' ? 'block' : 'none' }} className="tab-pane" id="progress-seller-details">
                          <div className="mb-4">
                            <h5>User Details</h5>
                          </div>
                          <form>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label htmlFor="progresspill-firstname-input">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="progresspill-firstname-input"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label htmlFor="progresspill-lastname-input">
                                    Last name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="progresspill-lastname-input"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label htmlFor="progresspill-phoneno-input">
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="progresspill-phoneno-input"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label htmlFor="progresspill-email-input">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="progresspill-email-input"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                          <ul className="pager wizard twitter-bs-wizard-pager-link">
                            <li className="next">
                              <button
                                onClick={() => setStr1('progress-company-document')}
                                className="btn btn-primary"
                              >
                                Next <i className="bx bx-chevron-right ms-1" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane" id="progress-company-document" style={{ display: str1 == 'progress-company-document' ? 'block' : 'none' }} >
                          <div>
                            <div className="mb-4">
                              <h5>Location Details</h5>
                            </div>
                            <form>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-pancard-input"
                                      className="form-label"
                                    >
                                      Address Line 1
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-pancard-input"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-vatno-input"
                                      className="form-label"
                                    >
                                      Address Line 2
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-vatno-input"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-cstno-input"
                                      className="form-label"
                                    >
                                      Landmark
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-cstno-input"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-servicetax-input"
                                      className="form-label"
                                    >
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-servicetax-input"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-companyuin-input"
                                      className="form-label"
                                    >
                                      State
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-companyuin-input"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-declaration-input"
                                      className="form-label"
                                    >
                                      Country
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-declaration-input"
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                              <li className="previous">
                                <button
                                  onClick={() => {
                                    setStr1('progress-seller-details')
                                  }}
                                  className="btn btn-primary"
                                >
                                  <i className="bx bx-chevron-left me-1" /> Previous
                                </button>
                              </li>
                              <li className="next">
                                <button
                                  onClick={() => {
                                    setStr1('progress-bank-detail')
                                  }}
                                  className="btn btn-primary"
                                >
                                  Next <i className="bx bx-chevron-right ms-1" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tab-pane" id="progress-bank-detail" style={{ display: str1 == 'progress-bank-detail' ? 'block' : 'none' }}>
                          <div>
                            <div className="mb-4">
                              <h5>Payment Details</h5>
                            </div>
                            <form>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-namecard-input"
                                      className="form-label"
                                    >
                                      Name on Card
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-namecard-input"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Credit Card Type
                                    </label>
                                    <select className="form-select">
                                      <option selected="">Select Card Type</option>
                                      <option defaultValue="AE">American Express</option>
                                      <option defaultValue="VI">Visa</option>
                                      <option defaultValue="MC">MasterCard</option>
                                      <option defaultValue="DI">Discover</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-cardno-input"
                                      className="form-label"
                                    >
                                      Credit Card Number
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-cardno-input"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-card-verification-input"
                                      className="form-label"
                                    >
                                      Card Verification Number
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-card-verification-input"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="progresspill-expiration-input"
                                      className="form-label"
                                    >
                                      Expiration Date
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="progresspill-expiration-input"
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                              <li className="previous">
                                <button
                                  onClick={() => setStr1('progress-company-document')}
                                  className="btn btn-primary"

                                >
                                  <i className="bx bx-chevron-left me-1" /> Previous
                                </button>
                              </li>
                              <li className="float-end">
                                <Link
                                  to="#"
                                  className="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-bs-target=".confirmModal"
                                >
                                  Save Changes
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
            {/* /Wizard */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      <div className="modal fade confirmModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="text-center">
                <h5 className="mb-3">Confirm Save Changes</h5>
                <button
                  type="button"
                  className="btn btn-dark w-md me-1"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary w-md me-1"
                  data-bs-dismiss="modal"

                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        
    </div>
    {/* /Main Wrapper */}
    
</>
  )
};
export default Formwizard;        