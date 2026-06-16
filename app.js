import express from "express"
import cors from "cors"

import apiUrls from "./routes/index.js"
import { logger } from "./utils/logger.js"

export const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", logger, apiUrls)
