const User = require('../models/User');

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(404).send({ error: 'User not found' });
      return;
    }
    res.send({
      token: '123456',
    });
  } catch (e) {
    res.send({ error: e.message });
  }
};

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.send({ ok: true });
  } catch (e) {
    res.send({ error: e.message });
  }
};

module.exports = {
  signin,
  signup,
};
