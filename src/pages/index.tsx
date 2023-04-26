import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Searchbar from '../components/searchbar';
import { graphql } from 'gatsby';
import { IInstrument } from '../interfaces';
import InstrumentsBoxes from '../components/instruments-box';
import { SEO } from '../components/seo';

const IndexPage: React.FC<
  PageProps<{
    allInstrumentsJson: { edges: { node: IInstrument }[] };
  }>
> = ({ data }) => {
  const instruments = data.allInstrumentsJson.edges;

  return (
    <Layout>
      <div className="text-center pb-10">
        <div className="text-2xl font-bold">Devices</div>
        <p className="text-slate-500">Helping you communicate with your hardware.</p>
      </div>
      <Searchbar />
      <InstrumentsBoxes instruments={instruments.map((instrument) => instrument.node)} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query GetAllInstruments {
    allInstrumentsJson {
      edges {
        node {
          name
          description
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <SEO />;
