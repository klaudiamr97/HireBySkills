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
              We built this platform with a clear mission — to empower career
              changers and individuals entering the job market. Instead of
              traditional job searches, candidates simply list their soft and
              professional skills. Our system then utilizes advanced matching
              algorithms to connect them with job listings that align perfectly
              with their unique skill set. It's a revolutionary approach to job
              hunting, ensuring that candidates find opportunities that resonate
              with their abilities and aspirations.
            </p>
          </div>
          <div className="mb-10">
            <h4 className="mb-10 text-3xl  xl:text-10xl font-bold font-heading tracking-px-n leading-none">
              For candidates
            </h4>
            <p>
              Embarking on a new career path can be challenging, especially when
              navigating the intricacies of skill matching. At our platform, we
              understand this struggle. For candidates, the process is simple —
              just fill out your profile with skills and upload your CV. Our
              system takes it from there, presenting you with job opportunities
              perfectly tailored to your abilities. But that's not all; we go
              the extra mile by offering expert articles with valuable job
              advice and unwavering support from the initial search to the
              successful completion of your interview. Your journey to a
              fulfilling career starts here.
            </p>
          </div>
          <div className="mb-10">
            <h4 className="mb-10 text-3xl  xl:text-10xl font-bold font-heading tracking-px-n leading-none">
              For employers
            </h4>
            <p>
              Finding the right talent just got easier. Our platform streamlines
              the hiring process for employers, offering a swift and efficient
              way to discover ideal candidates. Job listings are automatically
              matched with candidates whose skills align seamlessly,
              significantly reducing the time and effort traditionally spent on
              recruitment. Beyond matching, the platform provides tools for
              scheduling interviews and managing candidate responses, making the
              entire hiring process smoother and more time-effective.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
