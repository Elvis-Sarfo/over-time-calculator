import React from 'react';
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import { Link } from 'react-router-dom';


const BlankPage = () => {
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
                                  <h3 className="page-title">Blank Page</h3>
                                  <ul className="breadcrumb">
                                      <li className="breadcrumb-item">
                                          <Link to="/admindashboard">Dashboard</Link>
                                      </li>
                                      <li className="breadcrumb-item active">Blank Page</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      {/* /Page Header */}
                      <div className="row">
                          <div className="col-sm-12">Contents here</div>
                      </div>
                  </div>
              </div>
        
        {/* /Page Wrapper */}
    </div>
    {/* /Main Wrapper */}
    
</>

  )
}

export default BlankPage
