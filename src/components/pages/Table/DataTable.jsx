import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../../Pagination";

const DataTables = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const datasource = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      startDate: "2011/04/25",
      salary: "$320,800",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      startDate: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      startDate: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      startDate: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      startDate: "2008/11/28",
      salary: "$162,700",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      startDate: "2012/12/02",
      salary: "$372,000",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      startDate: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      startDate: "2010/10/14",
      salary: "$327,900",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      startDate: "2009/09/15",
      salary: "$205,500",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      startDate: "2008/12/13",
      salary: "$103,600",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "30",
      startDate: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "22",
      startDate: "2013/03/03",
      salary: "$342,000",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "36",
      startDate: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "43",
      startDate: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: "19",
      startDate: "2010/03/17",
      salary: "$385,750",
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "66",
      startDate: "2012/11/27",
      salary: "$198,500",
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "64",
      startDate: "2010/06/09",
      salary: "$725,000",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59",
      startDate: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      startDate: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35",
      startDate: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: "30",
      startDate: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: "40",
      startDate: "2009/06/25",
      salary: "$675,000",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: "21",
      startDate: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      age: "23",
      startDate: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: "47",
      startDate: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      age: "42",
      startDate: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: "Jennifer Chang",
      position: "Regional Director",
      office: "Singapore",
      age: "28",
      startDate: "2010/11/14",
      salary: "$357,650",
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      age: "28",
      startDate: "2011/06/07",
      salary: "$206,850",
    },
    {
      name: "Fiona Green",
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: "48",
      startDate: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: "Shou Itou",
      position: "Regional Marketing",
      office: "Tokyo",
      age: "20",
      startDate: "2011/08/14",
      salary: "$163,000",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Position",
      dataIndex: "position",
      sorter: (a, b) => a.position.length - b.position.length,
    },
    {
      title: "Office",
      dataIndex: "office",
      sorter: (a, b) => a.office.length - b.office.length,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age.length - b.age.length,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a, b) => a.startDate.length - b.startDate.length,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
  ];

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <SideBar />
        {/*Page wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/*Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Data Tables</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Data Tables</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}

            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Default Datatable</h4>
                    <p className="card-text">
                      This is the most basic example of the datatables with zero
                      configuration. Use the <code>.datatable</code> className
                      to initialize datatables.
                    </p>
                  </div>
                  <div className="card-body">
                    <Table
                      pagination={{
                        total: datasource.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      columns={columns}
                      dataSource={datasource}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Page wrapper */}
      </div>
    </>
  );
};
export default DataTables;
