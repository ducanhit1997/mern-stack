const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const register = asyncHandler(async(req, res) => {
  const { email, password, fullname } = req.body
  if (!email || !password || !fullname) {
    return res.status(400).json({
      success: false,
      message: 'Missing input'
    })
  }
  const response = await User.create(req.body)
  return res.status(200).json({
    success: response ? true : false,
    response
  })
})

module.exports = {
  register
}