const app = require("./src/app");
const PORT = 3055;

const serve = app.listen(PORT, () => {
  console.log("WSV eComic server is running on port " + PORT);
});

process.on("SIGINT", () => {
  serve.close(() => {
    console.log("WSV eComic server is shutting down ");
    // send notify
  });
});
