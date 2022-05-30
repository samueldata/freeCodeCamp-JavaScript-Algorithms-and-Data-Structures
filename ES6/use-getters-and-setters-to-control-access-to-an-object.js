// Only change code below this line
class Thermostat{
  constructor (thermos) {
    this.thermos = thermos;
  }
  get temperature() {
      return  temp = 5/9 * (this.thermos - 32);
  }
  set temperature(temp) {
    this.thermos = temp * 9.0 / 5 + 32;
      // this.thermos = temp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius