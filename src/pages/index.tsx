import React from 'react';
import { Link } from 'gatsby';

import img from '../images/gatsby-icon.png';

const IndexPage = () => {
  return (
    <>
      <h1>Hi people</h1>
      <img src={img} alt="" />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  );
};

export default IndexPage;
