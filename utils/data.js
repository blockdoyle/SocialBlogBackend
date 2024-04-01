const { User } = require("../models");

const names = [
  "John",
  "Emma",
  "Michael",
  "Olivia",
  "William",
  "Ava",
  "James",
  "Isabella",
  "Benjamin",
  "Sophia",
  "Jacob",
  "Mia",
  "Elijah",
  "Charlotte",
  "Alexander",
  "Amelia",
  "Daniel",
  "Harper",
  "Matthew",
  "Evelyn",
  "Henry",
  "Abigail",
  "Joseph",
  "Emily",
  "Samuel",
  "Elizabeth",
];

function getRandomUser() {
  const username = names[Math.floor(Math.random() * names.length)];
  const email = makeEmail(username.toLowerCase());
  return { username, email };
}

const makeEmail = (username) => {
  const domain = ["gmail", "yahoo", "outlook", "aol"];
  return `${username}@${domain[Math.floor(Math.random() * domain.length)]}.com`;
};

console.log(getRandomUser());

module.exports = { getRandomUser };
