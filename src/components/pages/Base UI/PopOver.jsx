import React, { useState } from 'react'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import { Link } from 'react-router-dom'
const Popover = () => {
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

  return (
    <div className="main-wrapper">

    <Header onMenuClick={(value) => toggleMobileMenu()} />
    <SideBar />
    <div className="page-wrapper">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">PopOver</h3>
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
      {/* Popover */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Basic Popover</h5>
          </div>
          <div className="card-body card-buttons">
            <div className="popover-list">
              <button
                className="btn btn-primary me-1"
                type="button"
                data-bs-toggle="popover"
                title="Popover title"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
              >
                Click to toggle popover
              </button>
              <Link
                className="example-popover btn btn-primary me-1"
                tabIndex={0}
                role="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                title="Popover title"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
              >
                Dismissible popover
              </Link>
              <button
                className="example-popover btn btn-primary me-1"
                type="button"
                data-bs-trigger="hover"
                data-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                title="Popover title"
                data-offset="-20px -20px"
                data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                On Hover Tooltip
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Popover */}
      {/* Popover */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Direction Popover</h5>
          </div>
          <div className="card-body card-buttons">
            <div className="popover-list">
              <button
                className="example-popover btn btn-primary me-1"
                type="button"
                data-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                title="Popover title"
                data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popover on top
              </button>
              <button
                className="example-popover btn btn-primary me-1"
                type="button"
                data-container="body"
                data-bs-toggle="popover"
                data-bs-placement="right"
                data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popover on right
              </button>
              <button
                className="example-popover btn btn-primary me-1"
                type="button"
                data-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popover on bottom
              </button>
              <button
                className="example-popover btn btn-primary me-1"
                type="button"
                data-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                Popover on left
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Popover */}
    </div>
  </div>
</div>
</div>
  )
}

export default Popover