class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    const node = new Node(data);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}

const list = new LinkedList(1);
// list.append(2);
// list.append(3);
list.prepend(0);
console.log(list);