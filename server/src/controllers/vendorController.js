const Vendor = require("../models/Vendor");

const applyAsVendor = async (req, res) => {
  try {
    const {
      businessName,
      phone,
      address,
    } = req.body;

    
    if (!businessName || !phone || !address) {
      return res.status(400).json({
        message: "Business name, phone and address are required",
      });
    }

    
    const existingVendor = await Vendor.findOne({
      userId: req.user.userId,
    });

    if (existingVendor) {
      return res.status(409).json({
        message: "Vendor application already exists",
        status: existingVendor.status,
      });
    }

    
    const vendor = await Vendor.create({
      userId: req.user.userId,
      businessName,
      phone,
      address,
    });

    return res.status(201).json({
      message: "Vendor application submitted successfully",
      vendor,
    });
  } catch (error) {
    console.error("Vendor application error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  applyAsVendor,
};