import React from 'react'
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import { Link } from 'react-router-dom';

const SocialSettings = () => {
  return (
    <div>
      
      <>
                <div className="main-wrapper">
                    {/* Header */}
                    <Header />
                    {/* Sidebar */}
                    <SideBar />
                    {/* Page Wrapper */}
                    <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="page-header">
      <div className="row">
        <div className="col">
          <h3 className="page-title">Settings</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/generalsettingsl">Settings</Link>
            </li>
            <li className="breadcrumb-item active">Social Settings</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        {/* Settings Menu */}
        <div className="settings-menu-links">
          <ul className="nav nav-tabs menu-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/generalsettings">
                General Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/localization">
                Localization
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/paymentsettings">
                Payment Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="emailsettings">
                Email Settings
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/socialsettings">
                Social Media Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sociallinks">
                Social Links
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/seo">
                SEO Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/othersettings">
                Others
              </Link>
            </li>
          </ul>
        </div>
        {/* Settings Menu */}
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Google Login Credential</h5>
                <div className="status-toggle d-flex justify-content-between align-items-center">
                  <input
                    type="checkbox"
                    id="status_1"
                    className="check"
                    defaultChecked="true"
                  />
                  <label htmlFor="status_1" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group form-placeholder">
                      <label>
                        Client ID <span className="star-red">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Client Secret <span className="star-red">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Facebook</h5>
                <div className="status-toggle d-flex justify-content-between align-items-center">
                  <input
                    type="checkbox"
                    id="status_2"
                    className="check"
                    defaultChecked="true"
                  />
                  <label htmlFor="status_2" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group form-placeholder">
                      <label>
                        App ID <span className="star-red">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        App Secret <span className="star-red">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Twiter Login Credential</h5>
                <div className="status-toggle d-flex justify-content-between align-items-center">
                  <input type="checkbox" id="status_3" className="check" />
                  <label htmlFor="status_3" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group form-placeholder">
                      <label>
                        Client ID <span className="star-red">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group form-placeholder">
                      <label>
                        Client Secret <span className="star-red">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Save
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
</div>

                    {/* /Page Wrapper */}
                </div>
                {/* /Main Wrapper */}
                
            </>

    </div>
  )
}

export default SocialSettings;
