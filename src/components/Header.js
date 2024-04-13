import React from "react";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <Helmet>
      <title>Blake Trapnell: Web Developer extrodinaire</title>
      <meta
        name="description"
        content="Blake Trapnell portfolio, a one stop website for all my projects and information"
      />
      <meta property="og:title" content="Blake Trapnell portfolio" />
      <meta
        property="og:description"
        content="Blake Trapnell portfolio, a one stop website for all my projects and information"
      />
      <meta
        property="og:image"
        content="https://blaketrapnell.com/BlakeTrapnellWebsite.png"
      />
      <meta property="og:url" content="https://www.BlakeTrapnell.com" />
      <meta name="twitter:title" content="Blake Trapnell portfolio" />
      <meta
        name="twitter:description"
        content="Blake Trapnell portfolio, a one stop website for all my projects and information"
      />
      <meta
        name="twitter:image"
        content="https://blaketrapnell.com/BlakeTrapnellWebsite.png"
      />
      <meta
        name="twitter:card"
        content="https://blaketrapnell.com/BlakeTrapnellWebsite.png"
      />
    </Helmet>
  );
};

export default Header;
