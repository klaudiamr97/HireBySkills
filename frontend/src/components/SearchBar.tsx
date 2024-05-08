import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [company, setCompany] = useState<string>(search.company);
  const [location, setLocation] = useState<string>(search.location);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(company, location);
    navigate("/search");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-3 mb-5 bg-purple rounded-2xl shadow-md grid grid-cols-3 items-center gap-4"
    >
      <div className="flex rounded items-center bg-white p-2 w-full">
        <input
          placeholder="Looking for a specific company?"
          className="text-md w-full focus:outline-none"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>
      <div className="flex rounded items-center bg-white p-2 w-full">
        <input
          placeholder="Choose a location"
          className="text-md w-full focus:outline-none"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className="flex pl-5 pr-2 gap-4 w-full">
        <button className="bg-offwhite rounded text-blacktint h-full p-2 font-bold text-xl hover:bg-white w-full">
          Search
        </button>
        <button className="bg-graphite rounded text-white h-full p-2 font-bold text-xl hover:bg-black-tint w-full">
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
