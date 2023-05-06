import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { IInstrument } from '../interfaces';
import InstrumentsBoxes from '../components/instruments-box';
import { SEO } from '../components/seo';
import Searchbar from '../components/searchbar';

const DriversPage: React.FC<
  PageProps<{
    allInstrumentsJson: { edges: { node: IInstrument }[] };
  }>
> = ({ data }) => {
  const instruments = data.allInstrumentsJson.edges;

  return (
    <Layout>
      <div className="text-center pb-10">
        <div className="text-2xl font-bold">Devices</div>
        <p className="text-slate-500">APIs to help you communicate with your hardware</p>
      </div>
      <Searchbar />
      <InstrumentsBoxes instruments={instruments.map((instrument) => instrument.node)} />
      <div className="text-center py-10">
        <p className="text-slate-500">
          Don't see your device in this list? Please
          <Link to="/contact" className="text-teal-600 hover:text-teal-500 hover:underline">
            {' '}
            contact us
          </Link>{' '}
          us and we'll add more!
        </p>
      </div>
    </Layout>
  );
};

export default DriversPage;

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

export const Head: HeadFC = () => <SEO title="Drivers | CtrlEase" />;
