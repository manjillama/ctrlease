import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { log } from 'console';

export default function DriverDetail({ data }: any) {
  const { html, frontmatter } = data.driver;
  const { title } = frontmatter;

  return (
    <Layout>
      <div className="max-w-[1024px] mx-auto">
        <div className="container-md blog-detail">
          <h1 className="title">{title}</h1>
          <div>
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
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
        date
        title
      }
    }
  }
`;
