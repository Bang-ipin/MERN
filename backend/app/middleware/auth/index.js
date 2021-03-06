import jwt from "jsonwebtoken";
import db from '../../models/index.js'
import ErrorResponse from "../../utils/errorResponse.js";

const User = db.user;

const Protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not Authorized to access this route", 401));
  }

  try {
    const decoded   = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user      = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not Authorized to access this route", 401));
  }
};
export default Protect;
