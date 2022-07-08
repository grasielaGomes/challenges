// Complete the insert function in your editor so that it creates a new Node (pass data as the Node constructor argument) and inserts it at the tail of the linked list referenced by the head parameter. Once the new node is added, return the reference to the head  node.
function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.insert = function (head, data) {
    let newNode = new Node(data);
    if (!head) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    //Return a reference to the  node of the linked list.
    return head;
  };
  this.display = function (head) {
    let start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}

function main() {
  const values = [1, 2, 3, 4, 5, 6];
  const T = 4;
  let head = null;
  const mylist = new Solution();
  for (i = 0; i < T; i++) {
    const data = values[i];
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}

main();
