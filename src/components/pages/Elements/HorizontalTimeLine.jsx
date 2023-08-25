import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const HorizontalTimeLine = () => {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  // Values should be only date
  const VALUES = [
    "16 Jan", 
    "28 Feb", 
    "20 Mar", 
    "20 May", 
    "09 Jul", 
    "30 Aug", 
    "15 Sep", 
    "01 Nov", 
    "10 Dec", 
    "29 Jan", 
    "3 Mar",
  ];

  // Description array corresponding to values
  const description = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
  ];
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
                  <h3 className="page-title">Horizontal Timeline</h3>
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
              {/* Timeline */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                        <div className="events-wrapper">
                          <div className="events horizontal-event">
                            <div
                              style={{
                                width: "80%",
                                height: "100px",
                                margin: "50px auto",
                              }}
                            >
                              <HorizontalTimeline
                                styles={{
                                  outline: "#dfdfdf",
                                  foreground: "#621aff",
                                }}
                                index={value}
                                indexClick={(index) => {
                                  setValue(index);
                                  setPrevious(value);
                                }}
                                values={VALUES}
                              />
                            </div>
                            <span className="filling-line" aria-hidden="true" />
                          </div>
                          {/* events */}
                        </div>                        
                      </div>
                      {/* timeline */}
                      <div className="events-content">
                        <div className="text-center horizontal-content">{description[value]}</div>
                      </div>
                      {/* .events-content */}
                    </div>
                  </div>
                </div>
              </div>
          {/* Footer */}
          <Footer />
          {/* /Footer */}
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default HorizontalTimeLine;


// import React, { useState } from 'react'
// import HorizontalTimeline from "react-horizontal-timeline";
// import Header from '../../Header/Header';
// import SideBar from '../../SideBar/SideBar';

// const Horizontaltimeline = () => {

//   const [menu, setMenu] = useState(false);

//   const toggleMobileMenu = () => {
//     setMenu(!menu);
//   };

//   const [value, setValue] = useState(0);
//   const [previous, setPrevious] = useState(0);



//   const VALUES = ["2022-01-16", "2022-02-28", "2022-03-20", "2022-05-20", "2022-07-09", "2021-08-30", "2022-11-01", "2022-12-21"];

 

//   const description = [
//     "Title01:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus. ",
//     "Title02:Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney illege in Virginia, looked up one of the more obscure Latin words",
//     "Title03: Dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus.",
//     "Title04: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney illege in Virginia, looked up one of the more obscure Latin words",
//     "Title05: Dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus.",
//     "Title01:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus. ",

//   ];


//   return (
//     <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
//       <Header  />

//       <SideBar />

//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="content-page-header">
//               <h5>Horizontal Timeline</h5>
//             </div>
//           </div>
//           {/* /Page Header */}
//           <div className="root-div card">
//             <div style={{
//               width: "60%",
//               height: "200px",
//               margin: "0 auto"
//             }}>
//               <HorizontalTimeline
//                 styles={{ outline: "#c8c1d4", foreground: "#621aff" }}
//                 index={value}
//                 indexClick={(index) => {
//                   setValue(index);
//                   setPrevious(value);
//                 }}
//                 values={VALUES}
//               />
//             </div>
//             <div className="mx-auto" style={{maxWidth:400, wordSpacing:5, fontSize:20}}>{description[value]}</div>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default Horizontaltimeline;