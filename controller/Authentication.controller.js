const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const AuthenticationMiddleware = require("../middleware/Authentication.middleware");

const AuthController = {
  signUp: async (req, res) => {
    var { email, userName, password } = req.body;
    let ifUserFounded = await UserModel.findOne({ email: email });
    if (ifUserFounded) {
      return res.send("User already exist");
    }
    let hashedPassword = await bcrypt.hash(password, 10);

    let user = new UserModel({
      email: email,
      userName: userName,
      password: hashedPassword,
    });
    let dataSaved = await user.save();
    if (dataSaved) {
      res.status(200).json("user registered ");
    }
  },
  login: async (req, res) => {
    var { email, password } = req.body;
    let ifUserExist = await UserModel.findOne({ email: email });
    if (!ifUserExist) {
      return res.send("User Not Found");
    }
    let isPasswordMatched = await bcrypt.compare(
      password,
      ifUserExist.password
    );
    if (!isPasswordMatched) {
      return res.send("Password is not matched");
    } else {
      const token = AuthenticationMiddleware.generateToken(ifUserExist);
      return res.send({
        status: "success",
        data: ifUserExist,
        token,
      });
    }
  },
};

module.exports = AuthController;
