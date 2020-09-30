module.exports = {
  diff: true,
  extension: ["js"],
  reporter: "spec",
  slow: 75,
  timeout: 2000,
  ui: "bdd",
  recursive: ["./test/**/*.spec.js"],
  require: ["@babel/register"]
}
