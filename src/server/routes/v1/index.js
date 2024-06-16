import { Router } from "express";
import errorHandler from "strong-error-handler";
import serverRoutes from "./server.route.js";

const router = Router();

router.use("/servers", serverRoutes);

router.get("/health", (req, res) => {
  res.send("Ok");
});

// Error handling middleware
router.use(
  errorHandler({
    debug: process.env.ENV !== "prod",
    log: true,
  })
);

export default router;
