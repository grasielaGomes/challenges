// Task
// The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, root , pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the integer height of the binary search tree.

// Task
// A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, , pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
    this.getHeight = function(root) {
        if (root === null) return -1;
        return (
          Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1
        );

    }; // End of function getHeight

    // Start of function levelOrder
    this.levelOrder = function(root) {
        if (root === null) return;
        const queue = [];
        let result = "";
        queue.push(root);
        while (queue.length) {
            const node = queue.shift();
            result += node.data + " ";
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        console.log(result);
    } // End of function levelOrder

    this.removeDuplicates = function(head) {
        if (head === null) return head;
        let current = head;
        while (current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return head;
    } // End of function removeDuplicates
}; // End of function BinarySearchTree