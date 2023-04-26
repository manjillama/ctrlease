const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Resources {
      resources: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.resources.nodes.forEach((node) => {
    actions.createPage({
      path: `/resources/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/resource-detail.tsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
