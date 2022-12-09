import React from "react";
import {Routes, Route} from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import EventsList from "./pages/EventsList";
import LogIn from "./pages/Auth/LogIn";
import SignIn from "./pages/Auth/SignIn";

import style from "./style.css";
import AddEvent from "./pages/Admin/AddEvent";
import CoordinatorEvents from "./pages/Volunteer/CoordinatingEvents";
import VolunteerEvents from "./pages/Volunteer/VolunteerEvents";
import Report from "./pages/Volunteer/Report";
import Profile from "./pages/Volunteer/Profile";
import EventDataValid from "./pages/Volunteer/EventDataValid";
import EventData from "./pages/Volunteer/EventData";
import AdmProfile from "./pages/Admin/Profile";

function App() {
  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/login' element={<LogIn />} />

      <Route path='/events/completed' element={<EventsList heading="Completed Events" url="completed"/>} />
      <Route path='/events/ongoing' element={<EventsList heading="Ongoing Events" url="ongoing"/>} />

      {/* Admin Routes */}
      <Route path='/admin/profile' element={<AdmProfile/>} />
      <Route path='/admin/profile/edit' element={<EditProfile />} />
      <Route path='/admin/event/create' element={<AddEvent/>}/>
      <Route path='/admin/event/data/acceess-valid' element={<EventDataValid role="Admin"/>} />

      {/* Volunteer Routes */}
      <Route path='/volunteer/profile' element={<Profile/>} />
      <Route path='/volunteer/profile/edit' element={<EditProfile />} />
      <Route path='/volunteer/report' element={<Report/>} />
      <Route path='/volunteer/volunteering' element={<VolunteerEvents/>} />
      <Route path='/volunteer/coordinating' element={<CoordinatorEvents/>} />
      <Route path='/volunteer/event/data' element={<EventData/>} />
      <Route path='/volunteer/event/data/acceess-valid' element={<EventDataValid role="Volunteer"/>} />
    </Routes>
  );
}

export default App;
