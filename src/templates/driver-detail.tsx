import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { formatDate, getWordInitials, instrumentBoxColors, readingTimeInMin } from '../utils';
import { AiFillGithub } from 'react-icons/ai';

export default function DriverDetail({ data }: any) {
  const { html, frontmatter } = data.driver;
  const { title, date, githubURL, instrument, instrumentSlug } = frontmatter;

  return (
    <Layout>
      <div className="max-w-[1024px] mx-auto">
        <div className="">
          <div className=" pb-6 mb-6 border-slate-200 border-b">
            <div className="flex">
              <Link to={`/instruments/${instrumentSlug}`}>
                <div
                  style={{
                    backgroundColor: `${
                      instrumentBoxColors[Math.floor(instrument.length % instrumentBoxColors.length)] || '#5BB194'
                    }`,
                  }}
                  className={`shrink-0 w-14 h-14 mt-[6px] text-white font-bold text-center leading-[54px] rounded`}
                >
                  {getWordInitials(instrument)}
                </div>
              </Link>
              <div className="pl-4">
                <h1 className="text-5xl">{title}</h1>
                <div className="text-xs text-slate-500">
                  {formatDate(date)} • {readingTimeInMin(html)} min read
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {githubURL && (
            <div className="mb-2 flex justify-end">
             <p>Github Link </p> 
              <a href={githubURL} target="_black" rel="noopener noreferrer">
                <AiFillGithub size={26} />
              </a>
            </div>
          )}
          <div className="driver-detail" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ data }: any) => {
  const { title } = data.driver.frontmatter;
  return <SEO title={`${title} | CtrlEase`} />;
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
        githubURL
        instrument
        instrumentSlug
      }
    }
  }
`;
