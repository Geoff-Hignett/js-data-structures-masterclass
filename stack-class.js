class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let startNode = this.first;
      this.first = newNode;
      this.first.next = startNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.size === 0) return null;
    let firstNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return firstNode.val;
  }
}

let stack = new Stack();
stack.push('Tom');
stack.push('Dick');
stack.push('Harry');
