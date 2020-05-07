const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  request(("https://api.thecatapi.com/v1/breeds/search?q=" + breedName), (error, response, body) => {
    //callback(error, null);
    const data = JSON.parse(body);
    breedName[0].toUpperCase();
    if (data.length > 1 || (data[0].name) !== breedName) {
      callback("Breed not found", null);
    } else {
      callback(error, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };