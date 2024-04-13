import React from "react";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <Helmet>
      <title>Blake Trapnell's Portfolio</title>
      <meta
        name="description"
        content="Check out Blake Trapnell's portfolio for his latest projects and information."
      />
      {/* Add Open Graph and Twitter meta tags */}
      <meta property="og:title" content="Blake Trapnell's Portfolio" />
      <meta
        property="og:description"
        content="Check out Blake Trapnell's portfolio for his latest projects and information."
      />
      <meta
        property="og:image"
        content="https://blaketrapnell.com/BlakeTrapnellWebsite.png"
      />
      <meta property="og:url" content="https://www.BlakeTrapnell.com" />
      <meta name="twitter:title" content="Blake Trapnell's Portfolio" />
      <meta
        name="twitter:description"
        content="Check out Blake Trapnell's portfolio for his latest projects and information."
      />
      <meta
        name="twitter:image"
        content="https://blaketrapnell.com/BlakeTrapnellWebsite.png"
      />
      <link rel="icon" href="%PUBLIC_URL%/BT.svg" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/BT.svg" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    </Helmet>
  );
};

export default Header;
