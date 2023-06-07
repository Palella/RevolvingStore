import React from "react";
import PropTypes from "prop-types";

function SEO({ title }) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Revolving Store Inc. | {title}</title>
      <meta name="robots" content="noindex, follow" />
      <meta
        name="description"
        content="Where Disruption Meets Retail. Revolutionizing shopping, one city at a time. Starting in NYC 🗽🌎"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;
