import { HeadFC } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/layout';

const OverviewPage = () => (
  <Layout>
    <div className="max-w-[1024px] mx-auto py-20">
      <h1 className="text-2xl font-bold">Overview</h1>
      <p>This is overview page. To be added... 🤙</p>
    </div>
  </Layout>
);

export default OverviewPage;

export const Head: HeadFC = () => <SEO title={'Overview | CtrlEase'} />;
