const dbConnection = require("./config/dbConnectin");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();


const PORT = process.env.PORT || 8000;
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const admissionRoute = require("./routes/admissionRoute");
const prospectusRoute = require("./routes/prospectusRoute");
const { notFound, errorHandler } = require("./util/error");


//config setup
app.use(cors());
app.use(express.json());
app.disable("x-powered-by")


//API Route
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/admission", admissionRoute);
app.use("/api/prospectus", prospectusRoute);
app.use(notFound);
app.use(errorHandler);


// api config
app.listen(PORT, () => {
    dbConnection()
    console.log(`app is listing to port:${PORT}`);
})