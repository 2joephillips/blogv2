import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({ post }) => (
  <Link to={`/blog/${post.slug}`}>
    <div className="tile is-child box">
      <Img alt="" fluid={post.heroImage.fluid} />
      <h3>{post.title}</h3>
      <small>{post.publishDate}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: post.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </Link>
);
