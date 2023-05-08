import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-[1024px] mx-auto py-12">
        <div>
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            We provide high-level APIs to access your hardware, making instrumentation accessible to any scientist and
            engineer. With reusable building blocks of code, scientists and engineers will spend less time interfacing
            with instruments but more time utilizing their devices.
          </p>

          <h2 className="text-lg font-semibold mb-4 text-teal-500">Automating hardware shouldn&apos;t be a chore!</h2>
          <p>
            Learn how to speed up your product development cycle today by trying out our AI powered automation.{' '}
            <Link to="/contact" className="text-teal-600 hover:text-teal-500 hover:underline">
              Contact us
            </Link>{' '}
            if you want to interface with any device or module.
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:gap-24 gap-4 my-8">
          {/* <Link to="/tutorials">
            <div className="bg-[#202124] p-4 rounded text-white h-40 hover:shadow-xl transition-all">
              <h3 className="font-bold mb-2 text-lg">Tutorials</h3>
              <p>Helping you get up to speed</p>
            </div>
          </Link> */}
          <Link to="/">
            <div className="bg-[#202124] p-4 rounded text-white h-40 hover:shadow-xl transition-all">
              <h3 className="font-bold mb-2 text-lg">AI POWERED AUTOMATION</h3>
              <p>Generate code to orchestrate automation</p>
            </div>
          </Link>
          <Link to="/drivers">
            <div className="bg-[#009688] p-4 rounded text-white h-40 hover:shadow-xl transition-all">
              <h3 className="font-bold mb-2 text-lg">Drivers</h3>
              <p>Look up supported instruments</p>
            </div>
          </Link>

        </div>
        <div>
          {/* <h2 className="text-2xl font-bold mb-4">Application Areas</h2>
        <ol>
          <li className="mb-4"> Metrology</li>
          <li className="mb-4"> Advanced manufacturing</li>
          <li className="mb-4"> Photonics</li>
          <li className="mb-4"> Machine vision</li>
          <li className="mb-4"> Optogenetics</li>
          <li className="mb-4"> Spectroscopy</li>
          <li className="mb-4"> Optomechanics</li>
          <li className="mb-4"> Light measurement</li>
        </ol> */}

          <h2 className="text-2xl font-bold mb-4">Application Areas</h2>
          <ol className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-4">
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="ruler" className="text-2xl">
                  📏
                </span>
                <span>Metrology</span>
              </div>
            </li>
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="factory" className="text-2xl">
                  🏭
                </span>
                <span>Semiconductor manufacturing</span>
              </div>
            </li>
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="lightbulb" className="text-2xl">
                  💡
                </span>
                <span>Photonics</span>
              </div>
            </li>
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="eye" className="text-2xl">
                  👁️
                </span>
                <span>Machine vision</span>
              </div>
            </li>
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="brain" className="text-2xl">
                  🧠
                </span>
                <span>Optogenetics</span>
              </div>
            </li>
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="chart" className="text-2xl">
                  📊
                </span>
                <span>Spectroscopy</span>
              </div>
            </li>
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="gear" className="text-2xl">
                  ⚙️
                </span>
                <span>Optomechanics</span>
              </div>
            </li>
            <li className="mb-4 p-4 bg-gray-0 rounded shadow">
              <div className="flex items-center space-x-3 h-full">
                <span role="img" aria-label="sun" className="text-2xl">
                  ☀️
                </span>
                <span>Light measurement</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
