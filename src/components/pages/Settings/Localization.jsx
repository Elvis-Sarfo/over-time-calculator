import React,{useState}from 'react'
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import Select2 from 'react-select2-wrapper';
import { Link } from 'react-router-dom';
const Localization = () => {
  const [options, setOptions] = useState([
    { id: 1, text: '(UTC +5:30) Antarctica/Palmer' },
    { id: 2, text: '(UTC+05:30) India' },
    
]);
const [option, setOption] = useState([
  { id: 1, text: '15 May 2016' },
  { id: 2, text: '15/05/2016' },
  { id: 3, text: '15.05.2016' },
  { id: 4, text: '15-05-2016' },
  { id: 5, text: '05/15/2016' },
  { id: 6, text: '2016/05/15' },
  { id: 7, text: '2016-05-15' },
  
]);
const [timeformat, seTimeformat] = useState([
  { id: 1, text: '12 Hours' },
  { id: 2, text: '24 Hours' },
  { id: 3, text: '36 Hours' },
  { id: 4, text: '48 Hours' },
  { id: 5, text: '60 Hours' },  
]);

const [currency, setCurrency] = useState([
  { id: 1, text: '$' },
  { id: 2, text: '₹' },
  { id: 3, text: '£' },
  { id: 4, text: '€' }, 
]);
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
              <Link to="/generalsettings">Settings</Link>
            </li>
            <li className="breadcrumb-item active">Localization</li>
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
            <li className="nav-item active">
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
              <Link className="nav-link" to="/emailsettings">
                Email Settings
              </Link>
            </li>
            <li className="nav-item">
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
              <div className="card-header">
                <h5 className="card-title">Localization Details</h5>
              </div>
              <div className="card-body pt-0">
                <form>
                  <div className="settings-form">
                    <div className="form-group">
                      <label>Time Zone</label>
                      < Select2
                            className="select form-control"
                            data={options}
                            options={{
                                placeholder:'(UTC +5:30) Antarctica/Palmer'
                            }}
                      />
                      {/* <select className="select form-control">
                        <option selected="selected">
                          (UTC +5:30) Antarctica/Palmer
                        </option>
                        <option>(UTC+05:30) India</option>
                      </select> */}
                    </div>
                    <div className="form-group">
                      <label>Date Format</label>
                      < Select2
                            className="select form-control"
                            data={option}
                            options={{
                                placeholder:'15 May 2016'
                            }}
                      />
                      {/* <select className="select form-control">
                        <option selected="selected">15 May 2016</option>
                        <option>15/05/2016</option>
                        <option>15.05.2016</option>
                        <option>15-05-2016</option>
                        <option>05/15/2016</option>
                        <option>2016/05/15</option>
                        <option>2016-05-15</option>
                      </select> */}
                    </div>
                    <div className="form-group">
                      <label>Time Format</label>
                      {/* <select className="select form-control">
                        <option selected="selected">12 Hours</option>
                        <option>24 Hours</option>
                        <option>36 Hours</option>
                        <option>48 Hours</option>
                        <option>60 Hours</option>
                      </select> */}
                      < Select2
                            className="select form-control"
                            data={timeformat}
                            options={{
                                placeholder:'12 Hours'
                            }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Currency Symbol</label>
                      {/* <select className="select form-control">
                        <option selected="selected">$</option>
                        <option>₹</option>
                        <option>£</option>
                        <option>€</option>
                      </select> */}
                      < Select2
                            className="select form-control"
                            data={currency}
                            options={{
                                placeholder:'$'
                            }}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <div className="settings-btns">
                        <button type="submit" className="btn btn-orange">
                          Update
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

export default Localization;
   