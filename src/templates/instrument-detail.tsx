import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { getWordInitials, instrumentBoxColors } from '../utils';
import InstrumentDrivers from '../components/instrumentsDrivers';

export default function DriverDetail({ data }: any) {
  const {
    instrument: { name, description, slug },
  } = data;

  return (
    <Layout>
      <div className="max-w-[1024px] mx-auto">
        <div className="flex pb-6 border-slate-300 border-b">
          <div
            style={{
              backgroundColor: `${
                instrumentBoxColors[Math.floor(name.length % instrumentBoxColors.length)] || '#5BB194'
              }`,
            }}
            className={`shrink-0 w-14 h-14 mt-[6px] text-white font-bold text-center leading-[54px] rounded`}
          >
            {getWordInitials(name)}
          </div>
          <div className="pl-4">
            <p className="font-bold">{name}</p>
            <span className="text-slate-500 text-sm">{description}</span>
          </div>
        </div>
        <div className="py-6">
          <InstrumentDrivers instrumentSlug={slug} />
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ data }: any) => {
  // const { title } = data.driver.frontmatter;
  return <SEO />;
};

export const query = graphql`
  query InstrumentDetail($slug: String) {
    instrument: instrumentsJson(slug: { eq: $slug }) {
      slug
      name
      description
    }
  }
`;
