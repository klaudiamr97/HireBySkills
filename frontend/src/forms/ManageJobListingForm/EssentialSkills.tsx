import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { skillsList } from "../../config/skills-options-config";
import { JobListingFormData } from "./ManageJobListingForm";

type Props = {
  essentialSkills: string[];
};

const EssentialTypeSection = ({ essentialSkills }: Props) => {
  const { register, setValue } = useFormContext<JobListingFormData>();

  const [selectedSkills, setSelectedSkills] = useState<string[]>(() => {
    const savedSkills = sessionStorage.getItem("selectedEssentialSkills");
    return savedSkills ? JSON.parse(savedSkills) : essentialSkills;
  });

  useEffect(() => {
    if (essentialSkills.length > 0) {
      setSelectedSkills(essentialSkills);
      essentialSkills.forEach((_skill, index) => {
        register(`essentialSkills.${index}` as const);
      });
    }
  }, [essentialSkills, register]);

  useEffect(() => {
    sessionStorage.setItem(
      "selectedEssentialSkills",
      JSON.stringify(selectedSkills)
    );
    setValue("essentialSkills", selectedSkills);
  }, [selectedSkills, setValue]);

  const handleSkillSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSkill = event.target.value;
    if (!selectedSkills.includes(selectedSkill)) {
      const updatedSkills = [...selectedSkills, selectedSkill];
      setSelectedSkills(updatedSkills);
    }
  };

  const handleSkillRemove = (index: number) => {
    const updatedSkills = [...selectedSkills];
    updatedSkills.splice(index, 1);
    setSelectedSkills(updatedSkills);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("selectedEssentialSkills");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      sessionStorage.removeItem("selectedEssentialSkills");
    };
  }, []);

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
            <label className="block mb-4">Selected Essential Skills</label>
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
