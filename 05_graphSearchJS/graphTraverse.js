/* undirected, unweighted, no cycle */

// Data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

/* adjacency list in the form of key-value pair, 
key=node, values=edges */

/* Use Map rather than Object
it has more API methods for algorithm problems */

// The graph
const adjacencyList = new Map();
// add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}
// add edge, undirected
function addEdge(origin, destination) {
    // add edge to origin node
    adjacencyList.get(origin).push(destination);
    // add edge to destination node
    adjacencyList.get(destination).push(origin);
}

// Create the graph with the Data
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));


console.log(adjacencyList)


// Breadth first search
/* need the starting node  */
function bfs(start) {
    const queue = [start];

    const visited = new Set();

    while(queue.length > 0) {
        const airport = queue.shift(); // mutates and return the shifted value
        const destinations = adjacencyList.get(airport); // get its edges

        for (const destination of destinations) {
            // queue.push(destination);
            if (destination === 'BKK') {
                console.log('Arrived at Bangkok!!');
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination); // see all the route
            }

        }
    }
}

bfs('PHX');


// Depth First 
function dfs(start, visited = new Set()) {
    console.log(start);

    visited.add(start);
    const destinations = adjacencyList.get(start);
    for (const destination of destinations) {
        if (destination === 'BKK') {
            console.log(`DFS reached Bangkok in ${visited.size} steps.`);
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}



dfs('PHX'); // find PHX-BKK route
