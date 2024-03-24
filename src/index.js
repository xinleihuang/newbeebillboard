const nyrr = require('nyrr-results-api');
const fs = require('fs');

// console.log(nyrr.default.getDivisionResults);
// const divisionResults = await NyrrAPI.getDivisionResults("AM", 2023);
// console.log(divisionResults);

(async () => {
  const divisionResults = await nyrr.default.getDivisionsResults(2023);
  fs.writeFileSync('divisionResults2023.json', JSON.stringify(divisionResults, null, 2)); 
})()