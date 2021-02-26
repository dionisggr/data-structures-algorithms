class _Node {
  constructor(value, next) {
    this.value(value);
    this.next(next);
  }
}

// Linked List definition
class LinkedList {
  constructor() {
    this.head = null;
  }
  find(item) {
    let current = this.head;
    while (current.value !== item) {
      if (!current.next) return null;
      current = current.next;
    }
    return current;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  insertLast(item) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(item, null)
  }

  insertBefore(find, item) {
    const current = this.head;
    while (current.next.value !== find) {
      current = current.next;
    }
    const node = new Node(item, current.next)
    current.next = node;
  }

  insertAfter(find, item) {
    const current = this.head;
    while (current.value !== find) {
      current = current.next;
    }
    current.next = new Node(item, current.next);
  };

  insertAt(int, item) {
    const current = this.head;
    for (i = 0; i < int - 1; i++) {
      if (current.next) {
        current = current.next;
      };
    };
    current = new Node(item, current)
  };

  remove(item) {
    let current = this.head;
    while (current.next.value !== item) {
      current.next = current.next.next;
      ;
    }
  };

  reverse() {
    let current = this.head;
    let previous = null;
    while (current.value) {
      const temp = current.next;
      current.next = previous;
      current = temp;
      previous = current;
    };
  };

  thirdFromEnd() {
    let current = this.head;
    while (current.next.next.next) {
      current = current.next;
      ;
    }
    return current;
  };

  middleOfList() {
    let current = this.head;
    let idx = 0;
    while (current.next) {
      current = current.next;
      idx++;
    };
    const limit = Math.ceil(idx / 2);
    current = this.head;
    let previous;
    for (i = 0; i < limit; i++) {
      previous = current;
      current = current.next;
    };
    if (limit % 2 === 0) {
      return [previous, current];
    }
    return current;
  };

  // Detects if there is a loop
  detectCycle() {
    let current = this.head;
    let previous = [];
    while (current.next) {
      if (previous.includes(current.value)) {
        return true;
      };
      previous.push(current);
      current = current.next;
    };
    return false;
  };
};