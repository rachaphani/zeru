const { request, gql } = require('graphql-request');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaker = require('../models/Restaker');

dotenv.config();
const SUBGRAPH_URL = process.env.SUBGRAPH_URL;

const RESTAKERS_QUERY = gql`
{
  delegations(first: 10) {
    id
    delegator
    operator {
      id
    }
    shares
  }
}`;

const fetchRestakers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const data = await request(SUBGRAPH_URL, RESTAKERS_QUERY);

    for (const delegation of data.delegations) {
      await Restaker.findOneAndUpdate(
        { userAddress: delegation.delegator },
        {
          userAddress: delegation.delegator,
          amountRestakedStETH: delegation.shares,
          targetAVSOperatorAddress: delegation.operator.id,
          lastUpdated: new Date(),
        },
        { upsert: true }
      );
    }
    console.log('Restakers updated.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

fetchRestakers();
