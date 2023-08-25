import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from 'antd';
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";

const UiTooltip = () => {
  const [Place, setPlace] = useState();
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <SideBar />

        {/* Page Wrapper */}
        <div className="page-wrapper cardhead">
          <div className="content ">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Tooltip</h3>
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
              {/* Tooltip */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Html Element</h5>
                  </div>
                  <div className="card-body">
                    <div className="popover-list">
                      <Tooltip placement="top" title={"Popover title"}>
                        <button
                          className="example-popover btn btn-primary me-1"
                          type="button"
                        >
                          Hover Me
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Tooltip */}
              {/* Popover */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Direction Tooltip</h5>
                  </div>
                  <div className="card-body">
                    <div className="tooltip-list">
                      {/* <button
                        type="button"
                        className="btn btn-primary me-1"
                        data-tip="tooltip on Top"
                        onMouseOver={() => setPlace("top")}
                        onMouseLeave={() => setPlace("")}
                      >
                        Tooltip on top
                        <Tooltip
                          place={Place}
                          type="dark"
                          effect="solid"
                        />
                      </button> */}
                      <Tooltip placement="top" title={"Tooltip on top"}>
                        <button
                          className="example-popover btn btn-primary me-1"
                          type="button"
                        >
                          Tooltip on top
                        </button>
                      </Tooltip>
                      {/* <button
                        type="button"
                        className="btn btn-primary me-1"
                        data-tip="Tooltip on right"
                        onMouseOver={() => setPlace("right")}
                        onMouseLeave={() => setPlace("")}
                      >
                        Tooltip on right
                      </button> */}

                      <Tooltip placement="right" title={"Tooltip on right"}>
                        <button
                          className="example-popover btn btn-primary me-1"
                          type="button"
                        >
                          Tooltip on right
                        </button>
                      </Tooltip>

                      {/* <button
                        type="button"
                        className="btn btn-primary me-1"
                        data-tip="Tooltip on bottom"
                        onMouseOver={() => setPlace("bottom")}
                        onMouseLeave={() => setPlace("")}
                      >
                        Tooltip on bottom
                      </button> */}

                      <Tooltip placement="bottom" title={"Tooltip on bottom"}>
                        <button
                          className="example-popover btn btn-primary me-1"
                          type="button"
                        >
                          Tooltip on bottom
                        </button>
                      </Tooltip>

                      {/* <button
                        type="button"
                        className="btn btn-primary me-1"
                        data-tip="Tooltip on left"
                        onMouseOver={() => setPlace("left")}
                        onMouseLeave={() => setPlace("")}
                      >
                        Tooltip on left
                      </button> */}

                      <Tooltip placement="left" title={"Tooltip on left"}>
                        <button
                          className="example-popover btn btn-primary me-1"
                          type="button"
                        >
                          Tooltip on left
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Popover */}
              {/* Tooltip */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Html Element</h5>
                  </div>
                  <div className="card-body">
                    <div className="popover-list">
                      {/* <button
                        type="button"
                        className="btn btn-primary me-1"
                        data-html={true}
                        data-tip="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                        onMouseOver={() => setPlace("top")}
                        onMouseLeave={() => setPlace("")}
                      >
                        Tooltip with HTML
                      </button> */}

                      <Tooltip placement="top" title={"Tooltip with HTML"} >
                        <button
                          className="example-popover btn btn-primary me-1"
                          type="button"
                        >
                          Tooltip with HTML
                        </button>
                      </Tooltip>

                      {/* <button
                        type="button"
                        className="btn btn-primary me-1"
                        data-html={true}
                        data-tip="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                        data-event="click"
                        onMouseOver={() => setPlace("bottom")}
                        onMouseLeave={() => setPlace("")}
                      >
                        Click Me
                      </button> */}

                      <Tooltip placement="top" title={"Click Me"} trigger="click">
                        <button
                          className="example-popover btn btn-primary me-1"
                          type="button"
                        >
                          Click Me
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Tooltip */}
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};
export default UiTooltip;
