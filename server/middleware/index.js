const jwt = require('jsonwebtoken');

const generateAccessToken = (uid, role) => jwt.sign({ _id: uid, role }, process.env.JWT_SECRET, { expiresIn: '2d' })
const generateRefreshToken = (uid) => jwt.sign({ _id: uid }, process.env.JWT_SECRET, { expiresIn: '7d' })
const verifyToken = (req, res, next) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token expired' });
  }
}


module.exports = {
  verifyToken,
  generateAccessToken,
  generateRefreshToken
};