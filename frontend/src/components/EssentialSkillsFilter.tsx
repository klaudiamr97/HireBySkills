import React, { useState } from "react";

type Props = {
  skillsList: string[];
  selectedEssentialSkills: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSkillRemove: (index: number) => void;
};

const EssentialSkillsFilter = ({
  skillsList,
  selectedEssentialSkills,
  onChange,
  onSkillRemove,
}: Props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredSkillsList = skillsList.filter((skill) =>
    skill.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold my-2">Essential Skills</h4>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        placeholder="Search skills"
        className="border border-gray-300 rounded px-3 py-1 mb-2"
        style={{ width: "200px" }}
      />
      <select
        className="border border-gray-300 rounded px-3 py-1"
        multiple
        value={selectedEssentialSkills}
        onChange={onChange}
        style={{ width: "200px" }}
      >
        {filteredSkillsList.map((skill, index) => (
          <option key={index} value={skill}>
            {skill}
          </option>
        ))}
      </select>
      <div className="mt-2">
        <span className="text-gray-600">Selected Essential Skills:</span>
        <div className="mt-2">
          {selectedEssentialSkills.map((skill, index) => (
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

export default EssentialSkillsFilter;
