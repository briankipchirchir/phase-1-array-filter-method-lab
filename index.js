// Sample data
const drivers = ['John Doe', 'Jane Smith', 'Bill Johnson', 'Mary Brown'];
const driverObjects = [
    { name: 'John Doe', hometown: 'New York' },
    { name: 'Jane Smith', hometown: 'Los Angeles' },
    { name: 'Bill Johnson', hometown: 'Chicago' },
    { name: 'Mary Brown', hometown: 'Miami' }
];
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}



console.log(findMatching(drivers, 'john')); 
console.log(findMatching(drivers, 'Jane')); 


console.log(fuzzyMatch(drivers, 'm')); 
console.log(fuzzyMatch(drivers, 'bi')); 
console.log(matchName(driverObjects, 'John')); 
console.log(matchName(driverObjects, 'mary'));
