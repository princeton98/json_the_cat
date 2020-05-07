const { fetchBreedDescription } = require("./breedFetcher");

let breed = process.argv[2];
let breedName = String(breed);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(desc);
  }
});