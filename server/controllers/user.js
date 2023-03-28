const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { email, password, fullname, username } = req.body;
    if (!email || !password || !fullname || !username) {
      return res.status(400).send({
        status: false,
        message: 'Missing input'
      })
    }
    const user = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] })
    if (user) {
      return res.status(400).send({
        status: false,
        message: `Failed! ${user.username === username ? 'Username' : 'Email'} is already in use!`
      })
    }
    const response = await User.create({ ...req.body, password: bcrypt.hashSync(req.body.password, 8) });
    return res.status(200).json({
      status: response ? true : false,
      response
    })
  } catch (error) {
    res.status(500).send({ status: false, message: 'Internal server error' });
  }
}

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).send({
        status: false,
        message: 'Missing input'
      })
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ status: false, message: "Invalid Username" });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(400).send({
        status: false,
        message: "Invalid Password!",
      });
    }
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: 86400 });
    return res.status(200).send({
      status: true,
      data: {
        username: user.username,
        email: user.email,
        token
      }
    });
  } catch (error) {
    res.status(500).send({ status: false, message: 'Internal server error' });
  }
}