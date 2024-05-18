import Header from "../components/Header";
import Footer from "../components/Footer";
import JobListings from "../components/JobListings";
import MyApplications from "../components/Applications";

const MyAccount = () => {
  return (
    <div className="flex flex-col min-h-screen bg-body overflow-hidden">
      <Header />
      <section className="pt-28 flex-grow">
        <MyApplications />
        <JobListings />
      </section>
      <Footer />
    </div>
  );
};

export default MyAccount;
