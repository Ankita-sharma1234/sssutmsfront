import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';//
import Signup from '././components/Register&Login/Signup';
import Signin from '././components/Register&Login/Signin';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Course from '././components/Register&Login/Course';
import Login from "./AdminComponent/Login"
import Register from './AdminComponent/Register';
import Header from './components/Register&Login/Header';
import Erp from './components/Register&Login/Erp';
import NewRegistrationRequests from './components/Register&Login/NewRegistrationRequest';
import Hoddashboard from './AdminComponent/HodDashboard';
import Registration from './AdminComponent/HodMainDetails';
import SuccesfullMsg from './components/Register&Login/SuccesfullMsg';
import Enrollement from './AdminComponent/Enrollement';
import Registrationn from "./AdminComponent/StudentMainDetails"
import Sidebarr from "./AdminComponent/StudentDashboard"
import Personal from './AdminComponent/Personal';
import Professional from './AdminComponent/Professional';
import Address from './AdminComponent/Address';
import Photo from './AdminComponent/Photo';
import Academic from './AdminComponent/Academic';
import Dashboard from './components/Register&Login/StdentHome';
import Cards from './components/Register&Login/Erp';
import Pending from './AdminComponent/SudentPending';
import StudentMainDetails from './AdminComponent/StudentMainDetails';
import StudentHome from './components/Register&Login/StdentHome';
import StudentDashboard from './AdminComponent/StudentDashboard';
import HodDashboard from './AdminComponent/HodDashboard';
import HodMainDetails from './AdminComponent/HodMainDetails';
import StudentWaiting from './components/Register&Login/StudentWaiting';
import VerifyDetailed from './AdminComponent/VerifyDetailed';
import Verify from './AdminComponent/Verify';
import OnlyHeader from './AdminComponent/OnlyHeader';
import Payment from './components/Register&Login/PaymentGateway';
import PaymentPage from './AdminComponent/PaymentPage';
import StudentAllDetail from './components/Register&Login/StudentAllDetail';
function App() {

  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("currentUser"));
    if (userData) {
      return true
    }
    return false;
  }

  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/studentlogin`} />;
    }
  }
  return (
    <>
      <Routes>
      <Route path="/studentalldetail" element={<StudentAllDetail/>} />
        <Route path="/studentregister" element={<Signup />} />
        <Route path="/studentlogin" element={<Signin />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/onlyheader' element={<PrivateRoute element={<OnlyHeader />} />} />
        <Route path='/studentDashboard' element={<StudentDashboard />} />
        <Route path='/studentWaiting' element={<StudentWaiting />} />
        <Route path='/studentpersonal' element={<Personal />} />
        <Route path='/studentDetail' element={< StudentMainDetails />} />
        <Route path='/studentHome' element={< StudentHome />} />
        <Route path='/studentpending' element={< Pending />} />
        <Route path='/studentverify' element={<Verify />} />
        <Route path='/PaymentPage' element={<PaymentPage />} />

        <Route
          path="/selectCourse"
          element={<PrivateRoute element={<Course />} />}
        />

        <Route path='/verifyDetailed' element={<VerifyDetailed />} />
        <Route path='/hodDashboard' element={<HodDashboard />} />
        <Route path='/hodDetail' element={<HodMainDetails />} />
        <Route path='/professional' element={<Professional />} />
        {/* <Route path='/address' element={<Address />} /> */}
        {/* <Route path='/photo' element={<Photo />} /> */}
        {/* <Route path='/academic' element={<Academic />} /> */}
        <Route path='/studentUpdateDetail' element={<Registrationn />} />
        <Route path='/enroll' element={<Enrollement />} />
        <Route path='/erp' element={<Erp />} />
        <Route path='/' element={<Header />} />
        <Route path='/cards' element={<Cards />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/adminlogin' element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/studentverifieddetailed/:id" element={<VerifyDetailed />} />
        <Route path='/registration' element={<NewRegistrationRequests />} />
        <Route path='/adminregister' element={<Register />} />
        <Route path="/success" element={<SuccesfullMsg />} />



      </Routes>
    </>
  )
}

export default App