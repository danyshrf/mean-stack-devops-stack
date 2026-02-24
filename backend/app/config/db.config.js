/*module.exports = {
  url: "mongodb://localhost:27017/dd_db"
*/

module.exports = {
  url: process.env.MONGO_URL || "mongodb://mongodb:27017/tutorials_db"
}

