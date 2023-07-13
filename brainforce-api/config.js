require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  const dbURL =
    "postgres://lvyylqduxoxadl:628aa61aab619e578c9fd8b3a010c7a81d662a52b7b2fa3cc5ffa47ca3a5f707@ec2-35-169-11-108.compute-1.amazonaws.com:5432/db5ggnervia89d";
  return dbURL;
}

const BCRYPT_WORK_FACTOR = 1;

console.log("Lifetracker Config:".red);
console.log("PORT:".blue, PORT);
console.log("BCRYPT_WORK_FACTOR".blue, BCRYPT_WORK_FACTOR);
console.log("Database:".blue, getDatabaseUri());
console.log("---");

module.exports = {
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri
};
