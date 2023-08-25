import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import {
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  awardicon01,
  awardicon02,
  awardicon03,
  awardicon04,
  dashicon01,
  dashicon02,
  dashicon03,
  dashicon04,
  socialicon01,
  socialicon02,
  socialicon03,
  socialicon04,
} from "../../imagepath";
import Footer from "../../Footer/Footer";

const AdminDashboard = () => {
  const [data, setObject] = useState({
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      fill: false,
    },
    dataLabels: {
      enabled: false,
    },
    datasets: {
      id: "apaxcharts-line",
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#3D5EE1", "#70C4CF"],
    borderWidth: 3,
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  });
  const [series, setSeries] = useState([
    {
      name: "Teachers",
      data: [45, 60, 75, 51, 42, 42, 30],
    },
    {
      name: "Students",
      data: [24, 48, 56, 32, 34, 52, 25],
    },
  ]);

  // Student Chart

  const [dataBar, object] = useState({
    colors: ["#3D5EE1", "#70C4CF"],
    chart: {
			type: 'bar',
			height: 350,
			width: '100%',
			stacked: false,
			toolbar: {
				show: false
			},
		},
		dataLabels: {
			enabled: false
		},
		plotOptions: {
			bar: {
        horizontal: false,
				columnWidth: '55%',
				endingShape: 'rounded',
        categoryGap: '30%',
			},
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		series: [{
			name: "Boys",
			color: '#70C4CF',
			data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551],
		}, {
			name: "Girls",
			color: '#3D5EE1',
			data: [336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456],
		}],
		// labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
		// xaxis: {
		// 	labels: {
		// 		show: false
		// 	},
		// 	axisBorder: {
		// 		show: false
		// 	},
		// 	axisTicks: {
		// 		show: false
		// 	},
		// },
		// yaxis: {
		// 	axisBorder: {
		// 		show: false
		// 	},
		// 	axisTicks: {
		// 		show: false
		// 	},
		// 	labels: {
		// 		style: {
		// 			colors: '#777'
		// 		}
		// 	}
		// },
		// title: {
		// 	text: '',
		// 	align: 'left',
		// 	style: {
		// 		fontSize: '18px'
		// 	}
		// },


    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#777'
          }
        }
      },
      title: {
        text: '',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      },
    },



    
  });


  const [studentchart] = useState([
    {
      name: "Boys",
      type: "column",
      data: [
        420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551, 563, 421,
        563, 254, 452,
      ],
    },
    {
      name: "Girls",
      type: "column",
      data: [
        336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456, 526, 652,
        325, 425, 436,
      ],
    },
  ]);

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
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Welcome Admin!</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/admindashboard">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Admin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Overview Section */}
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Students</h6>
                        <h3>50055</h3>
                      </div>
                      <div className="db-icon">
                        <img src={dashicon01} alt="Dashboard Icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Awards</h6>
                        <h3>50+</h3>
                      </div>
                      <div className="db-icon">
                        <img src={dashicon02} alt="Dashboard Icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Department</h6>
                        <h3>30+</h3>
                      </div>
                      <div className="db-icon">
                        <img src={dashicon03} alt="Dashboard Icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>Revenue</h6>
                        <h3>$505</h3>
                      </div>
                      <div className="db-icon">
                        <img src={dashicon04} alt="Dashboard Icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Overview Section */}
            <div className="row">
              <div className="col-md-12 col-lg-6">
                {/* Revenue Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h5 className="card-title">Overview</h5>
                      </div>
                      <div className="col-6">
                        <ul className="chart-list-out">
                          <li>
                            <span className="circle-blue" />
                            Teacher
                          </li>
                          <li>
                            <span className="circle-green" />
                            Student
                          </li>
                          <li className="star-menus">
                            <Link to="#">
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apexcharts-area"></div>
                    <Chart options={data} series={series} type="line" />
                  </div>
                </div>
                {/* /Revenue Chart */}
              </div>
              <div className="col-md-12 col-lg-6">
                {/* Student Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h5 className="card-title">Number of Students</h5>
                      </div>
                      <div className="col-6">
                        <ul className="chart-list-out">
                          <li>
                            <span className="circle-blue" />
                            Girls
                          </li>
                          <li>
                            <span className="circle-green" />
                            Boys
                          </li>
                          <li className="star-menus">
                            <Link to="#">
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apexcharts-area"></div>
                    <Chart
                      options={dataBar}
                      series={studentchart}
                      type="line"
                    />
                  </div>
                </div>

                {/* /Student Chart */}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 d-flex">
                {/* Star Students */}
                <div className="card flex-fill student-space comman-shadow">
                  <div className="card-header d-flex align-items-center">
                    <h5 className="card-title">Star Students</h5>
                    <ul className="chart-list-out student-ellips">
                      <li className="star-menus">
                        <Link to="#">
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table star-student table-hover table-center table-borderless table-striped">
                        <thead className="thead-light">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th className="text-center">Marks</th>
                            <th className="text-center">Percentage</th>
                            <th className="text-end">Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2209</div>
                            </td>
                            <td className="text-nowrap">
                              <Link to="/profile">
                                <img
                                  className="rounded-circle"
                                  src={avatar02}
                                  width={25}
                                  alt="Star Students"
                                />
                                John Smith
                              </Link>
                            </td>
                            <td className="text-center">1185</td>
                            <td className="text-center">98%</td>
                            <td className="text-end">
                              <div>2019</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE1245</div>
                            </td>
                            <td className="text-nowrap">
                              <Link to="/profile">
                                <img
                                  className="rounded-circle"
                                  src={avatar01}
                                  width={25}
                                  alt="Star Students"
                                />
                                Jolie Hoskins
                              </Link>
                            </td>
                            <td className="text-center">1195</td>
                            <td className="text-center">99.5%</td>
                            <td className="text-end">
                              <div>2018</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE1625</div>
                            </td>
                            <td className="text-nowrap">
                              <Link to="/profile">
                                <img
                                  className="rounded-circle"
                                  src={avatar03}
                                  width={25}
                                  alt="Star Students"
                                />
                                Pennington Joy
                              </Link>
                            </td>
                            <td className="text-center">1196</td>
                            <td className="text-center">99.6%</td>
                            <td className="text-end">
                              <div>2017</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2516</div>
                            </td>
                            <td className="text-nowrap">
                              <Link to="/profile">
                                <img
                                  className="rounded-circle"
                                  src={avatar04}
                                  width={25}
                                  alt="Star Students"
                                />
                                Millie Marsden
                              </Link>
                            </td>
                            <td className="text-center">1187</td>
                            <td className="text-center">98.2%</td>
                            <td className="text-end">
                              <div>2016</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2209</div>
                            </td>
                            <td className="text-nowrap">
                              <Link to="/profile">
                                <img
                                  className="rounded-circle"
                                  src={avatar05}
                                  width={25}
                                  alt="Star Students"
                                />
                                John Smith
                              </Link>
                            </td>
                            <td className="text-center">1185</td>
                            <td className="text-center">98%</td>
                            <td className="text-end">
                              <div>2015</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /Star Students */}
              </div>
              <div className="col-xl-6 d-flex">
                {/* Feed Activity */}
                <div className="card flex-fill comman-shadow">
                  <div className="card-header d-flex align-items-center">
                    <h5 className="card-title ">Student Activity </h5>
                    <ul className="chart-list-out student-ellips">
                      <li className="star-menus">
                        <Link to="#">
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="activity-groups">
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon01} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>1st place in "Chess”</h4>
                          <h5>John Doe won 1st place in "Chess"</h5>
                        </div>
                        <div className="award-time-list">
                          <span>1 Day ago</span>
                        </div>
                      </div>
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon02} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Participated in "Carrom"</h4>
                          <h5>Justin Lee participated in "Carrom"</h5>
                        </div>
                        <div className="award-time-list">
                          <span>2 hours ago</span>
                        </div>
                      </div>
                      <div className="activity-awards">
                        <div className="award-boxs">
                          <img src={awardicon03} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Internation conference in "St.John School"</h4>
                          <h5>
                            Justin Leeattended internation conference in
                            "St.John School"
                          </h5>
                        </div>
                        <div className="award-time-list">
                          <span>2 Week ago</span>
                        </div>
                      </div>
                      <div className="activity-awards mb-0">
                        <div className="award-boxs">
                          <img src={awardicon04} alt="Award" />
                        </div>
                        <div className="award-list-outs">
                          <h4>Won 1st place in "Chess"</h4>
                          <h5>John Doe won 1st place in "Chess"</h5>
                        </div>
                        <div className="award-time-list">
                          <span>3 Day ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Feed Activity */}
              </div>
            </div>
            {/* Socail Media Follows */}
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill fb sm-box">
                  <div className="social-likes">
                    <p>Like us on facebook</p>
                    <h6>50,095</h6>
                  </div>
                  <div className="social-boxs">
                    <img src={socialicon01} alt="Social Icon" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill twitter sm-box">
                  <div className="social-likes">
                    <p>Follow us on twitter</p>
                    <h6>48,596</h6>
                  </div>
                  <div className="social-boxs">
                    <img src={socialicon02} alt="Social Icon" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill insta sm-box">
                  <div className="social-likes">
                    <p>Follow us on instagram</p>
                    <h6>52,085</h6>
                  </div>
                  <div className="social-boxs">
                    <img src={socialicon03} alt="Social Icon" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill linkedin sm-box">
                  <div className="social-likes">
                    <p>Follow us on linkedin</p>
                    <h6>69,050</h6>
                  </div>
                  <div className="social-boxs">
                    <img src={socialicon04} alt="Social Icon" />
                  </div>
                </div>
              </div>
            </div>
            {/* /Socail Media Follows */}
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default AdminDashboard;
