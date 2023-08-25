import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
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
                  <h3 className="page-title">Breadcrumbs</h3>
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
            {/* Breadcrumbs */}
            <div className="col-md-12">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title">Basic</h5>
                  <p>
                    Use an ordered or unordered list with linked list items to
                    create a minimally styled breadcrumb. Use our utilities to
                    add additional styles as desired.
                  </p>
                  <div className="rounded border p-4">
                    <ol className="breadcrumb pre-breadcrumb text-muted mb-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Library</Link>
                      </li>
                      <li className="breadcrumb-item text-muted">Active</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title">Line Separator</h5>
                  <p>
                    Add <code>.breadcrumb-lineto</code> enable line separator
                    style for a breadcrumb.
                  </p>
                  <div className="rounded border p-4">
                    <ol className="breadcrumb pre-breadcrumb breadcrumb-line text-muted mb-0">
                      <li className="breadcrumb-item ">
                        <Link to="#">Home</Link>
                      </li>
                      <li className="breadcrumb-item ">
                        <Link to="#">Library</Link>
                      </li>
                      <li className="breadcrumb-item text-muted">Active</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title">Dot Separator</h5>
                  <p>
                    Add <code>.breadcrumb-dot</code> enable line separator style
                    for a breadcrumb.
                  </p>
                  <div className="rounded border p-4">
                    <ol className="breadcrumb pre-breadcrumb breadcrumb-dot text-muted mb-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Library</Link>
                      </li>
                      <li className="breadcrumb-item text-muted">Active</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title">Without Separator</h5>
                  <p>
                    Add <code>.breadcrumb-separatorless</code> to remove the
                    separator.
                  </p>
                  <div className="rounded border p-4">
                    <ol className="breadcrumb pre-breadcrumb breadcrumb-separatorless text-muted mb-0">
                      <li className="breadcrumb-item">
                        <Link to="#">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Library</Link>
                      </li>
                      <li className="breadcrumb-item text-muted">Active</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title">Colored Breadcrumb</h5>
                  <p>
                    use class <code> .breadcrumb-colored .bg-primary</code>
                  </p>
                  <ol className="breadcrumb breadcrumb-colored bg-primary">
                    <li className="breadcrumb-item">
                      <Link
                        to="#"
                        data-bs-original-title=""
                        title=""
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored bg-secondary">
                    <li className="breadcrumb-item">
                      <Link
                        to="#"
                        data-bs-original-title=""
                        title=""
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored bg-success">
                    <li className="breadcrumb-item">
                      <Link
                        to="#"
                        data-bs-original-title=""
                        title=""
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored bg-info">
                    <li className="breadcrumb-item">
                      <Link
                        to="#"
                        data-bs-original-title=""
                        title=""
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored bg-warning">
                    <li className="breadcrumb-item">
                      <Link
                        to="#"
                        data-bs-original-title=""
                        title=""
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored bg-danger">
                    <li className="breadcrumb-item">
                      <Link
                        to="#"
                        data-bs-original-title=""
                        title=""
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                  <ol className="breadcrumb breadcrumb-colored bg-dark mb-0">
                    <li className="breadcrumb-item">
                      <Link
                        to="#"
                        data-bs-original-title=""
                        title=""
                      >
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Library</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /Breadcrumbs */}
          </div>
        </div>

        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default BreadCrumbs;
