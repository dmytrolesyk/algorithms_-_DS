'use strict';

const PriorityQueue = require('../S24_BinaryHeap/priorityQueue');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({
      node: v2,
      weight
    })
    this.adjacencyList[v2].push({
      node: v1,
      weight
    });
  }
  shortestPath(start, finish) {
    const pq = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while(pq.values.length) {
      const vertex = pq.dequeue().val;
      if (vertex === finish) {
        let currentNode = vertex;
        while (previous[currentNode]) {
          path.push(currentNode);
          currentNode = previous[currentNode];
        }
        break;
      }
      this.adjacencyList[vertex]
      .forEach(({ node, weight }) => {
        const distance = distances[vertex] + weight;
        if (distance < distances[node]) {
          distances[node] = distance; 
          previous[node] = vertex;
          pq.enqueue(node, distance);
        }
      });
    }
    return path.concat(start).reverse();
  }
}

const g = new WeightedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1 );
g.addEdge("E", "F", 1 );

console.log(g.shortestPath("A", "E"));
