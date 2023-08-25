import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts'
import ProgressBar from 'react-customizable-progressbar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FeatherIcon from "feather-icons-react";
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import { lessonicon01, lessonicon02, lessonicon03, lessonicon04, lessonicon05, lessonicon06, studenticon01, studenticon02, teachericon01, teachericon02 } from '../../imagepath'

const StudentsDashboard = () => {
    const [data, setObject] = useState( {	
		chart: {
			height: 350,	
			toolbar: {
				show: false
			  }
		  },
		  dataLabels: {
			enabled: false
		  },
		datasets: {
			id: 'apaxcharts-area'
		  },
		stroke: {
			curve: "smooth",
		},
		colors: ["#3D5EE1","#70C4CF"],		
		borderWidth: 3,
		labels: ['Jan', 'Feb', 'Mar','Apr','May','Jun', 'Jul'],		  		  
		})
		const [series, setSeries] = useState([
			{						
				name: 'Teachers',								
				data: [45, 60, 75, 51, 42, 42, 30]								
			}, 
			{
				name: 'Students',				
				data: [24, 48, 56, 32, 34, 52, 25]							
			  }			  
			])
            const [date, setDate] = useState(new Date());								
			const events = [
				{
					start: '2015-07-20',
					end: '2015-07-02',
					eventClasses: 'optionalEvent',
					title: 'test event',
					description: 'This is a test description of an event',
				},]
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
                                        <h3 className="page-title">Welcome Bruklin!</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/admindashboard">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Student</li>
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
                                                <h6>All Courses</h6>
                                                <h3>04/06</h3>
                                            </div>
                                            <div className="db-icon">
                                                <img
                                                    src={teachericon01}
                                                    alt="Dashboard Icon"
                                                />
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
                                                <h6>All Projects</h6>
                                                <h3>40/60</h3>
                                            </div>
                                            <div className="db-icon">
                                                <img
                                                    src={teachericon02}
                                                    alt="Dashboard Icon"
                                                />
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
                                                <h6>Test Attended</h6>
                                                <h3>30/50</h3>
                                            </div>
                                            <div className="db-icon">
                                                <img
                                                    src={studenticon01}
                                                    alt="Dashboard Icon"
                                                />
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
                                                <h6>Test Passed</h6>
                                                <h3>15/20</h3>
                                            </div>
                                            <div className="db-icon">
                                                <img
                                                    src={studenticon02}
                                                    alt="Dashboard Icon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Overview Section */}
                        {/* Student Dashboard */}
                        <div className="row">
                            <div className="col-12 col-lg-12 col-xl-8">
                                <div className="card flex-fill comman-shadow">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <h5 className="card-title">Today’s Lesson</h5>
                                            </div>
                                            <div className="col-6">
                                                <ul className="chart-list-out">
                                                    <li>
                                                        <span className="circle-blue" />
                                                        <span className="circle-gray" />
                                                        <span className="circle-gray" />
                                                    </li>
                                                    <li className="lesson-view-all">
                                                        <Link to="#">View All</Link>
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
                                    <div className="dash-circle">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 dash-widget1">
                                                <div className="circle-bar circle-bar2">
                                                <ProgressBar
														width={15}
														radius={40}
														progress={80}
														rotate={-180}
														strokeWidth={8}
														strokeColor="#6e6bfa"
														strokeLinecap="square"
														trackStrokeWidth={8}
														trackStrokeColor="#e6e6e6"
														trackStrokeLinecap="square"
														pointerRadius={0}
														initialAnimation={true}
														transition="1.5s ease 0.5s"
														trackTransition="0s ease"
													>													 
													<div className="circle-graph3" data-percent="50">												
														<b>80%</b>                                                                               														
														</div>					
													</ProgressBar>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                                <div className="dash-details">
                                                    <div className="lesson-activity">
                                                        <div className="lesson-imgs">
                                                            <img src={lessonicon01} alt="" />
                                                        </div>
                                                        <div className="views-lesson">
                                                            <h5>Class</h5>
                                                            <h4>Electrical Engg</h4>
                                                        </div>
                                                    </div>
                                                    <div className="lesson-activity">
                                                        <div className="lesson-imgs">
                                                            <img src={lessonicon02} alt="" />
                                                        </div>
                                                        <div className="views-lesson">
                                                            <h5>Lessons</h5>
                                                            <h4>5 Lessons</h4>
                                                        </div>
                                                    </div>
                                                    <div className="lesson-activity">
                                                        <div className="lesson-imgs">
                                                            <img src={lessonicon03} alt="" />
                                                        </div>
                                                        <div className="views-lesson">
                                                            <h5>Time</h5>
                                                            <h4>Lessons</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                                <div className="dash-details">
                                                    <div className="lesson-activity">
                                                        <div className="lesson-imgs">
                                                            <img src={lessonicon04} alt="" />
                                                        </div>
                                                        <div className="views-lesson">
                                                            <h5>Asignment</h5>
                                                            <h4>5 Asignment</h4>
                                                        </div>
                                                    </div>
                                                    <div className="lesson-activity">
                                                        <div className="lesson-imgs">
                                                            <img src={lessonicon05} alt="" />
                                                        </div>
                                                        <div className="views-lesson">
                                                            <h5>Staff</h5>
                                                            <h4>John Doe</h4>
                                                        </div>
                                                    </div>
                                                    <div className="lesson-activity">
                                                        <div className="lesson-imgs">
                                                            <img src={lessonicon06} alt="" />
                                                        </div>
                                                        <div className="views-lesson">
                                                            <h5>Lesson Learned</h5>
                                                            <h4>10/50</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 d-flex align-items-center justify-content-center">
                                                <div className="skip-group">
                                                    <button type="submit" className="btn btn-info skip-btn">
                                                        skip
                                                    </button>
                                                    <button type="submit" className="btn btn-info continue-btn">
                                                        Continue
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-12 col-xl-12 d-flex">
                                        <div className="card flex-fill comman-shadow">
                                            <div className="card-header">
                                                <div className="row align-items-center">
                                                    <div className="col-6">
                                                        <h5 className="card-title">Learning Activity</h5>
                                                    </div>                                                   
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div id="apexcharts-area" />
                                                <Chart options={data} series={series} type="line"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-xl-12 d-flex">
                                        <div className="card flex-fill comman-shadow">
                                            <div className="card-header d-flex align-items-center">
                                                <h5 className="card-title">Teaching History</h5>
                                                <ul className="chart-list-out student-ellips">
                                                    <li className="star-menus">
                                                        <Link to="#">
                                                            <i className="fas fa-ellipsis-v" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                                <div className="teaching-card">
                                                    <ul className="steps-history">
                                                        <li>Sep22</li>
                                                        <li>Sep23</li>
                                                        <li>Sep24</li>
                                                    </ul>
                                                    
                                                    <ul className="activity-feed">
                                                        <li className="feed-item d-flex align-items-center">
                                                            <div className="dolor-activity">
                                                                <span className="feed-text1">
                                                                    <Link>Mathematics</Link>
                                                                </span>
                                                                <ul className="teacher-date-list">
                                                                    <li>
                                                                        <i className="fas fa-calendar-alt me-2" />
                                                                        September 5, 2022
                                                                    </li>
                                                                    <li>|</li>
                                                                    <li>
                                                                        <i className="fas fa-clock me-2" />
                                                                        09:00 am - 10:00 am (60 Minutes)
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="activity-btns ms-auto">
                                                                <button type="submit" className="btn btn-info">
                                                                    In Progress
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <li className="feed-item d-flex align-items-center">
                                                            <div className="dolor-activity">
                                                                <span className="feed-text1">
                                                                    <Link>Geography </Link>
                                                                </span>
                                                                <ul className="teacher-date-list">
                                                                    <li>
                                                                        <i className="fas fa-calendar-alt me-2" />
                                                                        September 5, 2022
                                                                    </li>
                                                                    <li>|</li>
                                                                    <li>
                                                                        <i className="fas fa-clock me-2" />
                                                                        09:00 am - 10:00 am (60 Minutes)
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="activity-btns complete ms-auto">
                                                                <button type="submit" className="btn btn-info">
                                                                    Completed
                                                                </button>
                                                            </div>
                                                        </li>
                                                        <li className="feed-item d-flex align-items-center">
                                                            <div className="dolor-activity">
                                                                <span className="feed-text1">
                                                                    <Link>Botony</Link>
                                                                </span>
                                                                <ul className="teacher-date-list">
                                                                    <li>
                                                                        <i className="fas fa-calendar-alt me-2" />
                                                                        September 5, 2022
                                                                    </li>
                                                                    <li>|</li>
                                                                    <li>
                                                                        <i className="fas fa-clock me-2" />
                                                                        09:00 am - 10:00 am (60 Minutes)
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="activity-btns ms-auto">
                                                                <button type="submit" className="btn btn-info">
                                                                    In Progress
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-12 col-xl-4 d-flex">
                                <div className="card flex-fill comman-shadow">
                                    <div className="card-body">
                                        <div id="calendar-doctor" className="calendar-container" />
                                        <Calendar onChange={setDate} value={date} events={events}/>
                                        <div className="calendar-info calendar-info1">
                                            <div className="up-come-header">
                                                <h2>Upcoming Events</h2>
                                                <span>
                                                    <Link to="#">
                                                    <i className="feather-plus" >
                                                            <FeatherIcon icon="plus" />
                                                        </i>
                                                    </Link>
                                                </span>
                                            </div>
                                            <div className="upcome-event-date">
                                                <h3>10 Jan</h3>
                                                <span>
                                                    <i className="fas fa-ellipsis-h" />
                                                </span>
                                            </div>
                                            <div className="calendar-details">
                                                <p>08:00 am</p>
                                                <div className="calendar-box normal-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>Botony</h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>08:00 - 09:00 am</span>
                                                </div>
                                            </div>
                                            <div className="calendar-details">
                                                <p>09:00 am</p>
                                                <div className="calendar-box normal-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>Botony</h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>09:00 - 10:00 am</span>
                                                </div>
                                            </div>
                                            <div className="calendar-details">
                                                <p>10:00 am</p>
                                                <div className="calendar-box normal-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>Botony</h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>10:00 - 11:00 am</span>
                                                </div>
                                            </div>
                                            <div className="upcome-event-date">
                                                <h3>10 Jan</h3>
                                                <span>
                                                    <i className="fas fa-ellipsis-h" />
                                                </span>
                                            </div>
                                            <div className="calendar-details">
                                                <p>08:00 am</p>
                                                <div className="calendar-box normal-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>English</h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>08:00 - 09:00 am</span>
                                                </div>
                                            </div>
                                            <div className="calendar-details">
                                                <p>09:00 am</p>
                                                <div className="calendar-box normal-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>Mathematics </h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>09:00 - 10:00 am</span>
                                                </div>
                                            </div>
                                            <div className="calendar-details">
                                                <p>10:00 am</p>
                                                <div className="calendar-box normal-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>History</h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>10:00 - 11:00 am</span>
                                                </div>
                                            </div>
                                            <div className="calendar-details">
                                                <p>11:00 am</p>
                                                <div className="calendar-box break-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>Break</h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>11:00 - 12:00 am</span>
                                                </div>
                                            </div>
                                            <div className="calendar-details">
                                                <p>11:30 am</p>
                                                <div className="calendar-box normal-bg">
                                                    <div className="calandar-event-name">
                                                        <h4>History</h4>
                                                        <h5>Lorem ipsum sit amet</h5>
                                                    </div>
                                                    <span>11:30 - 12:00 am</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Student Dashboard */}
                    </div>
                    {/* Footer */}
                    <footer>
                        <p>Copyright © 2022 Dreamguys.</p>
                    </footer>
                    {/* /Footer */}
                </div>


            </div>
            {/* /Main Wrapper */}

        </>
    )
}

export default StudentsDashboard
