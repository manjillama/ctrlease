import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-[1024px] mx-auto py-12">
        <div>
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="mb-4">
            We provide high-level APIs to access your hardware, making instrumentation accessible to any scientist and
            engineer. With reusable building blocks of code, scientists and engineers will spend less time interfacing
            with instruments but more time utilizing their devices.
          </p>
          <h2 className="font-bold">Automating hardware shouldn&apos;t be a chore</h2>
          <p>
            Learn how to speed up your product development cycle today.{' '}
            <Link to="/contact" className="text-sky-600 hover:text-sky-700 hover:underline">
              Contact us
            </Link>{' '}
            if you want to interface with any device or module.
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:gap-24 gap-4 my-8">
          <Link to="/tutorials">
            <div className="bg-[#E7A95C] p-4 rounded text-white h-40 hover:shadow-xl transition-all">
              <h3 className="font-bold mb-2 text-lg">Tutorials</h3>
              <p>Helping you get up to speed</p>
            </div>
          </Link>
          <Link to="/drivers">
            <div className="bg-[#CD64DE] p-4 rounded text-white h-40 hover:shadow-xl transition-all">
              <h3 className="font-bold mb-2 text-lg">Drivers</h3>
              <p>Look up supported instruments</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
