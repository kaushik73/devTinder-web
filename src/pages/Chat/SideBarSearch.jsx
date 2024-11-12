import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SideBarSearch = ({ handleSidebarSearch }) => {
  const [search, setSearch] = useState();
  const handleSubmit = (e) => {
    console.log("handleSubmit", search);

    e.preventDefault();
    handleSidebarSearch(search);
    setSearch("");
  };
  return (
    <form className="relative p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search People..."
        className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="absolute text-xl top-[35%] right-7" type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SideBarSearch;
