import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { skillsList } from "../../config/skills-options-config";
import { JobListingFormData } from "./ManageJobListingForm";

const EssentialTypeSection = () => {
  const { register, setValue } = useFormContext<JobListingFormData>();

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    selectedSkills.forEach((skill, index) => {
      register(`essentialSkills.${index}` as const);
    });
  }, [register, selectedSkills]);

  const handleSkillSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSkill = event.target.value;
    if (!selectedSkills.includes(selectedSkill)) {
      const updatedSkills = [...selectedSkills, selectedSkill];
      setSelectedSkills(updatedSkills);
      setValue("essentialSkills", updatedSkills);
      register(`essentialSkills.${updatedSkills.length - 1}` as const);
    }
  };

  return (
    <section className="bg-body w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-5">
          <label className="block mb-5">Essential Skills</label>
          <div className="flex mb-4">
            <select
              onChange={handleSkillSelect}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="" disabled>
                Select an essential skill
              </option>
              {skillsList.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-4">Selected Skills</label>
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-purple px-3 py-1 rounded text-offwhite"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialTypeSection;
// import React, { useState, useEffect } from "react";
// import { useFormContext } from "react-hook-form";
// import { skillsList } from "../../config/skills-options-config";
// import { JobListingFormData } from "./ManageJobListingForm";

// const EssentialTypeSection = () => {
//   const { register } = useFormContext<JobListingFormData>();

//   const [inputValue, setInputValue] = useState<string>("");

//   useEffect(() => {
//     console.log("Input Value:", inputValue); // Log inputValue

//     // Split inputValue by commas and remove empty strings
//     const skillsArray = inputValue
//       .split(",")
//       .map((skill) => skill.trim())
//       .filter((skill) => skill !== "");

//     console.log("Skills Array:", skillsArray); // Log skillsArray

//     // Register essentialSkills with the updated skillsArray
//     register("essentialSkills", { required: true, value: skillsArray });

//     // Update skillsList array with the skills entered by the user
//     skillsArray.forEach((skill) => {
//       if (!skillsList.includes(skill)) {
//         skillsList.push(skill);
//       }
//     });

//     console.log("Essential Skills Registered:", skillsArray); // Log registered essentialSkills
//   }, [register, inputValue]);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <section className="bg-body w-full overflow-hidden">
//       <div className="container px-4 mx-auto">
//         <div className="mb-5">
//           <label className="block mb-5">Essential Skills</label>
//           <div className="flex mb-4">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               className="border border-gray-300 rounded px-3 py-1"
//               placeholder="Enter essential skills separated by commas"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EssentialTypeSection;
