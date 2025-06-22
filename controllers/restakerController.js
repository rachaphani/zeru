const Restaker = require('../models/Restaker');

exports.getRestakers = async (req, res) => {
  try {
    const restakers = await Restaker.find({});
    res.json(restakers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
