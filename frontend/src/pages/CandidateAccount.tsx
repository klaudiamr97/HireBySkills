import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-gray-900 font-semibold leading-normal">
        {label}
      </label>
      <input
        type="text"
        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-offwhite outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

interface SelectSkillProps {
  label: string;
  options: string[];
}

const SelectSkill = ({ label, options }: SelectSkillProps) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-gray-900 font-semibold leading-normal">
        {label}
      </label>
      <select
        className="appearance-none px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-offwhite outline-none"
        name="field-name"
      >
        <option value="select-skill">Select skill</option>
        {options.map((option: string, index: number) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

const skillsListProfessional = [
  "Project Management",
  "Data Analysis",
  "Programming (e.g., Python, Java, JavaScript)",
  "Financial Analysis",
  "Digital Marketing",
  "Graphic Design",
  "Content Writing",
  "Sales Negotiation",
  "Public Speaking",
  "Software Development",
];

const skillsListSoft = [
  "Communication",
  "Leadership",
  "Time Management",
  "Teamwork",
  "Adaptability",
  "Problem-Solving",
  "Creativity",
  "Emotional Intelligence",
  "Conflict Resolution",
  "Networking",
];

const CandidateAccount = () => {
  const [certificates, setCertificates] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newCertificates = Array.from(files).filter(
        (file) => file.type === "application/pdf"
      );
      setCertificates((prevCertificates) => [
        ...prevCertificates,
        ...newCertificates,
      ]);
    }
  };

  const handleRemoveCertificate = (certificate: File) => {
    setCertificates((prevCertificates) =>
      prevCertificates.filter((cert) => cert !== certificate)
    );
  };

  return (
    <div>
      <Header />
      <section className="pt-28 pb-40 bg-body overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="mb-20 text-4xl md:text-4xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
            Welcome [User's Name]
          </h2>
          <div className="container bg-white pb-12 rounded-xl">
            <h4 className="m-10 pt-6 text-3xl font-bold font-heading leading-snug">
              Personal Info
            </h4>
            <div className="flex flex-wrap ml-6 -mb-4 md:mb-0">
              <div className="container md:w-2/6 px-4 mb-4 md:mb-0 bg-white">
                <InputField label="First Name" placeholder="Write your name" />
                <InputField label="Last Name" placeholder="Write surname" />
              </div>
              <div className="container md:w-2/6 px-4 mb-4 md:mb-0 bg-white">
                <InputField label="Location" placeholder="Write a city" />
                <div className="mb-6 pt-12">
                  <Link
                    to="/sign-in"
                    className="py-4 px-6 w-full text-white font-semibold border border-purple rounded-xl shadow-xl focus:ring focus:ring-indigo-300 bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
                  >
                    Your Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-white pb-12 rounded-xl">
            <h4 className="my-10 mx-11 pt-6 text-3xl font-bold font-heading leading-snug">
              Skills
            </h4>
            <label className="mx-6 p-6 text-2xl font-bold font-heading leading-snug">
              Professional Skills
            </label>
            <div className="flex flex-wrap mx-6 -mb-4 md:mb-0">
              <div className="container md:w-2/6 p-6 bg-white">
                <SelectSkill label="Skill 1" options={skillsListProfessional} />
                <SelectSkill label="Skill 2" options={skillsListProfessional} />
              </div>
              <div className="container md:w-2/6 p-6 bg-white">
                <SelectSkill label="Skill 3" options={skillsListProfessional} />
                <SelectSkill label="Skill 4" options={skillsListProfessional} />
              </div>
              <div className="container p-6 md:w-2/6 bg-white">
                <SelectSkill label="Skill 5" options={skillsListProfessional} />
                <SelectSkill label="Skill 6" options={skillsListProfessional} />
              </div>
            </div>
            <label className="mx-6 p-6 text-2xl font-bold font-heading leading-snug">
              Soft Skills
            </label>
            <div className="flex flex-wrap mx-6 -mb-4 md:mb-0">
              <div className="container md:w-2/6 p-6 bg-white">
                <SelectSkill label="Skill 1" options={skillsListSoft} />
                <SelectSkill label="Skill 2" options={skillsListSoft} />
              </div>
              <div className="container md:w-2/6 p-6 bg-white">
                <SelectSkill label="Skill 3" options={skillsListSoft} />
                <SelectSkill label="Skill 4" options={skillsListSoft} />
              </div>
              <div className="container p-6 md:w-2/6 bg-white">
                <SelectSkill label="Skill 5" options={skillsListSoft} />
                <SelectSkill label="Skill 6" options={skillsListSoft} />
              </div>
            </div>
          </div>
          <div className="container bg-white pb-12 rounded-xl">
            <h4 className="my-10 mx-11 pt-6 text-3xl font-bold font-heading leading-snug">
              Education
            </h4>
            <div className="flex flex-wrap ml-6 -mb-4 md:mb-0">
              <div className="container md:w-2/6 px-4 mb-4 md:mb-0 bg-white">
                <InputField
                  label="Institution"
                  placeholder="Write institution's name"
                />
              </div>
              <div className="container md:w-2/6 px-4 mb-4 md:mb-0 bg-white">
                <InputField label="Course" placeholder="Write your course" />
              </div>
            </div>
          </div>
          <div className="container bg-white pb-12 rounded-xl">
            <h4 className="my-10 mx-11 pt-6 text-3xl font-bold font-heading leading-snug">
              Certifications
            </h4>
            <div className="mx-6 flex flex-wrap">
              {certificates.map((certificate, index) => (
                <div key={index} className="w-1/3 pr-4 mb-6 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-black-tint opacity-90 z-10 flex justify-center items-center">
                      <h3 className="text-offwhite font-bold">
                        {certificate.name}
                      </h3>
                    </div>
                    <embed
                      src={URL.createObjectURL(certificate)}
                      type="application/pdf"
                      width="100%"
                      height="200"
                      className="mb-2"
                    />
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <a
                      href={URL.createObjectURL(certificate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-blue-500 hover:underline mr-2"
                    >
                      View
                    </a>
                    <span>|</span>
                    <button
                      className="text-red-500 hover:text-red-700 ml-2"
                      onClick={() => handleRemoveCertificate(certificate)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-11 mt-6 flex justify-between items-center">
              <label
                htmlFor="certificate-upload"
                className="py-3.5 px-6 border border-purple rounded-xl shadow-xl focus:ring focus:ring-indigo-300 bg-purple hover:bg-dark-purple transition ease-in-out duration-200 cursor-pointer text-white font-semibold"
              >
                Add Certificate
              </label>
              <input
                id="certificate-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CandidateAccount;
