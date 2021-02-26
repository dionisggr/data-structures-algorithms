// Queue definition
class Queue {
  constructor() {
    this.head = new Node(null, this.tail);
    this.tail = null;
  }

  enqueue(data) {
    if (!this.head.value) {
      this.head.value = data;
      return;
    }
    this.tail = new Node(data, this.tail);
    return this.tail;
  }

  dequeue() {
    if (!this.head.value) {
      return;
    }
    const removed = this.head;
    this.head = this.head.next;
    return removed;
  }
}