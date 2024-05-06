import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { skillsList } from "../../config/skills-options-config";
import { JobListingFormData } from "./ManageJobListingForm";

const EssentialTypeSection = () => {
  const { register, setValue } = useFormContext<JobListingFormData>();

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    selectedSkills.forEach((_skill, index) => {
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

  const handleSkillRemove = (index: number) => {
    const updatedSkills = [...selectedSkills];
    updatedSkills.splice(index, 1);
    setSelectedSkills(updatedSkills);
    setValue("essentialSkills", updatedSkills);
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
                  className="bg-purple px-3 py-1 rounded text-offwhite cursor-pointer"
                  onClick={() => handleSkillRemove(index)}
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
