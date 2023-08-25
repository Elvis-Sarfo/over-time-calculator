import React from "react";
import { Link } from "react-router-dom";import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { avatar02, avatar03, avatar04,} from "../../imagepath";

const Tableavatar = () => {
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
                  <h3 className="page-title">Avatar</h3>
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
            {/* Avatar */}
            <div className="row">
              <div className="col-md-12">
                <div className="card bg-white">
                  <div className="card-header">
                    <h5 className="card-title">Sizing</h5>
                  </div>
                  <div className="card-body">
                    <div className="avatar avatar-xxl">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar avatar-xl">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar avatar-lg">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar avatar-xs">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card bg-white">
                  <div className="card-header">
                    <h5 className="card-title">Avatar With Status</h5>
                  </div>
                  <div className="card-body">
                    <div className="avatar avatar-online">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar avatar-offline">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar avatar-away">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card bg-white">
                  <div className="card-header">
                    <h5 className="card-title">Shape</h5>
                  </div>
                  <div className="card-body">
                    <div className="avatar">
                      <img
                        className="avatar-img rounded"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src={avatar02}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card bg-white">
                  <div className="card-header">
                    <h5 className="card-title">Group</h5>
                  </div>
                  <div className="card-body">
                    <div className="avatar-group">
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle border border-white"
                          alt="User Image"
                          src={avatar02}
                        />
                      </div>
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle border border-white"
                          alt="User Image"
                          src={avatar03}
                        />
                      </div>
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle border border-white"
                          alt="User Image"
                          src={avatar04}
                        />
                      </div>
                      <div className="avatar">
                        <span className="avatar-title rounded-circle border border-white">
                          CF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Avatar */}
          </div>
          {/* Footer */}
          <footer>
            <p>Copyright © 2022 Dreamguys.</p>
          </footer>
          {/* /Footer */}
        </div>

        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Tableavatar;
