import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
// import EmployerAccount from "./pages/EmployerAccount";
import CandidateAccount from "./pages/CandidateAccount";
import JobListing from "./pages/JobListing";
import About from "./pages/About";
import CareerGuide from "./pages/CareerGuide";
import MyJobs from "./pages/MyJobs";
import LogIn from "./pages/LogIn";
import AddJobListing from "./pages/AddJobListing";
import {useAppContext} from "./contexts/AppContext";
import MyJobListings from "./pages/MyJobListings";
import EditJobListing from "./pages/EditJobListing";
import Search from "./pages/Search";
// import ApplicationSubmitted from "./pages/ApplicationSubmitted";

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/careerguide" element={<CareerGuide />} />
        <Route path="/joblistings/:listingId" element={<JobListing />} />
        {/* <Route path="/joblistings/:listingId/application" element={<ApplicationSubmitted />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        {isLoggedIn && (
          <>
            <Route path="/add-job-listing" element={<AddJobListing />} />
            <Route path="/myjobs" element={<MyJobs />} />
            {/* <Route path="/employeraccount" element={<EmployerAccount />} /> */}
            <Route path="/candidateaccount" element={<CandidateAccount />} />
            <Route path="/employeraccount" element={<MyJobListings />} />
            <Route
              path="/edit-job-listing/:listingId"
              element={<EditJobListing />}
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
