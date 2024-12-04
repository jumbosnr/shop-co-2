import React from 'react';
import { Helmet } from 'react-helmet'; // Assuming you're using Helmet

function Head() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Store</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </Helmet>
  );
}

export default Head;