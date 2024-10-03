const jwt = require("jsonwebtoken");
const AuthenticationMiddleware = {
  authenticate: (req, res, next) => {
    try {
      let token = req.headers.authorization.split(" ")[1];
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).send("Unauthorized");
    }
  },
  generateToken: (user) => {
    let token = jwt.sign(
      {
        email: user.email,

        userName: user.userName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "6h",
      }
    );
    return token;
  },
};

module.exports = AuthenticationMiddleware;
