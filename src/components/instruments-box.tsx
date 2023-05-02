import React from 'react';
import { Link } from 'gatsby-link';
import { IInstrument } from '../interfaces';
import { getWordInitials, instrumentBoxColors } from '../utils';

const InstrumentsBoxes = ({ instruments }: { instruments: IInstrument[] }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[768px] mx-auto pt-10">
        {instruments.map((instrument, i) => (
          <Link
            key={instrument.slug}
            to={`/instruments/${instrument.slug}`}
            className="my-8 flex mr-4 transition-all block instrument-box"
          >
            <div
              style={{
                backgroundColor: `${
                  instrumentBoxColors[Math.floor(instrument.name.length % instrumentBoxColors.length)] || '#5BB194'
                }`,
              }}
              className={`shrink-0 w-14 h-14 mt-[6px] text-white font-bold text-center leading-[54px] rounded`}
            >
              {getWordInitials(instrument.name)}
            </div>
            <div className="pl-4">
              <p className="font-bold mb-0.5">{instrument.name}</p>
              <p className="text-slate-500 text-sm leading-5">{instrument.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InstrumentsBoxes;
