import React from 'react';

const Searchbar = () => {
  return (
    <div className="mx-auto max-w-2xl relative">
      <input
        type="text"
        placeholder="Seach available instruments e.g. Function Generator"
        className="p-2 outline-teal-600 border-2 border-slate-400 rounded w-full"
      />
      {/* <button className="text-white absolute right-[4px] top-[4px] right-0 bg-teal-600 px-3 py-1.5 rounded hover:bg-teal-700">
        Search
      </button> */}
    </div>
  );
};

export default Searchbar;
