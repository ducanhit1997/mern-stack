const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token expired' });
  }
}

module.exports = {
  verifyToken
};