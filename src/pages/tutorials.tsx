import { HeadFC } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/layout';

const TutorialPage = () => (
  <Layout>
    <div className="max-w-[1024px] mx-auto py-20">
      <h1 className="text-2xl font-bold">Tutorials</h1>
      <p>This is tutorials page. To be added... 🤙</p>
    </div>
  </Layout>
);

export default TutorialPage;

export const Head: HeadFC = () => <SEO title={'Tutorials | CtrlEase'} />;
