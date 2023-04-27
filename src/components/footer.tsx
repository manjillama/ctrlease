import React, { useState } from 'react';
import { Spinner } from './spinner';
import DevCredit from './dev-credit';
import NewsletterForm from './newsletter-form';
import Logo from '../images/logo.svg';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-100">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[250px]">
          <NewsletterForm />
        </div>
        <div className="px-4 pt-6 flex flex-col md:flex-row justify-between text-center">
          <p className="mb-1 text-xs text-slate-500">Copyright &copy; {new Date().getFullYear()} CtrlEase </p>
          <div className="md:mx-0 mx-auto text-xs text-slate-500">
            <DevCredit />
          </div>
        </div>
      </div>
    </footer>
  );
};

// return (
//   <footer className="py-8 bg-slate-100">
//     <div className="mx-auto px-4 max-w-[1280px] flex md:flex-row flex-col justify-between items-end">
//       <div className="pt-6 justify-between md:mx-0 mx-auto">
//         <img src={Logo} className="mb-4 md:mx-0 mx-auto" />
//         <p className="text-xs text-slate-500 text-center md:text-left">
//           Copyright &copy; {new Date().getFullYear()} CtrlEase
//         </p>
//         <p className="text-xs text-slate-500 text-center md:text-left flex">
//           <DevCredit />.
//         </p>
//       </div>

//       <div className="max-w-[350px] md:mx-0 mx-auto text-center md:text-left">
//         <NewsletterForm />
//       </div>
//     </div>
//   </footer>
// );

export default Footer;
