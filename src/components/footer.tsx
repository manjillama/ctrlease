import React from 'react';
import DevCredit from './dev-credit';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="py-8 bg-black">
      <div className="mx-auto max-w-[1280px]">
        <div className="px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-50 mb-1">
            <a href="mailto:hello@ctrlease.com" className="hover:text-sky-500 flex items-center">
              <HiMail size={16} className="mr-2" /> prash@ctrlease.com
            </a>
          </div>

          <div>
            <p className="mb-1 text-xs text-gray-50 text-center md:text-left">
              Copyright &copy; {new Date().getFullYear()} CtrlEase
            </p>
          </div>
          {/* <div className="mb-1 text-xs text-gray-50 text-center md:text-left">
            <div className="flex">
              <div className="mx-auto">
                <DevCredit />
              </div>
            </div>
          </div> */}
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
