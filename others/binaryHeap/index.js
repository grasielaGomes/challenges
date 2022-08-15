class MaxBinaryHeap {
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
    let largestChildIndex = 0;
    while (
      this.values[index] < this.values[leftChildIndex] ||
      this.values[index] < this.values[rightChildIndex]
    ) {
      if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
        largestChildIndex = leftChildIndex;
      } else {
        largestChildIndex = rightChildIndex;
      }
      this.swap(index, largestChildIndex);
      index = largestChildIndex;
      leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;
    }
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[index] > this.values[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  extractMax() {
    this.swap(0, this.values.length - 1);
    const max = this.values.pop();
    this.bubbleDown();
    return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.values);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax()); // 55
console.log(heap.values); // [41, 39, 33, 18, 27, 12]
