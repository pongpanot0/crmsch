const stamp = require("../controller/stamp");
module.exports = function (app) {
  app.post("/stamp", stamp.creted);
  app.get("/get", stamp.get);
  
};
