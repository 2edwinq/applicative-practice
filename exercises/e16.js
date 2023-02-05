import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const yearDiscover = data.asteroids.map(function (asteroid) {
    return asteroid.discoveryYear;
  })

  const results = yearDiscover.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
  }, {})

  let compare = 1;
  for (let prop in results) {
    if (results[prop] > compare) {
      compare = results[prop]
      return parseInt(prop)
    }
  }
}





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
