const jwt = require('jsonwebtoken');


const middleware = (req, res, next) => {

  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const key = "Mombu1234$";

  try {
    const decode = jwt.verify(token, key);
    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
module.exports = middleware;
