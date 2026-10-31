const express = require("express");

const {
  createProduct,
  getMyProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const authenticate = require("../Middleware/authMiddleware");
const requireApprovedVendor = require("../Middleware/vendorMiddleware");

const router = express.Router();

router.post(
  "/",
  authenticate,
  requireApprovedVendor,
  createProduct
);

router.get(
  "/my-products",
  authenticate,
  requireApprovedVendor,
  getMyProducts
);

router.get(
  "/:productId",
  authenticate,
  requireApprovedVendor,
  getProductById
);

router.patch(
  "/:productId",
  authenticate,
  requireApprovedVendor,
  updateProduct
);

router.delete(
  "/:productId",
  authenticate,
  requireApprovedVendor,
  deleteProduct
);

module.exports = router;