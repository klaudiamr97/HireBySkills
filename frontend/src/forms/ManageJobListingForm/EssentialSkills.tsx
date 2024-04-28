import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { essentialSkillsList } from "../../config/essential-skills-options-config";
import { JobListingFormData } from "./ManageJobListingForm";

const EssentialTypeSection = () => {
  const { register } = useFormContext<JobListingFormData>();

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSkill = event.target.value;
    if (!selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
  };

  return (
    <section className=" bg-body w-full overflow-hidden">
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
              {essentialSkillsList.map((skill, index) => (
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
            {/* Register selected skills */}
            {selectedSkills.length > 0 && (
              <input
                type="hidden"
                {...register("essentialSkills", { value: selectedSkills })}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialTypeSection;
