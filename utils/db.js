const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://kurama324:kurama324@cluster0.2cnke.mongodb.net/node-auth";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
