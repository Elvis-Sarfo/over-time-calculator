import React from "react";
import {Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';


import Login from "./components/pages/Authentication";
import config from 'config';
import BlogView from "./components/pages/Blog/BlogView";
import PendingBlog from "./components/pages/Blog/PendingBlog";
import AddBlog from "./components/pages/Blog/AddBlog";
import EditBlog from "./components/pages/Blog/EditBlog";
import BlankPage from "./components/pages/Blank/BlankPage";
import BasicTable from "./components/pages/Table/BasicTable";
import DataTable from "./components/pages/Table/DataTable";
import Students from "./components/pages/Students/StudentsList";
import InvoiceGrid from "./components/pages/Invoice/InvoiceGrid";
import AddInvoice from "./components/pages/Invoice/AddInvoice";
import EditInvoice from "./components/pages/Invoice/EditInvoice";
import ViewInvoice from "./components/pages/Invoice/ViewInvoice";
import InvoiceSettings from "./components/pages/Invoice/InvoiceSettings";
import InvoiceList from "./components/pages/Invoice/InvoiceList";
import Register from "./components/pages/Authentication/Register";
import ForgotPassword from "./components/pages/Authentication/ForgotPassword";
import AdminDashboard from "./components/pages/Dashboard/AdminDashboard";
import Blogdetails from "./components/pages/Blog/Blogdetails";
import Profile from "./components/pages/Blog/Profile";
import TaxSetting from "./components/pages/Invoice/TaxSetting";
import BankSetting from "./components/pages/Invoice/BankSetting";
import Inbox from "./components/Header/Inbox ";
import Compose from "./components/Header/Compose";
import StudentsDashboard from "./components/pages/Dashboard/StudentsDashboard";
import TeacherDashboard from "./components/pages/Dashboard/TeacherDashboard";
import StudentsView from "./components/pages/Students/StudentsView";
import AddStudent from "./components/pages/Students/AddStudent";
import EditStudent from "./components/pages/Students/EditStudent";
import StudentGrid from "./components/pages/Students/StudentGrid";
import InvoicePaid from "./components/pages/Invoice/InvoicePaid";
import InvoiceOverdue from "./components/pages/Invoice/InvoiceOverdue";
import InvoiceDraft from "./components/pages/Invoice/InvoiceDraft";
import InvoiceRecurring from "./components/pages/Invoice/InvoiceRecurring";
import InvoiceCancelled from "./components/pages/Invoice/InvoiceCancelled";
import TeachersList from "./components/pages/Teachers/Teacherslist";
import TeachersProfile from "./components/pages/Teachers/TeachersProfile";
import TeachersAdd from "./components/pages/Teachers/TeachersAdd";
import TeachersEdit from "./components/pages/Teachers/TeachersEdit";
import TeachersGrid from "./components/pages/Teachers/TeachersGrid";
import DepartmentList from "./components/pages/Department/DepartmentList";
import AddDepartment from "./components/pages/Department/AddDepartment";
import EditDepartment from "./components/pages/Department/EditDepartment";
import SubjectList from "./components/pages/Subject/SubjectList";
import AddSubject from "./components/pages/Subject/AddSubject";
import EditSubject from "./components/pages/Subject/EditSubject";
// Settings
import GendralSettings from "./components/pages/Settings/GendralSettings";
import Localization from "./components/pages/Settings/Localization";
import PaymentSettings from "./components/pages/Settings/PaymentSettings";
import EmailSettings from "./components/pages/Settings/EmailSettings";
import SocialSettings from "./components/pages/Settings/SocialSettings";
import SocialLinks from "./components/pages/Settings/SocialLinks";
import Seo from "./components/pages/Settings/Seo";
import OtherSettings from "./components/pages/Settings/OtherSettings";
//Library
import LibraryList from "./components/pages/Library/LibraryList";
import AddBook from "./components/pages/Library/AddBook";
import FeesCollection from "./components/pages/Accounts/FeesCollection";
import Expenses from "./components/pages/Accounts/Expenses";
import Salary from "./components/pages/Accounts/Salary";
import AddFeesCollection from "./components/pages/Accounts/AddFeesCollection";
import AddExpenses from "./components/pages/Accounts/AddExpenses";
import AddSalary from "./components/pages/Accounts/AddSalary";
import Holiday from "./components/pages/Holiday/Holiday";
import AddHoliday from "./components/pages/Holiday/AddHoliday";
import Fees from "./components/pages/Fees/Fees";
import AddFees from "./components/pages/Fees/AddFees";
import EditFees from "./components/pages/Fees/EditFees";
import Exam from "./components/pages/Exam List/Exam";
import AddExam from "./components/pages/Exam List/AddExam";
import EditExam from "./components/pages/Exam List/EditExam";
import TimeTable from "./components/pages/Time Table/TimeTable";
import AddTimeTable from "./components/pages/Time Table/AddTimeTable";
import EditTimeTable from "./components/pages/Time Table/EditTimeTable";
import EditBook from "./components/pages/Library/EditBook";
import Sports from "./components/pages/Sports/Sports";
import AddSports from "./components/pages/Sports/AddSports";
import EditSports from "./components/pages/Sports/EditSports";
import Hostel from "./components/pages/Hostel/Hostel";
import AddHostel from "./components/pages/Hostel/AddHostel";
import EditHostel from "./components/pages/Hostel/EditHostel";
import Transport from "./components/pages/Transports/Transport";
import AddTransport from "./components/pages/Transports/AddTransport";
import EditTransport from "./components/pages/Transports/EditTransport";
import Event from "./components/pages/Events/Event";
import AddEvent from "./components/pages/Events/AddEvent";
import BasicTables from "./components/pages/Table/BasicTable";
import DataTables from "./components/pages/Table/DataTable";
import BasicInputs from "./components/pages/Forms/BasicInputs";
import FormInputGroups from "./components/pages/Forms/FormInputGroups";
import FormMask from "./components/pages/Forms/FormMask";
import FormValidation from "./components/pages/Forms/FormValidation";
import HorizontalForm from "./components/pages/Forms/HorizontalForm";
import VerticalForm from "./components/pages/forms/VerticalForm";
import FeatherIcons from "./components/pages/Icons/Feather";
import FlagIcons from "./components/pages/Icons/Flag";
import FontawesomeIcons from "./components/pages/Icons/Font-awesome";
import IonicIcons from "./components/pages/Icons/Ionic";
import MaterialIcons from "./components/pages/Icons/Material";
import PE7Icons from "./components/pages/Icons/Pe7";
import SimplelineIcons from "./components/pages/Icons/Simpleline";
import ThemifyIcons from "./components/pages/Icons/Themify";
import WeatherIcons from "./components/pages/Icons/Weather";
import TypiconIcons from "./components/pages/Icons/Typicon";
import Ribbon from "./components/pages/Elements/Ribbon";
import Rating from "./components/pages/Elements/Rating";
import Texteditor from "./components/pages/Elements/Texteditor";
import Counter from "./components/pages/Elements/Counter";
import Scrollbar from "./components/pages/Elements/ScrollBar";
import Notification from "./components/pages/Elements/Notification";
import Stickynote from "./components/pages/Elements/StickyNote";
import Timeline from "./components/pages/Elements/TimeLine";
import Formwizard from "./components/pages/Elements/FormWizard";
import HorizontalTimeLine from "./components/pages/Elements/HorizontalTimeLine";
import ApexCharts from "./components/pages/Charts/ApexChart";
import ChartJs from "./components/pages/Charts/ChartJs";
import MorrisCharts from "./components/pages/Charts/MorrisChart";
import FlotCharts from "./components/pages/Charts/FlotChart";
import PeityChart from "./components/pages/Charts/PeityChart";
import C3Charts from "./components/pages/Charts/C3Chart";
import ClipBoard from "./components/pages/Elements/ClipBoard";
import UiTooltip from "./components/pages/Base UI/tooltip";
import Toastr from "./components/pages/Base UI/Toast";
import Spinner from "./components/pages/Base UI/Spinner";
import PopOver from "./components/pages/Base UI/PopOver";
import LightBox from "./components/pages/Base UI/LightBox";
import Cards from "./components/pages/Base UI/Cards";
import Pagination from "./components/pages/Base UI/Pagination";
import Tableavatar from "./components/pages/Base UI/Avatar";
import Tabs from "./components/pages/Base UI/Tabs";
import Typography from "./components/pages/Base UI/Typography";
import Progressbar from "./components/pages/Base UI/ProgressBar";
import Buttons from "./components/pages/Base UI/Buttons";
import Video from "./components/pages/Base UI/Video";
import Sweetalert from "./components/pages/Base UI/SweetAlert";
import Images from "./components/pages/Base UI/Images";
import Grid from "./components/pages/Base UI/Grid";
import ButtonGroup from "./components/pages/Base UI/ButtonGroup";
import Badge from "./components/pages/Base UI/Badge";
import Accordion from "./components/pages/Base UI/Accordion";
import Alert from "./components/pages/Base UI/Alert";
import PlaceHolder from "./components/pages/Base UI/PlaceHolder";
import OffCanvas from "./components/pages/Base UI/OffCanvas";
import Modal from "./components/pages/Base UI/Modal";
import Media from "./components/pages/Base UI/Media";
import Carousel from "./components/pages/Base UI/Carousel";
import BreadCrumbs from "./components/pages/Base UI/BreadCrumbs";
import Error404 from "./components/pages/Authentication/Error-404";
import RangeSlider from "./components/pages/Base UI/RangeSlider";
import DragDrop from "./components/pages/Elements/Drag&Drop";
import Clipboard from "./components/pages/Elements/ClipBoard";
import Dropdown from "./components/pages/Base UI/DropDown";
import EditEvent from "./components/pages/Events/EditEvent";


const appcontainer = (props) => {
  return (
    <Router basename={`${config.publicPath}`}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/error404" component={Error404} />

        <Route path="/admindashboard" component={AdminDashboard} />
        <Route path="/teacherdashboard" component={TeacherDashboard} />
        <Route path="/studentdashboard" component={StudentsDashboard} />

        <Route path="/blog" component={BlogView} />
        <Route path="/pendingblog" component={PendingBlog} />
        <Route path="/addblog" component={AddBlog} />
        <Route path="/editblog" component={EditBlog} />
        <Route path="/blogdetails" component={Blogdetails} />
        <Route path="/profile" component={Profile} />

        <Route path="/blankpage" component={BlankPage} />
        <Route path="/basictable" component={BasicTable} />
        <Route path="/datatable" component={DataTable} />

        <Route path="/students" component={Students} />
        <Route path="/studentsview" component={StudentsView} />
        <Route path="/addstudent" component={AddStudent} />
        <Route path="/editstudent" component={EditStudent} />
        <Route path="/studentgrid" component={StudentGrid} />

        <Route path="/invoicegrid" component={InvoiceGrid} />
        <Route path="/invoicepaid" component={InvoicePaid} />
        <Route path="/invoiceoverdue" component={InvoiceOverdue} />
        <Route path="/invoicedraft" component={InvoiceDraft} />
        <Route path="/invoicerecurring" component={InvoiceRecurring} />
        <Route path="/invoicecancelled" component={InvoiceCancelled} />
        <Route path="/addinvoice" component={AddInvoice} />
        <Route path="/editinvoice" component={EditInvoice} />
        <Route path="/viewinvoice" component={ViewInvoice} />
        <Route path="/invoicesetting" component={InvoiceSettings} />
        <Route path="/invoicelist" component={InvoiceList} />
        <Route path="/taxsetting" component={TaxSetting} />
        <Route path="/banksetting" component={BankSetting} />

        <Route path="/inbox" component={Inbox} />
        <Route path="/compose" component={Compose} />

        {/* Settings */}
        <Route path="/generalsettings" component={GendralSettings} />
        <Route path="/localization" component={Localization} />
        <Route path="/paymentsettings" component={PaymentSettings} />
        <Route path="/emailsettings" component={EmailSettings} />
        <Route path="/socialsettings" component={SocialSettings} />
        <Route path="/sociallinks" component={SocialLinks} />
        <Route path="/seo" component={Seo} />
        <Route path="/othersettings" component={OtherSettings} />

        <Route path="/librarylist" component={LibraryList} />
        <Route path="/addbook" component={AddBook} />
        <Route path="/editbook" component={EditBook} />

        <Route path="/teacherslist" component={TeachersList} />
        <Route path="/teachersprofile" component={TeachersProfile} />
        <Route path="/addteacher" component={TeachersAdd} />
        <Route path="/editteacher" component={TeachersEdit} />
        <Route path="/teachersgrid" component={TeachersGrid} />

        <Route path="/department" component={DepartmentList} />
        <Route path="/adddepartment" component={AddDepartment} />
        <Route path="/editdepartment" component={EditDepartment} />

        <Route path="/subject" component={SubjectList} />
        <Route path="/addsubject" component={AddSubject} />
        <Route path="/editsubject" component={EditSubject} />

        <Route path="/feescollection" component={FeesCollection} />
        <Route path="/addfeescollection" component={AddFeesCollection} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/addexpenses" component={AddExpenses} />
        <Route path="/salary" component={Salary} />
        <Route path="/addsalary" component={AddSalary} />

        <Route path="/holiday" component={Holiday} />
        <Route path="/addholiday" component={AddHoliday} />

        <Route path="/fees" component={Fees} />
        <Route path="/addfees" component={AddFees} />
        <Route path="/editfees" component={EditFees} />

        <Route path="/exam" component={Exam} />
        <Route path="/addexam" component={AddExam} />
        <Route path="/editexam" component={EditExam} />

        <Route path="/timetable" component={TimeTable} />
        <Route path="/addtimetable" component={AddTimeTable} />
        <Route path="/edittimetable" component={EditTimeTable} />

        <Route path="/sports" component={Sports} />
        <Route path="/addsports" component={AddSports} />
        <Route path="/editsports" component={EditSports} />

        <Route path="/hostel" component={Hostel} />
        <Route path="/addhostel" component={AddHostel} />
        <Route path="/edithostel" component={EditHostel} />

        <Route path="/transport" component={Transport} />
        <Route path="/addtransport" component={AddTransport} />
        <Route path="/edittransport" component={EditTransport} />

        <Route path="/event" component={Event} />
        <Route path="/addevent" component={AddEvent} />
        <Route path="/editevent" component={EditEvent} />

        <Route path="/basictable" component={BasicTables} />
        <Route path="/datatable" component={DataTables} />

        <Route path="/basicinput" component={BasicInputs} />
        <Route path="/forminputgroup" component={FormInputGroups} />
        <Route path="/formmask" component={FormMask} />
        <Route path="/formvalidation" component={FormValidation} />
        <Route path="/horizontalform" component={HorizontalForm} />
        <Route path="/verticalform" component={VerticalForm} />

        <Route path="/feathericons" component={FeatherIcons} />
        <Route path="/flagicons" component={FlagIcons} />
        <Route path="/fontawesomeicons" component={FontawesomeIcons} />
        <Route path="/iconicicons" component={IonicIcons} />
        <Route path="/materialicons" component={MaterialIcons} />
        <Route path="/flagicons" component={FlagIcons} />
        <Route path="/pe7icons" component={PE7Icons} />
        <Route path="/simplelineicons" component={SimplelineIcons} />
        <Route path="/themifyicons" component={ThemifyIcons} />
        <Route path="/weathericons" component={WeatherIcons} />
        <Route path="/typiconicons" component={TypiconIcons} />

        <Route path="/ribbon" component={Ribbon} />
        <Route path="/dragdrop" component={DragDrop} />
        <Route path="/clipboard" component={Clipboard} />
        <Route path="/rating" component={Rating} />
        <Route path="/texteditor" component={Texteditor} />
        <Route path="/counter" component={Counter} />
        <Route path="/scrollbar" component={Scrollbar} />
        <Route path="/notification" component={Notification} />
        <Route path="/stickynote" component={Stickynote} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/horizontaltimeline" component={HorizontalTimeLine} />
        <Route path="/formwizard" component={Formwizard} />

        <Route path="/apexchart" component={ApexCharts} />
        <Route path="/chartjs" component={ChartJs} />
        <Route path="/morrischart" component={MorrisCharts} />
        <Route path="/flotchart" component={FlotCharts} />
        <Route path="/peitychart" component={PeityChart} />
        <Route path="/c3chart" component={C3Charts} />

        <Route path="/tooltip" component={UiTooltip} />
        <Route path="/toast" component={Toastr} />
        <Route path="/spinner" component={Spinner} />
        <Route path="/popover" component={PopOver} />
        <Route path="/rangeslider" component={RangeSlider} />
        <Route path="/lightbox" component={LightBox} />
        <Route path="/cards" component={Cards} />
        <Route path="/dropdown" component={Dropdown} />
        <Route path="/pagination" component={Pagination} />
        <Route path="/avatar" component={Tableavatar} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/typography" component={Typography} />
        <Route path="/progressbar" component={Progressbar} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/video" component={Video} />
        <Route path="/sweetalert" component={Sweetalert} />
        <Route path="/images" component={Images} />
        <Route path="/grid" component={Grid} />
        <Route path="/buttongroup" component={ButtonGroup} />
        <Route path="/badge" component={Badge} />
        <Route path="/accordion" component={Accordion} />
        <Route path="/alert" component={Alert} />
        <Route path="/placeholder" component={PlaceHolder} />
        <Route path="/offcanvas" component={OffCanvas} />
        <Route path="/media" component={Media} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/breadcrumbs" component={BreadCrumbs} />
        <Route path="/modal" component={Modal} />
      </Switch>
    </Router>
  );
}

export default appcontainer
