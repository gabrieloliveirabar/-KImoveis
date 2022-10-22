import "reflect-metadata"
import "express-async-errors"
import express from "express"


import {userRouter} from "./routes/user.routes";
import {loginRouter} from "./routes/loginUser.routes";
import { categorieRouter } from "./routes/categorie.routes";
import { propertieRouter } from "./routes/properties.routes";

import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { scheduleRouter } from "./routes/schedules.routes";

const app = express()
app.use(express.json())
app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories",categorieRouter)
app.use("/properties",propertieRouter)
app.use("/schedules", scheduleRouter)

app.use(handleErrorMiddleware)


export default app