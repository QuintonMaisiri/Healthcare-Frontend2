import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import PatientDashBoard from './pages/patientDashBoard/PatientDashBoard';
import Signin from "./pages/signin/Signin"
import Signup from './pages/signup/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          {/* <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/patient-dashboard" element={<PatientDashBoard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
