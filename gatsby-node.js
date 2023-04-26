const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Drivers {
      drivers: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.drivers.nodes.forEach((node) => {
    actions.createPage({
      path: `/drivers/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/driver-detail.tsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
