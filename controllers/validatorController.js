const Validator = require('../models/Validator');

exports.getValidators = async (req, res) => {
  try {
    const validators = await Validator.find({});
    res.json(validators);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
