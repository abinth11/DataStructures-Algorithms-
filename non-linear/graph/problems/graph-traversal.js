// Node class for the linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Linked list class for the queue
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    enqueue(value) {
      let node = new Node(value);
  
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
  
      this.length++;
    }
  
    dequeue() {
      if (this.length === 0) return null;
  
      let removedNode = this.head;
  
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = removedNode.next;
      }
  
      removedNode.next = null;
      this.length--;
  
      return removedNode.value;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  }

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    insert(vertex1, edge, isBidirectional) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[edge]) {
            this.addVertex(edge);
        }
        this.adjacencyList[vertex1].add(edge);
        if (isBidirectional) {
            this.adjacencyList[edge].add(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let vertexAdj of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, vertexAdj)
        }
        delete this.adjacencyList[vertex];
    }
    print() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex + " ->", [...this.adjacencyList[vertex]]);
        }

    }
  
  // Breadth-First Search implementation for a disconnected graph with visited nodes implemented as an object and a queue implemented with a linked list
   bfs(graph) {
    let queue = new Queue();
    let visited = {};
  
    // Iterate over all nodes in the graph
    for (let node in graph) {
      if (!visited[node]) {
        queue.enqueue(node);
        visited[node] = true;
  
        while (!queue.isEmpty()) {
          let currentNode = queue.dequeue();
          console.log(currentNode);
          
          let neighbors = graph[currentNode];
          for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.enqueue(neighbor);
            }
          }
        }
      }
    }
  }

    // Recursive DFS function
    dfsHelper(node, visited) {
        visited[node] = true;  // Mark the current node as visited
        console.log(node);     // Print the node value

        // Traverse all the neighbors of the current node
        const neighbors = this.adjacencyList[node];
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited);  // Recursively call DFS for the neighbor
            }
        }
    }
    dfs(graph) {
        // Call DFS for each unvisited node in the graph
        let visited = {};
        for (let node in graph) {
            if (!visited[node]) {
                this.dfsHelper(node, visited);
            }
        }
    }
}

let myGraph = new Graph();
myGraph.insert(5, 10, true)
myGraph.insert(10, 15, true)
myGraph.insert(15, 20, true)
myGraph.insert(100, 200, false)
myGraph.insert(1,2,true)
// myGraph.insert(10, 30, false)
// myGraph.insert(30, 20, false)
// myGraph.insert(15, 20, false)
// myGraph.insert(20, 5, false)
// myGraph.insert(100, 200, true)
// console.log(myGraph.hasEdge(5, 100))
// myGraph.removeVertex(10)
// myGraph.removeEdge(15, 5)
// myGraph.print();
// myGraph.dfs(myGraph.adjacencyList)
myGraph.bfs(myGraph.adjacencyList)
