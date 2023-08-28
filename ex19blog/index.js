const autor = require("./autor");

const author = new autor("Caio");
const Poster = author.addPost("Lorem 2");
console.log(author)