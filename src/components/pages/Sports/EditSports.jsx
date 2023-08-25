import React from 'react'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import { Link } from 'react-router-dom'


const EditSports = () => {
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
          <h3 className="page-title">Edit Sports</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/sports">Sports</Link>
            </li>
            <li className="breadcrumb-item active">Edit Sports</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-12">
                  <h5 className="form-title">
                    <span>Sports Information</span>
                  </h5>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-group local-forms">
                    <label>
                      Sports ID <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="PRE1534"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-group local-forms">
                    <label>
                      Sports Name <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Hockey"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-group local-forms">
                    <label>
                      Coach Name <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Joseph"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-group local-forms">
                    <label>
                      Started Year <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={2005}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="student-submit">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
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

export default EditSports
