import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../styles/main.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>

        <div className="hero-body">
          <div className="container">
            <main>{children}</main>
          </div>
        </div>

        <div className="hero-foot">
          <footer className="footer">
            <div className="content has-text-centered">
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
