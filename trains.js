const trains = [
{
number: "12673",
name: "Cheran Express",
type: "Express",
source: "MAS",
destination: "CBE",
departure: "22:30",
arrival: "06:00",
platform: 4,
status: "Running",
speed: 82,
position: 0.15,
color: "#ffb84d"
},
{
number: "12674",
name: "Cheran Express",
type: "Express",
source: "CBE",
destination: "MAS",
departure: "22:00",
arrival: "05:45",
platform: 2,
status: "Running",
speed: 78,
position: 0.38,
color: "#4d7cff"
},
{
number: "12675",
name: "Kovai Express",
type: "Superfast",
source: "MAS",
destination: "CBE",
departure: "06:10",
arrival: "13:50",
platform: 5,
status: "On Time",
speed: 95,
position: 0.55,
color: "#35d9ff"
},
{
number: "12676",
name: "Kovai Express",
type: "Superfast",
source: "CBE",
destination: "MAS",
departure: "14:20",
arrival: "21:55",
platform: 3,
status: "On Time",
speed: 91,
position: 0.72,
color: "#39e58c"
},
{
number: "12083",
name: "Coimbatore Jan Shatabdi",
type: "Jan Shatabdi",
source: "MAS",
destination: "CBE",
departure: "07:10",
arrival: "14:00",
platform: 7,
status: "Delayed",
delay: 8,
speed: 68,
position: 0.28,
color: "#ff5577"
},
{
number: "12084",
name: "Coimbatore Jan Shatabdi",
type: "Jan Shatabdi",
source: "CBE",
destination: "MAS",
departure: "15:00",
arrival: "21:40",
platform: 1,
status: "On Time",
speed: 74,
position: 0.64,
color: "#ffb84d"
}
];

function getTrainByNumber(number) {
return trains.find(train => train.number === String(number));
}

function getTrainByName(name) {
return trains.filter(
train =>
train.name.toLowerCase().includes(name.toLowerCase())
);
}

function getAllTrains() {
return [...trains];
}

function getRunningTrains() {
return trains.filter(
train => train.status === "Running"
);
}

function getDelayedTrains() {
return trains.filter(
train => train.status === "Delayed"
);
}

function getTrainsAtStation(stationCode) {
return trains.filter(
train =>
train.source === stationCode ||
train.destination === stationCode
);
}

function searchTrains(query) {
const text = query.trim().toLowerCase();

}

function getTrainStatistics() {
return {
totalTrains: trains.length,

}

/*
TRAIN SIMULATION
*/

function updateTrainPositions(deltaTime) {

}

/*
GET TRAIN POSITION
*/

function getTrainPosition(train) {

}

/*
TRAIN ROUTE
*/

function getTrainRoute(train) {

}

/*
STATUS UPDATE
*/

function setTrainStatus(number, status) {

}

/*
DELAY UPDATE
*/

function setTrainDelay(number, minutes) {

}

/*
INITIAL DATA CHECK
*/

console.log(
"RailOptix AI: Train database loaded"
);

console.log(
"Total trains:",
trains.length
);
