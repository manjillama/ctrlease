import React, { useState } from 'react';
import { Spinner } from './spinner';
import DevCredit from './dev-credit';

const Footer = () => {
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
    <footer className="py-8 bg-slate-100">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[300px]">
          <form onSubmit={handleSubmit}>
            {submitted ? (
              <div className="text-center">
                <p className="text-xl">Thank you!</p>
                <span className="text-slate-500 text-sm">Awesome! We'll make sure to keep you close at all times.</span>
              </div>
            ) : (
              <div>
                <p className="text-center">Subscribe to our newsletters.</p>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="p-2 my-4 outline-teal-600 border-2 border-slate-400 rounded w-full"
                />
                <button
                  className="p-2 bg-gray-900 rounded w-full text-white text-center hover:bg-black disabled:bg-gray-500"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? <Spinner style={{ margin: '4px auto' }} /> : 'Subscribe'}
                </button>
              </div>
            )}
          </form>
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

export default Footer;
