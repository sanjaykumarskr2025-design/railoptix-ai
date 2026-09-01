const stations = [
{
id: "MAS",
name: "Chennai Central",
code: "MAS",
city: "Chennai",
state: "Tamil Nadu",
platforms: 17,
position: { x: -8, y: 0, z: 0 },
status: "Operational"
},
{
id: "AJJ",
name: "Arakkonam Junction",
code: "AJJ",
city: "Arakkonam",
state: "Tamil Nadu",
platforms: 8,
position: { x: -4, y: 0, z: 1 },
status: "Operational"
},
{
id: "KPD",
name: "Katpadi Junction",
code: "KPD",
city: "Vellore",
state: "Tamil Nadu",
platforms: 6,
position: { x: 0, y: 0, z: 0 },
status: "Operational"
},
{
id: "SA",
name: "Salem Junction",
code: "SA",
city: "Salem",
state: "Tamil Nadu",
platforms: 6,
position: { x: 4, y: 0, z: 1 },
status: "Operational"
},
{
id: "ED",
name: "Erode Junction",
code: "ED",
city: "Erode",
state: "Tamil Nadu",
platforms: 4,
position: { x: 8, y: 0, z: 0 },
status: "Operational"
},
{
id: "CBE",
name: "Coimbatore Junction",
code: "CBE",
city: "Coimbatore",
state: "Tamil Nadu",
platforms: 6,
position: { x: 12, y: 0, z: -1 },
status: "Operational"
}
];

const railwayRoutes = [
{
id: "route-1",
name: "Chennai - Coimbatore Main Line",
stations: ["MAS", "AJJ", "KPD", "SA", "ED", "CBE"]
},
{
id: "route-2",
name: "Chennai - Salem Section",
stations: ["MAS", "AJJ", "KPD", "SA"]
},
{
id: "route-3",
name: "Salem - Coimbatore Section",
stations: ["SA", "ED", "CBE"]
}
];

function getStationById(id) {
return stations.find(station => station.id === id);
}

function getStationByCode(code) {
return stations.find(
station => station.code.toLowerCase() === code.toLowerCase()
);
}

function getAllStations() {
return [...stations];
}

function getRouteById(id) {
return railwayRoutes.find(route => route.id === id);
}

function getAllRoutes() {
return [...railwayRoutes];
}

function getConnectedStations(stationId) {
const connected = new Set();

}

function searchStations(query) {
const text = query.trim().toLowerCase();

}

function getStationStatistics() {
return {
totalStations: stations.length,
totalPlatforms: stations.reduce(
(total, station) => total + station.platforms,
0
),
operationalStations: stations.filter(
station => station.status === "Operational"
).length
};
}

/*
3D POSITION HELPER

*/

function getStationPosition(stationId) {
const station = getStationById(stationId);

}

console.log("RailOptix AI: Station database loaded");
console.log("Stations:", stations.length);
console.log("Routes:", railwayRoutes.length);
