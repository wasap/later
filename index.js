var globals = ["document", "window", "later"],
    globalValues = {};

globals.forEach(function(g) {
  if (g in global) globalValues[g] = global[g];
});



module.exports = require("./later");

globals.forEach(function(g) {
  if (g in globalValues) global[g] = globalValues[g];
  else delete global[g];
});
