class Orbit {
    constructor(name, distance, craters) {
      this.name = name;
      this.distance = distance;
      this.craters = craters;
    }
}
  
class Vehicle {
    constructor(name, speed, craterTime) {
      this.name = name;
      this.speed = speed;
      this.craterTime = craterTime;
    }
  
    getTimeToTravel(orbit, weather) {
      const modifiedCraters = orbit.craters * weather.craterModifier;
      return (orbit.distance / this.speed) + (modifiedCraters * this.craterTime / 60);
    }
}
  
class Weather {
    constructor(name, craterModifier) {
      this.name = name;
      this.craterModifier = craterModifier;
    }
}
  
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
  
// Sample inputs
const weather = windy;
const orbit1Speed = 14; // megamiles/hour
const orbit2Speed = 20; // megamiles/hour
  
// Finding the best option based on the inputs
const bestOption = findBestOption(weather, orbit1Speed, orbit2Speed);
console.log(`Input: Weather is ${weather.name}`);
console.log(`Input: Orbit1 traffic speed is ${orbit1Speed} megamiles/hour`);
console.log(`Input: Orbit2 traffic speed is ${orbit2Speed} megamiles/hour`);
console.log(`Expected Output: ${bestOption}`);

module.exports = { Orbit, Vehicle, Weather, findBestOption };