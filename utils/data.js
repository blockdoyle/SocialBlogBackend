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

const getRandomUser = () => {
  return names[Math.floor(Math.random() * names.length)];
};

const makeEmail = (name) => {
  return `${name.toLowerCase()}@acme.com`;
};

module.exports = { getRandomUser, makeEmail };
