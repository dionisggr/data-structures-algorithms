const linkedList = function () {
  
  const self = this;

  const Node = function(value, next) {
    this.value = value;
    this.next = next;
  };

  let head = null;
  let last = null;
  let first = new Node(null, last);

  self.insert = (value) => {
    if (!first.value) {
      first = last = new Node(value, last);
    } else if (!last) {
      last = new Node(value, null);
    } else {
      head = first;
      while (head.next) {
        head = head.next;
      };
      head.next = new Node(value, null);
    }
  };

  self.show = () => {
    head = first;
    while (head) {
      console.log(head);
      head = head.next;
    };
  };

  self.update = (value, newValue) => {
    head = first;
    while (head) {
      if (head.value === value) {
        head.value = newValue;
      };
      head = head.next;
    };
  };

  self.delete = (value) => {
    head = first;
    if (first.value === value) {
      first = first.next;
    };
    while (head.next && head.next.value !== value) {
      head = head.next;
    };
    if (!head || head.value !== value) {
      return 'Value not found.';
    };
    head.next = head.next.next;
  };

  return self;
};

/* EXECUTIONS */

const list = new linkedList();

list.insert(1);
list.insert(2);
list.update(2, 5);
list.show();
