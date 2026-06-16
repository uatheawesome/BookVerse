import { port } from "./config/index.js";
import { app } from "./app.js";
app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);

})