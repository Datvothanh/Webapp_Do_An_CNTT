require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-stack.mmpuev1.mongodb.net/mern-stack?retryWrites=true&w=majority`,
//       {}
//     );

//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };

// connectDB();

const app = express();
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
