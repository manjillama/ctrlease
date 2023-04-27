import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">{children}</div>
      <Footer />
    </div>
  );
}
