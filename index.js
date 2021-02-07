let spaceShuttle = "Determination";
let shuttleSpeedMPH = 17500;
let distanceToMarsKM = 225000000;
let distanceToMoonKM = 384400;
let milePerKM = 0.621;
let milesToMars = distanceToMarsKM * milePerKM;
let hoursToMars = milesToMars / shuttleSpeedMPH; 
let daysToMars = hoursToMars / 24;

let milesToMoon = distanceToMoonKM * milePerKM;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;

console.log (spaceShuttle + " will take " + daysToMoon + " days to reach Moon." );
console.log (spaceShuttle + " will take " + daysToMars + " days to reach Mars." );

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus === true) {
  console.log ("Crew Ready");
} else {
  console.log ("Crew Not Ready");
}
if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log ("ALERT: Computer offline!")
}

if (shuttleSpeed > 17500) {
  console.log ("ALERT: Escape Velocity Reached!");
} else if (shuttleSpeed < 8000) {
  console.log ("ALERT: Cannot Maintain Orbit!");
} else {
  console.log ("Stable Speed");
}
