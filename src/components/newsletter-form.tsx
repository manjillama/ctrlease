import React, { useState } from 'react';
import { Spinner } from './spinner';

const NewsletterForm = ({ footer }: { footer?: boolean }) => {
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
      setEmail('');
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (footer)
    return (
      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div className="text-center">
            <p className="text-xl text-white">Subscribed!</p>
            <span className="text-gray-500 text-sm">Awesome! We'll make sure to keep you close at all times.</span>
          </div>
        ) : (
          <div>
            <p className="text-center text-sm text-white">Subscribe to our newsletters.</p>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="p-1 h-8 text-sm outline-teal-600 outline-2 border-2 border-white rounded w-full mr-2 my-2"
            />
            <button
              className="py-1 px-2 h-8 bg-teal-600 rounded text-white text-center hover:bg-teal-700 disabled:bg-teal-600/75 text-sm w-full"
              type="submit"
              disabled={submitting}
            >
              {submitting ? <Spinner style={{ margin: '4px auto' }} /> : 'Subscribe'}
            </button>
          </div>
        )}
      </form>
    );

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <div>
          <h1 className="text-5xl font-bold mb-2">Subscribed</h1>
          <p className="mb-4">Awesome! We'll make sure to keep you close at all times.</p>
        </div>
      ) : (
        <div>
          <h1 className="text-5xl font-bold mb-2">Newsletter</h1>
          <p className="mb-4">Subscribe to our newsletters. Don't worry, we hate spam as much as you do.</p>
        </div>
      )}
      <div className="max-w-xs">
        <div>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-2 outline-teal-600 outline-2 border-2 border-slate-400 rounded mr-2 my-2 w-full"
          />
        </div>
        <button
          className="py-2 px-6 bg-teal-600 rounded text-white text-center hover:bg-teal-700 disabled:bg-teal-600/75 w-36"
          type="submit"
          disabled={submitting}
        >
          {submitting ? <Spinner style={{ margin: '4px auto' }} /> : 'Subscribe'}
        </button>
      </div>
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
