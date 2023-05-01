import { Link, graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { instrumentBoxColors } from '../utils';

const Searchbar = () => {
  const {
    drivers: { nodes: drivers },
  } = useStaticQuery(graphql`
    query GetAllDrivers {
      drivers: allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
            manufacturer
            instrument
          }
        }
      }
    }
  `);

  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  useEffect(() => {
    setFilteredDrivers(() =>
      drivers.filter(
        (driver: any, idx: number) =>
          (driver.frontmatter.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
            driver.frontmatter.instrument.toLowerCase().includes(searchTerm.trim().toLowerCase())) &&
          idx < 8,
      ),
    );
  }, [searchTerm]);

  const handleFocus = () => {
    setShowSuggestion(true);
  };
  const handleBlur = (e: any) => {
    setShowSuggestion(false);
  };

  return (
    <div className="mx-auto max-w-2xl relative" onFocus={handleFocus}>
      {showSuggestion && <div id="searchBoxOverlay" className="inset-0 fixed z-10" onClick={handleBlur} />}
      <div id="searchBox" className="relative z-20">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Seach available drivers e.g. PM100D or Power Meters"
          className="p-2 pr-8 outline-teal-600 border-2 border-slate-400 rounded w-full"
        />
        <FiSearch className="absolute right-[8px] top-[12px] right-0" size={20} />
        {/* <button className="text-white absolute right-[4px] top-[4px] right-0 bg-teal-600 px-3 py-1.5 rounded hover:bg-teal-700">
        Search
      </button> */}

        {showSuggestion && searchTerm.trim().length >= 2 && (
          <ul className="absolute shadow-lg rounded border w-full bg-white text-sm z-10 max-h-64 overflow-y-auto">
            <>
              {filteredDrivers.length <= 0 && (
                <li className="border-b border-gray-200 last:border-b-0 hover:bg-gray-100 px-3 py-8 font-bold text-center">
                  No drivers found.
                </li>
              )}
              {filteredDrivers.map((driver: any, i: number) => (
                <li key={i} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-100">
                  <Link to={`/drivers/${driver.frontmatter.slug}`} className="p-2 cursor-pointer block">
                    <p>{driver.frontmatter.title}</p>
                    <span
                      style={{
                        backgroundColor: `${
                          instrumentBoxColors[
                            Math.floor(driver.frontmatter.instrument.length % instrumentBoxColors.length)
                          ] || '#5BB194'
                        }`,
                      }}
                      className="py-1 px-2 text-[8px] text-white rounded-xl"
                    >
                      {driver.frontmatter.instrument}
                    </span>
                  </Link>
                </li>
              ))}
            </>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
