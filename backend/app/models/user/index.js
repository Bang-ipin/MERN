import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

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
      refresh_token:{type: String},
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
    return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  userSchema.methods.getRefreshToken = function () {
    return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: process.env.JWT_REFRESH,
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
