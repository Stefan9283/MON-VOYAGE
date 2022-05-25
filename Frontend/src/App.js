import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WithNAV from "./WithNAV.js";
import WithoutNAV from "./WithoutNAV.js";
import Contact from "./pages/Contact";
import WithNAVLogged from "./WithNAVLogged";
import Location from "./pages/Location";
import Review from "./pages/Reviews";
import LeaveReview from "./pages/LeaveReview";
import Administrator from "./pages/Admin";
import Cleaner from "./pages/Cleaner";
import Accountant from "./pages/Accountant";
import Receptionist from "./pages/Receptionist";
import Manager from "./pages/Manager";
import AddRoom from "./pages/AddRoom";
import AddHotel from "./pages/AddHotel";
import AddUser from "./pages/AddUser";
import HandOver from "./pages/HandOver";
import ReportRoom from "./pages/ReportRoom";
import TimeTables from "./pages/TimeTables";
import PaymentStatus from "./pages/PaymentStatus";
import Acquisitions from "./pages/Acquisitions";
import Bookings from "./pages/Bookings";
import CheckInReq from "./pages/CheckInReq";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<WithNAV />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reviews" element={<Review />} />

        </Route>
        <Route element={<WithNAVLogged />}>
          <Route path="/leavereview" element={<LeaveReview />} />
          <Route path="/admin" element={<Administrator />} />
          <Route path="/admin/addRoom" element={<AddRoom />} />
          <Route path="/admin/addHotel" element={<AddHotel />} />
          <Route path="/admin/addUser" element={<AddUser />} />
          <Route path="/timetables" element={<TimeTables />} />
          <Route path="/cleaner" element={<Cleaner />} />
          <Route path="/cleaner/HandOver" element={<HandOver />} />
          <Route path="/accountant" element={<Accountant />} />
          <Route path="/accountant/paymentstatus" element={<PaymentStatus />} />
          <Route path="/accountant/acquisitions" element={<Acquisitions />} />
          <Route path="/receptionist" element={<Receptionist />} />
          <Route path="/receptionist/bookings" element={<Bookings />} />
          <Route path="/receptionist/checkin-requests" element={<CheckInReq />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/manager/ReportRoom" element={<ReportRoom />} />
        </Route>
        <Route element={<WithoutNAV />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
