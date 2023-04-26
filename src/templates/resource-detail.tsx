import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function ResourceDetail({ data }: any) {
  const { html, frontmatter } = data.resource;
  const { title } = frontmatter;

  return (
    <Layout>
      <section>
        <div className="container-md blog-detail">
          <h1 className="title">{title}</h1>
          <div>
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ResourceDetail($slug: String) {
    resource: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
