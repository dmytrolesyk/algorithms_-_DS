'use strict';

const Graph = require('../S27_Graphs/graph');
const Queue = require('../S21_StacksQueues/queue');

const graph = new Graph();

const bfs = (g, start) => {
  const visited = {};
  const q = new Queue();
  q.enqueue(start);
  while (q.size) {
    const vertex = q.dequeue();
    if (!visited[vertex]) {
      visited[vertex] = true;
      g.adjacencyList[vertex].forEach(n => q.enqueue(n));
    }
  }
  return Object.keys(visited);
};

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(bfs(graph, "A"));