import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const DevCredit = () => (
  <div className="flex">
    <span className="flex">
      Coded with <AiFillHeart className="heart" style={{ marginTop: 4 }} /> by
    </span>
    &nbsp;
    <a href="https://manjiltamang.com/" target="_blank" rel="noopener noreferrer" className="underline">
      <span className="underline hover:text-sky-600 transition-all">Manjil Tamang</span>
    </a>
  </div>
);

export default DevCredit;
