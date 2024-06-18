import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import GlobalWork from "../assets/share.png";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero title="Connecting Talent with Opportunity" imgSrc={GlobalWork} />
      <section className="py-20 bg-white overflow-hidden flex-grow">
        <div className="container px-4 mx-auto">
          <div className="mb-10">
            <h4 className="mb-10 text-3xl  xl:text-10xl font-bold font-heading tracking-px-n leading-none">
              Our Goals
            </h4>
            <p>
              At HireBySkills, our mission is to bridge the gap between job
              seekers and employers, making the hiring process smooth and
              efficient. Whether you are entering the job market for the first
              time or looking to make a career change, we are here to support
              you every step of the way. We aim to empower candidates with the
              tools and resources they need to find the perfect job and help
              employers discover the best talent to meet their needs.
            </p>
          </div>
          <div className="mb-10">
            <h4 className="mb-10 text-3xl  xl:text-10xl font-bold font-heading tracking-px-n leading-none">
              For Candidates
            </h4>
            <p>
              We understand that finding the right job can be a challenging and
              sometimes overwhelming process. That's why we have designed our
              platform to be user-friendly and intuitive, enabling you to find
              job opportunities that match your skills and aspirations
              effortlessly. You can filter jobs based on essential and optional
              skills, location, and job title, ensuring that you find positions
              that are a perfect fit for your abilities and preferences. Once
              you find a job listing that excites you, simply submit your CV
              through our platform. Additionally, we offer a wealth of expert
              articles that provide valuable job advice, tips on crafting the
              perfect CV, interview techniques, and career development
              strategies to help you succeed.
            </p>
          </div>
          <div className="mb-10">
            <h4 className="mb-10 text-3xl  xl:text-10xl font-bold font-heading tracking-px-n leading-none">
              For Employers
            </h4>
            <p>
              At HireBySkills, we recognise the importance of finding the right
              talent to drive your business forward. Our platform is designed to
              streamline the hiring process, making it easier than ever to
              connect with qualified candidates. You can add your job listings
              with ease, specifying essential and optional skills to attract the
              most suitable candidates. Our advanced filtering system allows
              candidates to find your job postings based on their skill set,
              location, and job preferences, ensuring that you receive
              applications from highly relevant candidates. Moreover, gain
              access to expert articles and resources that provide insights into
              hiring best practices, industry trends, and strategies to enhance
              your recruitment process.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
