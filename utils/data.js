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

const thoughts = [
  "The only way to do great work is to love what you do.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "In the middle of every difficulty lies opportunity.",
  "Believe you can and you're halfway there.",
  "The best way to predict the future is to create it.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "The secret of getting ahead is getting started.",
  "The only person you should try to be better than is the person you were yesterday.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The future depends on what you do today.",
];

function getRandomUser() {
  const username = names[Math.floor(Math.random() * names.length)];
  const email = makeEmail(username.toLowerCase());
  return { username, email };
}

function getRandomThought() {
  return thoughts[Math.floor(Math.random() * thoughts.length)];
}

const makeEmail = (username) => {
  const domain = ["gmail", "yahoo", "outlook", "aol"];
  return `${username}@${domain[Math.floor(Math.random() * domain.length)]}.com`;
};

console.log(getRandomUser());

module.exports = { getRandomUser, getRandomThought };
