const User = require('../models/user')

const register = async (req, res) => {
  try {
    const { email, password, fullname } = req.body
    if (!email || !password || !fullname) {
      return res.status(400).json({
        status: false,
        message: 'Missing input'
      })
    }
    const response = await User.create(req.body)
    return res.status(200).json({
      status: response ? true : false,
      response
    })
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email === 1) {
      res.status(400).send({ status: false, message: 'Email already exists' });
    } else {
      res.status(500).send({ status: false, message: 'Internal server error' });
    }
  }
}

module.exports = {
  register
}