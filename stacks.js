// Stack definition
class Stack {
  constructor() {
    this.head = null;
  }
  peek() {
    return this.head;
  };
  display() {
    const current = this.head;
    const stack = [];
    while (current) {
      stack.push(current);
      current = current.next;
    }
    return stack;
  };
  push(data) {
    if (this.head) {
      this.head = new Node(data, this.head);
    }
    return this.head;
  };
  pop() {
    let removed;
    if (this.head) {
      removed = this.head;
      this.head = this.head.next;
      return removed;
    }
    return this.head;
  };
}