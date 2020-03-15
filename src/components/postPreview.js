import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({ post }) => (
  <div className="column is-half">
    <Link to={`/blog/${post.slug}`}>
      <div className="box">
        <h2 className="">{post.title}</h2>
        <small>{post.publishDate}</small>

        <Img alt="" fluid={post.heroImage.fluid} />
        <p
          dangerouslySetInnerHTML={{
            __html: post.description.childMarkdownRemark.html,
          }}
        />
      </div>
    </Link>
  </div>
);
