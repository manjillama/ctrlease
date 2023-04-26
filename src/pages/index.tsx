import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Searchbar from '../components/searchbar';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="text-center py-10">
        <div className="text-2xl font-bold">Devices</div>
        <p className="text-slate-500">Helping you communicate with your hardware.</p>
      </div>
      <Searchbar />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
