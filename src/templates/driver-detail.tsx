import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { formatDate, getWordInitials, instrumentBoxColors, readingTimeInMin } from '../utils';

export default function DriverDetail({ data }: any) {
  const { html, frontmatter } = data.driver;
  const { title, date, instrument } = frontmatter;

  return (
    <Layout>
      <div className="max-w-[1024px] mx-auto">
        <div className="">
          <div className="flex pb-6 mb-6 border-slate-300 border-b">
            <div
              className={`shrink-0 w-14 h-14 mt-[6px] text-white font-bold text-center leading-[54px] rounded ${
                instrumentBoxColors[Math.floor(instrument.length % instrumentBoxColors.length)] || 'bg-emerald-500'
              }`}
            >
              {getWordInitials(instrument)}
            </div>
            <div className="pl-4">
              <h1 className="text-5xl">{title}</h1>
              <div className="text-xs text-slate-500">
                {formatDate(date)} • {readingTimeInMin(html)} min read
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="driver-detail" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ data }: any) => {
  const { title } = data.driver.frontmatter;
  return <SEO title={title} />;
};

export const query = graphql`
  query DriverDetail($slug: String) {
    driver: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        author
        manufacturer
        connectionType
        application
        date
        instrument
        instrumentSlug
      }
    }
  }
`;
