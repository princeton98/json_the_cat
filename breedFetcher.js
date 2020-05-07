const request = require("request");
let breed = process.argv.slice(2);
breed = String(breed);
request(("https://api.thecatapi.com/v1/breeds/search?q=" + breed), (error, response, body) => {
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);
  breed[0].toUpperCase();
  if (data.length > 1 || (data[0].name) !== breed) {
    throw new Error("Breed not found");

  }
  console.log(data[0].description);
});