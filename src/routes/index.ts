import {Router} from "express"
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes"
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/categories", categoriesRoutes)
router.use("/Specifications",specificationsRoutes)
router.use("/users", usersRoutes)
router.use(authenticateRoutes)

export {router}