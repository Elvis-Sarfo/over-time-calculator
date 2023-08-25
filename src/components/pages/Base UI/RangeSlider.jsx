import React from 'react'
import Header from '../../Header/Header'
import SideBar from '../../SideBar/SideBar'
import IonRangeSlider from 'react-ion-slider'
import { Link } from 'react-router-dom'

const RangeSlider = () => {
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
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Range Slider</h3>
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
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Default</h5>
                </div>
                <div className="card-body">
                  <IonRangeSlider min={0} max={100} from={0} to={50} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Min-Max</h5>
                </div>
                <div className="card-body">
                  <IonRangeSlider min={0} max={1000} from={550} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Prefix</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={0} max={1000} from={200} to={800} step={2} values={[]} keyboard={1} prefix={"$"} />
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Range</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={-1000} max={1000} from={-500} to={500} step={2} values={[]} keyboard={1} grid={true}/>

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Step</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={-1000} max={1000} from={-500} to={500} step={1} values={[]} keyboard={1} grid={true} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Custom Values</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={-1000} max={1000} from={-500} to={500} step={2} grid={true} values={["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]} keyboard={1} />


                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Modern skin</h5>
                </div>
                <div className="card-body">
                
                <IonRangeSlider skin={"modern"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Sharp Skin</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider skin={"sharp"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Round skin</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider skin={"round"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Square Skin</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider skin={"square"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
          </div>
        </div>
      </div>

    </div>
    {/* /Main Wrapper */}
    
</>
    
  )
}

export default RangeSlider
