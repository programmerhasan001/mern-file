const app = require("./app");

const PORT = 4040;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
