// Stack implemented with linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.tail;
    this.tail = newNode;
  }

  pop() {
    if(this.isEmpty()) return null;
    const tail = this.tail;
    this.tail = tail.next;
    return tail.value;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

const stack = new Stack();
console.log(stack.peek());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());