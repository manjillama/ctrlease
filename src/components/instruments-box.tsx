import React from 'react';
import { IInstrument } from '../interfaces';
import { getWordInitials } from '../utils';
import { Link } from 'gatsby-link';

const boxColors = [
  'bg-emerald-500',
  'bg-purple-500',
  'bg-fuchsia-400',
  'bg-red-500',
  'bg-amber-400',
  'bg-violet-500',
  'bg-rose-400',
  'bg-teal-500',
];

const InstrumentsBoxes = ({ instruments }: { instruments: IInstrument[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[768px] mx-auto py-10">
      {instruments.map((instrument, i) => (
        <Link key={instrument.slug} to={`/instruments/${instrument.slug}`}>
          <div className="my-8 flex mr-4">
            <div
              className={`shrink-0 w-12 h-12 text-white font-bold text-center leading-[48px] rounded ${
                boxColors[i] || 'bg-emerald-500'
              }`}
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
  );
};

export default InstrumentsBoxes;
