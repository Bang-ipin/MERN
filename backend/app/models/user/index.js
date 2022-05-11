import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Joi from "joi";
import passwordComplexity from 'joi-password-complexity'

const UserModel = (mongoose) => {
  const userSchema = mongoose.Schema(
    {
      firstname: { type: String, required: [true, "Please provide a first name"] },
      lastname: { type: String, required: [true, "Please provide a last name"] },
      email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please fill a valid email address",
        ],
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false,
      },
      resetpasswordToken: { type: String },
      resetpasswordExpire: { type: Date },
    },
    {
      timestamps: true,
    }
  );

  userSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  userSchema.methods.getSignToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetpasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    this.resetpasswordExpire = Date.now() + 10 * (60 * 1000);
    return resetToken;
  };

  const User = mongoose.model("users", userSchema);
  return User;
};
export default UserModel;

// export const validateUser = (data) => {
//   const schema = Joi.object({
//       firstname: Joi.string().required().label("First Name"),
//       lastname: Joi.string().required().label("Last Name"),
//       email: Joi.string().required().label("Email"),
//       password: passwordComplexity().required().label("Password"),
//   });
//   return schema.validateUser(data);
// };
