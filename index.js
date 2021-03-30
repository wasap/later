var globals = ["document", "window", "later"],
    globalValues = {};

globals.forEach(function(g) {
  if (g in global) globalValues[g] = global[g];
});



module.exports = require("./later");
