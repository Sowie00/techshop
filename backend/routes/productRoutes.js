import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProductById,
  updateProduct,
  addProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";

router.route("/").get(getProducts).post(protect, admin, addProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct);

export default router;
