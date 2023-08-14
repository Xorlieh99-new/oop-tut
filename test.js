const { Orbit, Vehicle, Weather } = require('./main');
  
// Creating instances for orbits, vehicles, and weather
const orbit1 = new Orbit("Orbit 1", 18, 20);
const orbit2 = new Orbit("Orbit 2", 20, 10);
  
const bike = new Vehicle("Bike", 10, 2);
const tuktuk = new Vehicle("Tuktuk", 12, 1);
const car = new Vehicle("Car", 20, 3);

const sunny = new Weather("Sunny", 0.9);
const rainy = new Weather("Rainy", 1.2);
const windy = new Weather("Windy", 1);
  
// Function to find the best option
function findBestOption(weather, orbit1Speed, orbit2Speed) {
    const vehicles = [bike, tuktuk, car];
    let bestTime = Infinity;
    let bestOption = null;
  
    for (const vehicle of vehicles) {
      const timeOrbit1 = vehicle.getTimeToTravel(orbit1, weather);
      const timeOrbit2 = vehicle.getTimeToTravel(orbit2, weather);
  
      if (orbit1Speed >= vehicle.speed && timeOrbit1 < bestTime) {
        bestTime = timeOrbit1;
        bestOption = `Vehicle ${vehicle.name} on ${orbit1.name}`;
      }
  
      if (orbit2Speed >= vehicle.speed && timeOrbit2 < bestTime) {
        bestTime = timeOrbit2;
        bestOption = `Vehicle ${vehicle.name} on ${orbit2.name}`;
      }
    }
  
    return bestOption;
}
  
// Function to run a test case
function runTest(weather, orbit1Speed, orbit2Speed, expectedOutput) {
    const result = findBestOption(weather, orbit1Speed, orbit2Speed);
    if (result === expectedOutput) {
      console.log('Test passed');
    } else {
      console.log('Test failed');
      console.log(`Expected: ${expectedOutput}`);
      console.log(`Actual: ${result}`);
    }
}
  
// Test cases
console.log('Running test cases');
runTest(sunny, 12, 10, 'Vehicle Tuktuk on Orbit 1');
runTest(windy, 14, 20, 'Vehicle Car on Orbit 2');
console.log('Test cases completed.');
  