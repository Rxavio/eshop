import asyncHandler from "express-async-handler";

const adminToken = asyncHandler(async (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send('Access Denied, Admin Authorized Only');
  next();
});
export default adminToken;
