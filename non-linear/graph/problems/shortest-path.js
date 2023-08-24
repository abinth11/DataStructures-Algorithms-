class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    addVertex(vertex) {
      this.vertices.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.vertices.get(vertex1).push({ vertex: vertex2, weight: weight });
      this.vertices.get(vertex2).push({ vertex: vertex1, weight: weight });
    }
  
    dijkstra(startVertex) {
      const distances = new Map();
      const visited = new Map();
      const heap = new MinHeap();
  
      for (let vertex of this.vertices.keys()) {
        distances.set(vertex, Infinity);
        visited.set(vertex, false);
      }
  
      distances.set(startVertex, 0);
      heap.insert({ vertex: startVertex, distance: 0 });
  
      while (!heap.isEmpty()) {
        const { vertex } = heap.deleteMin();
  
        if (visited.get(vertex)) {
          continue;
        }
  
        visited.set(vertex, true);
  
        for (let edge of this.vertices.get(vertex)) {
          const distance = distances.get(vertex) + edge.weight;
  
          if (distance < distances.get(edge.vertex)) {
            distances.set(edge.vertex, distance);
            heap.insert({ vertex: edge.vertex, distance: distance });
          }
        }
      }
      return distances;
    }
  }
  
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(element) {
      this.heap.push(element);
      this.bubbleUp(this.heap.length - 1);
    }
  
    deleteMin() {
      const min = this.heap[0];
      const last = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.bubbleDown(0);
      }
  
      return min;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
  
        if (this.heap[parentIndex].distance <= this.heap[index].distance) {
          break;
        }
  
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    bubbleDown(index) {
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let minIndex = index;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].distance < this.heap[minIndex].distance) {
          minIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].distance < this.heap[minIndex].distance) {
          minIndex = rightChildIndex;
        }
  
        if (minIndex === index) {
          break;
        }
  
        [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
        index = minIndex;
      }
    }
  }

  
  const graph = new Graph();

// Add vertices to the graph
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');

// Add edges to the graph
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'E', 4);
graph.addEdge('C', 'F', 6);
graph.addEdge('D', 'E', 1);
graph.addEdge('D', 'F', 3);
graph.addEdge('E', 'F', 1);
graph.addEdge('E', 'G', 2);
graph.addEdge('F', 'G', 3);

// Find the shortest path between two vertices
const distances = graph.dijkstra('A');
console.log(distances)
console.log(distances.get('G'));
