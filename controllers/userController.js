const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  let { name, email, password } = req.body;
  
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = new User({ name, email, "password":hashedPassword });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({'email': email});
    
    if(user) {
      let resp = await bcrypt.compare(password, user.password);

      if(resp) {
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY);
        user.token = token;

        return res.status(200).json(user);
      } else {

        return res.status(404).json({ error: 'Invalid Credentials' });
      }

    } else {

      return res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};
