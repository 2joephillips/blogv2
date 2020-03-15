import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/postPreview';

class BlogPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const postList = posts.map((post, index) => {
      return <PostPreview key={index} post={post.node} />;
    });
    return (
      <Layout>
        <SEO title="Blog" />
        <h1 className="is-size-1-desktop is-size-2-touch has-text-centered is-uppercase">
          Blog
        </h1>
        <div className="columns is-multiline">{postList}</div>
      </Layout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
