import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div className="mx-auto max-w-2xl relative">
      <input
        type="text"
        placeholder="Seach available instruments e.g. Linear Stages"
        className="p-2 pr-8 outline-teal-600 border-2 border-slate-400 rounded w-full"
      />
      <FiSearch className="absolute right-[8px] top-[12px] right-0" size={20} />
      {/* <button className="text-white absolute right-[4px] top-[4px] right-0 bg-teal-600 px-3 py-1.5 rounded hover:bg-teal-700">
        Search
      </button> */}
    </div>
  );
};

export default Searchbar;
