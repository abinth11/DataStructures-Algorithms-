class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }
    append(val) {
        let node = new Node(val)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }
    removeHead() {
        if (this.isEmpty()) {
            return
        }
        let removed = this.head;
        this.head = this.head.next;
        this.size--;
        return removed;
    }
    print() {
        let result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }
}


class Queue {
    constructor() {
        this.q = new LinkedList();
    }
    isEmpty() {
        return this.q.isEmpty();
    }
    enequeue(val) {
        return this.q.append(val);
    }
    dequeue() {
        return this.q.removeHead();
    }
    peek() {
        return this.q.head.val;
    }
    print() {
        return this.q.print();
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
    bfs(startVertex) {
        const visited = {};
        var queue = new Queue();
        visited[startVertex] = true;
        queue.enequeue(startVertex);
        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue();
            console.log(currentVertex.val);
            this.adjacencyList[currentVertex.val].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.enequeue(neighbor);
                }
            });

        }
    }
     dfs(adjList, startVertex) {
        const visited = new Set();
        this._dfsHelper(adjList, startVertex, visited);
      }
      
      _dfsHelper(adjList, vertex, visited) {
        visited.add(vertex);
        console.log(vertex);
        
        const neighbors = adjList[vertex];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            this._dfsHelper(adjList, neighbor, visited);
          }
        }
      }
      
}

let myGraph = new Graph();
myGraph.insert(5, 10, false)
myGraph.insert(10, 15, false)
myGraph.insert(10, 30, false)
myGraph.insert(30, 20, false)
myGraph.insert(15, 20, false)
myGraph.insert(20, 5, false)
myGraph.insert(100, 200, true)
// console.log(myGraph.hasEdge(5, 100))
// myGraph.removeVertex(10)
// myGraph.removeEdge(15, 5)
// myGraph.print();
myGraph.dfs(myGraph.adjacencyList,5)