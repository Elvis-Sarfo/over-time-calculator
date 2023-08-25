import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const Pagination = () => {
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
                  <h3 className="page-title">Pagination</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Components</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <section className="comp-section" id="comp_pagination">
              <h3 className="section-title">Pagination</h3>
              <div className="pagination-box">
                <div>
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <Link className="page-link" to="#" tabIndex={-1}>
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="pagination pagination-lg">
                    <li className="page-item disabled">
                      <Link className="page-link" to="#" tabIndex={-1}>
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="pagination pagination-sm">
                    <li className="page-item disabled">
                      <Link className="page-link" to="#" tabIndex={-1}>
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* /Pagination */}
          </div>
        </div>

        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Pagination;
