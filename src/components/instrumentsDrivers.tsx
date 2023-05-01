import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const InstrumentDrivers = ({ instrumentSlug }: { instrumentSlug: string }) => {
  const {
    drivers: { nodes },
  } = useStaticQuery(graphql`
    query GetInstrumentDriver {
      drivers: allMarkdownRemark {
        nodes {
          html
          frontmatter {
            title
            slug
            manufacturer
            date
            author
            connectionType
            application
            instrument
            instrumentSlug
          }
        }
      }
    }
  `);

  console.log('Drivers', nodes);

  const drivers = nodes.filter((node: any) => node.frontmatter.instrumentSlug === instrumentSlug);

  if (drivers.length <= 0)
    return (
      <div className="text-center py-20">
        <p className="font-bold mb-2">No driver resources found.</p>
        <p className="text-slate-500 text-sm">
          Don't see what you're looking for?{' '}
          <Link to="/contact" className="text-sky-600 hover:text-sky-700 hover:underline">
            Send us an email
          </Link>{' '}
          and our team will help you with it.
        </p>
      </div>
    );

  return (
    <div>
      {drivers.map((driver: any, i: number) => (
        <div key={driver.frontmatter.slug} className="border-slate-200 border mb-6 hover:shadow-md transition-all">
          <Link to={`/drivers/${driver.frontmatter.slug}`}>
            <div className="bg-gray-300 p-2 font-bold">
              {i + 1}. {driver.frontmatter.title}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-2 text-xs">
              <div>
                Manufacturer: <span className="text-slate-500">{driver.frontmatter.manufacturer || 'NA'}</span>
              </div>
              <div>
                Connection type: <span className="text-slate-500"> {driver.frontmatter.connectionType || 'NA'}</span>
              </div>
              <div className="md:text-right">
                Application: <span className="text-slate-500">{driver.frontmatter.application || 'NA'}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InstrumentDrivers;
