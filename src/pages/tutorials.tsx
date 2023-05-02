import { HeadFC } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/layout';

const TutorialPage = () => (
  <Layout>
    <div className="max-w-[1024px] mx-auto py-20">
      <h1 className="text-2xl font-bold">Tutorials</h1>
      <p>This is tutorials page. To be added...
        Things to put here.
        - What exactly are we trying to do?
        - How to use this website?
        - How to find resources?
        - How to connect to the COM port?
        - Various communication protocols?
        - What's next?
         🤙</p>
    </div>
  </Layout>
);

export default TutorialPage;

export const Head: HeadFC = () => <SEO title={'Tutorials | CtrlEase'} />;
