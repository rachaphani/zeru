const { request } = require('graphql-request');
require('dotenv').config();

const fetchFromSubgraph = async (query) => {
  return request(process.env.SUBGRAPH_URL, query);
};

module.exports = fetchFromSubgraph;
