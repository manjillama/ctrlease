import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';
import { log } from 'console';

const IndexPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  console.log('Instrument slug', slug);

  return (
    <Layout>
      <div className="text-center py-10">
        <div className="text-2xl font-bold">Whateves</div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
