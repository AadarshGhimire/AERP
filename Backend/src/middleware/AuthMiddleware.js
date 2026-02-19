import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token =
    req.cookies.jwtToken || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    req.user = {
      id: decoded.id || decoded._id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
