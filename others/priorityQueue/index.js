class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1]
    ];
  }
  bubbleDown() {
    let index = 0;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let smallestChildIndex = 0;
    while (
      this.values[index]?.priority > this.values[leftChildIndex]?.priority ||
      this.values[index]?.priority > this.values[rightChildIndex]?.priority
    ) {
      if (
        this.values[leftChildIndex]?.priority <
        this.values[rightChildIndex]?.priority
      ) {
        smallestChildIndex = leftChildIndex;
      } else {
        smallestChildIndex = rightChildIndex;
      }
      this.swap(index, smallestChildIndex);
      index = smallestChildIndex;
      leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;
    }
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.values[parentIndex] || this.values[0];
    let child = this.values[index];
    while (child?.priority < parent?.priority) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  enqueue(value, priority) {
    this.values.push(new Node(value, priority));
    this.bubbleUp();
  }
  dequeue() {
    this.swap(0, this.values.length - 1);
    const min = this.values.pop();
    this.bubbleDown();
    return min;
  }
}

const heap = new MinBinaryHeap();
heap.enqueue(41, 1); // 41
heap.enqueue(39, 2); // 41, 39
heap.enqueue(33, 3); // 41, 39, 33
heap.enqueue(18, 4); // 41, 39, 33, 18
heap.enqueue(55, 7);
console.log(heap.values);
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.values);
