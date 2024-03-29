const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require('../middleware');

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
        message: `${user.username === username ? 'Username' : 'Email'} is already in use!`
      })
    }
    const response = await User.create({ ...req.body, password: bcrypt.hashSync(req.body.password, 8) });
    return res.status(200).json({
      status: response ? true : false,
      response
    })
  } catch (error) {
    res.status(500).send({ status: false, message: error });
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
    let passwordIsValid = false;
    const user = await User.findOne({ username });
    if (user) {
      passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
    }
    if (!user || !passwordIsValid) {
      return res.status(400).send({ status: false, message: "Invalid account" });
    }
    const token = jwt.sign({ id: user.id, fullname: user.fullname, email: user.email }, 'secret', { expiresIn: 86400 });
    const newRefreshToken = generateRefreshToken(user.id);
    await User.findByIdAndUpdate(user.id, { refreshToken: newRefreshToken })

    return res.status(200).send({
      status: true,
      token
    });
  } catch (error) {
    res.status(500).send({ status: false, message: 'Internal server error' });
  }
}

exports.refreshToken = async (req, res) => {
  try {
    const { userId } = req.body
    const token = jwt.sign({ id: userId }, 'secret', { expiresIn: 86400 });
    return res.status(200).send({
      status: true,
      token
    });
  } catch (error) {
    res.status(500).send({ status: false, message: 'Internal server error' });
  }
}