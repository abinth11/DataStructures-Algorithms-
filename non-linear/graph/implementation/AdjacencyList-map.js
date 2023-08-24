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
        this.head.next = this.head;
        this.size--;
        return removed;
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
}


class Graph {
    constructor() {
        this.graph = new Map();
    }
    addVertex(vertex) {
        this.graph.set(vertex, new Set());
    }
    insert(vertex, edge, isBidirectional) {
        if (!this.graph.has(vertex)) {
            this.addVertex(vertex)
        }
        if (!this.graph.has(edge)) {
            this.addVertex(edge);
        }
        this.graph.get(vertex).add(edge);
        if (isBidirectional) {
            this.graph.get(edge).add(vertex);
        }
    }
    hasEdge(vertex1, vertex2) {
        return this.graph.get(vertex1).has(vertex2) && this.graph.get(vertex2).has(vertex1)
    }
    removeEdge(vertex1, vertex2) {
        this.graph.get(vertex1).delete(vertex2);
        this.graph.get(vertex2).delete(vertex1);
    }
    removeVertex(vertex) {
        if (!this.graph.has(vertex)) {
            return
        }
        for (let vertexesAdj of this.graph.get(vertex)) {
            this.removeEdge(vertex, vertexesAdj)
        }
        this.graph.delete(vertex)
    }
    print() {
        for (const [key, value] of this.graph) {
            console.log(key + " ->", [...value]);
        }

    }
    bfs(graph, start) {
        let visited = new Set();
        let queue =new Queue();
        queue.enequeue(start);
        visited.add(start);
        while (queue.length > 0) {
            let node = queue.dequeue();
            console.log(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    depthfirstSearch() {

    }
}
let myGraph = new Graph();
myGraph.insert(5, 10, true)
myGraph.insert(5, 15, true)
myGraph.insert(10, 20, true)
myGraph.insert(15, 20, false)
// console.log(myGraph.hasEdge(5, 100))
// myGraph.removeVertex(10)
// myGraph.removeEdge(15, 5)
myGraph.print();
myGraph.bfs(myGraph,5)