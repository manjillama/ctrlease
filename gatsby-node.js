const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const instrumentsPromise = graphql(`
    query Instruments {
      instruments: allInstrumentsJson {
        nodes {
          slug
        }
      }
    }
  `);

  const driversPromise = graphql(`
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

  const [instrumentsData, driversData] = await Promise.all([instrumentsPromise, driversPromise]);

  instrumentsData.data.instruments.nodes.forEach((node) => {
    actions.createPage({
      path: `/instruments/${node.slug}`,
      component: path.resolve(`./src/templates/instrument-detail.tsx`),
      context: {
        slug: node.slug,
      },
    });
  });

  driversData.data.drivers.nodes.forEach((node) => {
    actions.createPage({
      path: `/drivers/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/driver-detail.tsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
