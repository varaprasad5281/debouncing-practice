import React from "react";

const Header = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term in the parent component
  };

  return (
    <div className="flex justify-between px-8 py-6 shadow-lg items-center">
      <label className="text-xl font-bold">Prasad</label>
      <input
        onChange={handleChange}
        className="max-w-[600px] w-full p-2 rounded-md border border-stone-400"
        type="text"
        placeholder="Search Favourite Movie"
      />
      <p>😊</p>
    </div>
  );
};

export default Header;
