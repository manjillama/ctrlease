import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby-link';
import { IInstrument } from '../interfaces';
import { getWordInitials, instrumentBoxColors } from '../utils';
import { FiSearch } from 'react-icons/fi';

const InstrumentsBoxes = ({ instruments }: { instruments: IInstrument[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInstruments, setFilteredInstruments] = useState(instruments);

  useEffect(() => {
    setFilteredInstruments(
      instruments.filter((instrument) => instrument.name.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [searchTerm]);

  return (
    <div>
      <div className="mx-auto max-w-2xl relative">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Seach available instruments e.g. Linear Stages"
          className="p-2 pr-8 outline-teal-600 border-2 border-slate-400 rounded w-full"
        />
        <FiSearch className="absolute right-[8px] top-[12px] right-0" size={20} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[768px] mx-auto pt-10">
        {filteredInstruments.map((instrument, i) => (
          <Link key={instrument.slug} to={`/instruments/${instrument.slug}`}>
            <div className="my-8 flex mr-4">
              <div
                style={{
                  backgroundColor: `${
                    instrumentBoxColors[Math.floor(instrument.name.length % instrumentBoxColors.length)] || '#5BB194'
                  }`,
                }}
                className={`shrink-0 w-14 h-14 mt-[6px] text-white font-bold text-center leading-[54px] rounded `}
              >
                {getWordInitials(instrument.name)}
              </div>
              <div className="pl-4">
                <p className="font-bold">{instrument.name}</p>
                <span className="text-slate-500 text-sm">{instrument.description}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InstrumentsBoxes;
