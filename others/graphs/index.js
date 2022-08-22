class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }

  addVertex(node) {
    this.adjacencyList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  removeEdge(node1, node2) {
    this.adjacencyList[node1] = this.adjacencyList[node1].filter(
      (node) => node !== node2
    );
    this.adjacencyList[node2] = this.adjacencyList[node2].filter(
      (node) => node !== node1
    );
  }

  removeVertex(node) {
    while (this.adjacencyList[node].length) {
      const adjacentNode = this.adjacencyList[node].pop();
      this.removeEdge(node, adjacentNode);
    }
    delete this.adjacencyList[node];
    this.numberOfNodes--;
  }
  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(node) {
      if (!node) return null;
      visited[node] = true;
      result.push(node);
      adjacencyList[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  dfsIterative(start) {
    const stack = [];
    const result = [start];
    const visited = {};
    let currentVertex;

    stack.push(...this.adjacencyList[start]);
    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        stack.push(...this.adjacencyList[currentVertex]);
      }
    }

    return result;
  }

  dfsIterative2(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  showConnections() {
    for (let node in this.adjacencyList) {
      this.adjacencyList[node].forEach((neighbor) => {
        console.log(`${node} -> ${neighbor}`);
      });
    }
  }
}

const graph = new Graph();
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

console.log(graph.dfsIterative("A"));
console.log(graph.dfsIterative2("A"));
console.log(graph.dfsRecursive("A"));
console.log(graph.bfs("A"));
graph.showConnections();
