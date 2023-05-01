import { HeadFC } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/layout';
import NewsletterForm from '../components/newsletter-form';

const NewsletterPage = () => (
  <Layout>
    <div className="max-w-[1024px] mx-auto py-20 relative z-10">
      <div className="bg-emerald-50 rounded-full h-[350px] w-[350px] block absolute z-[-1] m-[-70px]" />
      <NewsletterForm />
    </div>
  </Layout>
);

export default NewsletterPage;

export const Head: HeadFC = () => <SEO title={'Newsletter | CtrlEase'} />;
