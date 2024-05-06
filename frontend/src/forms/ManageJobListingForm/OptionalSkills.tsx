import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { skillsList } from "../../config/skills-options-config";
import { JobListingFormData } from "./ManageJobListingForm";

type Props = {
  optionalSkills: string[];
};

const OptionalTypeSection = ({ optionalSkills }: Props) => {
  const { register, setValue } = useFormContext<JobListingFormData>();

  const [selectedSkills, setSelectedSkills] =
    useState<string[]>(optionalSkills);

  useEffect(() => {
    setSelectedSkills(optionalSkills);
    optionalSkills.forEach((_skill, index) => {
      register(`optionalSkills.${index}` as const);
    });
  }, [optionalSkills, register]);

  const handleSkillSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSkill = event.target.value;
    if (!selectedSkills.includes(selectedSkill)) {
      const updatedSkills = [...selectedSkills, selectedSkill];
      setSelectedSkills(updatedSkills);
      setValue("optionalSkills", updatedSkills);
    }
  };

  const handleSkillRemove = (index: number) => {
    const updatedSkills = [...selectedSkills];
    updatedSkills.splice(index, 1);
    setSelectedSkills(updatedSkills);
    setValue("optionalSkills", updatedSkills);
  };

  return (
    <section className="bg-body w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-5">
          <label className="block mb-5">Optional Skills</label>
          <div className="flex mb-4">
            <select
              onChange={handleSkillSelect}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="" disabled>
                Select an optional skill
              </option>
              {skillsList.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-4">Selected Optional Skills</label>
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

export default OptionalTypeSection;
