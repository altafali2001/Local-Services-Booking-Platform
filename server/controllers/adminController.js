import User from "../models/User.js";

export const getPendingProviders = async (req, res) => {

  const providers = await User.find({
    role: "provider",
    status: "pending"
  });

  res.json(providers);

};

export const approveProvider = async (req, res) => {

  await User.findByIdAndUpdate(
    req.params.id,
    { status: "approved" }
  );

  res.json({ message: "Provider Approved" });

};

export const rejectProvider = async (req, res) => {

  await User.findByIdAndUpdate(
    req.params.id,
    { status: "rejected" }
  );

  res.json({ message: "Provider Rejected" });

};