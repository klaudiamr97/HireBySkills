import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import EmployerAccount from "./pages/EmployerAccount";
import CandidateAccount from "./pages/CandidateAccount";
import JobListing from "./pages/JobListing";
import About from "./pages/About";
import CareerGuide from "./pages/CareerGuide";
import JobSearch from "./pages/JobsSearch";
import MyJobs from "./pages/MyJobs";
import LogIn from "./pages/LogIn";
import AddJobListing from "./pages/AddJobListing";
import useAppContext from "./contexts/useAppContext";

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/careerguide" element={<CareerGuide />} />
        <Route path="/joblisting" element={<JobListing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/add-job-listing" element={<AddJobListing />} />
        {isLoggedIn && (
          <>
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/employeraccount" element={<EmployerAccount />} />
            <Route path="/candidateaccount" element={<CandidateAccount />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
