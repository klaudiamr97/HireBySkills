import React from "react";

type Props = {
  skillsList: string[];
  selectedOptionalSkills: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSkillRemove: (index: number) => void;
};

const OptionalSkillsFilter = ({
  skillsList,
  selectedOptionalSkills,
  onChange,
  onSkillRemove,
}: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold my-2">Optional Skills</h4>
      <select
        className="border border-gray-300 rounded px-3 py-1"
        multiple
        value={selectedOptionalSkills}
        onChange={onChange}
        style={{ width: "200px" }}
      >
        {skillsList.map((skill, index) => (
          <option key={index} value={skill}>
            {skill}
          </option>
        ))}
      </select>

      <div className="mt-2">
        <span className="text-gray-600">Selected Optional Skills:</span>
        <div className="mt-2">
          {selectedOptionalSkills.map((skill, index) => (
            <div
              key={index}
              className="inline-block bg-purple px-3 py-1 rounded text-offwhite cursor-pointer mr-2 mb-2"
              onClick={() => onSkillRemove(index)}
              style={{
                display: "inline-block",
                marginRight: "3px",
                marginBottom: "3px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionalSkillsFilter;
