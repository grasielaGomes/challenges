class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  print() {
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return console.log(array);
  }

  printReverse() {
    const array = [];
    let current = this.tail;
    while (current) {
      array.push(current.data);
      current = current.previous;
    }
    return console.log(array);
  }

  append(data) {
    const node = new Node(data);
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(data) {
    const node = new Node(data);
    node.previous = null;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(index, data) {
    if (index >= this.length) {
      return this.append(data);
    }
    if (index === 0) {
      return this.prepend(data);
    }
    const node = new Node(data);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = node;
    node.next = follower;
    node.previous = leader;
    follower.previous = node;
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    leader.next.next.previous = leader;
    leader.next = leader.next.next;
    this.length--;
    return this;
  }
}

const list = new DoublyLinkedList(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insert(1, 9);
// list.remove(2);
// console.log(list);
list.print();
list.printReverse();

