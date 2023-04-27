import React, { useState } from 'react';
import { Spinner } from './spinner';
import { IoIosSend } from 'react-icons/io';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GATSBY_MAILERLITE_API}`,
        },
        body: JSON.stringify({
          email,
        }),
      });
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <div className="text-center">
          <p className="text-xl">Thank you!</p>
          <span className="text-slate-500 text-sm">Awesome! We'll make sure to keep you close at all times.</span>
        </div>
      ) : (
        <div>
          <p className="text-center text-sm">Subscribe to our newsletters.</p>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-1 h-8 text-sm outline-teal-600 border-2 border-slate-400 rounded w-full mr-2 my-2"
          />
          <button
            className="py-1 px-2 h-8 bg-gray-900 rounded text-white text-center hover:bg-black disabled:bg-gray-500 text-sm w-full"
            type="submit"
            disabled={submitting}
          >
            {submitting ? <Spinner style={{ margin: '4px auto' }} /> : 'Subscribe'}
          </button>
        </div>
      )}
    </form>
  );
};

// return (
//     <form onSubmit={handleSubmit}>
//       {submitted ? (
//         <p className="text-slate-500 text-xs">Awesome! We'll make sure to keep you close at all times.</p>
//       ) : (
//         <div>
//           <p className="text-slate-500 text-xs mb-1">Subscribe to our newsletters.</p>
//           <div className="flex">
//             <input
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email"
//               className="p-1 h-8 text-sm outline-teal-600 border-1 border-slate-400 rounded-s w-full"
//             />
//             <button
//               className="p-1 h-8 bg-gray-900 rounded-e w-12 text-white text-center hover:bg-black disabled:bg-gray-500"
//               type="submit"
//               disabled={submitting}
//             >
//               {submitting ? <Spinner style={{ margin: '4px auto' }} /> : <IoIosSend className="mx-auto" />}
//             </button>
//           </div>
//         </div>
//       )}
//     </form>
//   );

export default NewsletterForm;
