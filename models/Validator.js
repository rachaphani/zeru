const mongoose = require('mongoose');

const SlashEventSchema = new mongoose.Schema({
  timestamp: Number,
  amountStETH: String,
  reason: String,
});

const ValidatorSchema = new mongoose.Schema({
  operatorAddress: { type: String, required: true },
  totalDelegatedStakeStETH: String,
  slashHistory: [SlashEventSchema],
  status: String,
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Validator', ValidatorSchema);
