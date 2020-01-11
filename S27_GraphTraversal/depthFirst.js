'use strict';

const Graph = require('../S27_Graphs/graph');
const Stack = require('../S21_StacksQueues/stack');

const graph = new Graph();

const dfsR = (g, start) => {
  const res = [];
  const visited = {};
  (function dfs(vertex) {
    if (!vertex) return;
    visited[vertex] = true;
    res.push(vertex);
    g.adjacencyList[vertex].forEach(n => !visited[n] && dfs(n));
  })(start);
  return res;
};

const dfsI = (g, start) => {
  const visited = {};
  const s = new Stack();
  s.push(start);
  while (s.size) {
    const vertex = s.pop();
    if (!visited[vertex]) {
      visited[vertex] = true;
      g.adjacencyList[vertex].forEach(n => s.push(n));
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

console.log(dfsR(graph, "A"));
console.log(dfsI(graph, "A"));