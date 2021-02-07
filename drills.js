// Recursion drils
function countSheep(number) {
  if (number === 0) {
    console.log('SLEEP!');
    return;
  };
  console.log(number);
  countSheep(number - 1);
};

function powerCalculator(base, exp) {
  exp--;
  if (exp === 0) {
    return base;
  };
  return base * powerCalculator(base, exp);
};

function reverseString(string) {
  if (string.length === 1) {
    return string;
  };
  return string[string.length - 1]
    + reverseString(string.slice(0, string.length - 1));
};

function triangularNumber(number) {
  if (number === 0) {
    return number;
  };
  return number + triangularNumber(number - 1);
};

function fibonacci(sequence) {
  if (sequence < 2) {
    return sequence;
  };
  return fibonacci(sequence - 1) + fibonacci(sequence - 2);
};

function factorial(number) {
  if (number === 1) {
    return number;
  }
  return number * factorial(number - 1);
};

function maxSum(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + maxSum(array.slice(1));
};

function mergeArraysSorted(arr1, arr2) {
  return arr1.concat(arr2).sort();
};

function removeCharacters(string, remove) {
  if (string.length === 0) {
    return '';
  };
  if (!remove.includes(string[0])) {
    return string[0] + removeCharacters(string.slice(1), remove);
  } else {
    return removeCharacters(string.slice(1), remove);
  }
};

function productOfRest(array) {
  const total = array.reduce((total, val) => total * val, 1);
  return array.map(val => total / val)
}


// StringSplitter drill
function stringSplitter(string) {
  let i = 0;
  let betweenSymbols = '';
  let combined = [];
  if (string.length === 0) return [];
  while (string[i] && string[i].match(/[a-zA-Z0-9]/)) {
    betweenSymbols += string[i];
    i++;
  };
  if (betweenSymbols.length !== 0) {
    combined = [betweenSymbols];
  }
  return combined.concat(stringSplitter(string.slice(i + 1)));
};


// Maze solver attempt (unfinished)
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', 'e'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

function outOfMaze(maze, starting) {
  let [row, column] = starting;
  if (maze[row] && maze[row][column] === 'e') {
    return '';
  } else if (maze[row] && (maze[row][column] === ' ')) {
    maze[row][column] = '.';
    if (column < maze[row].length) {
      if (maze[row] && maze[row][column + 1] !== '*' && maze[row][column + 1] !== undefined && maze[row][column + 1] !== '.') {
        starting[1]++
        return 'R' + outOfMaze(maze, starting);
      }
    }
    if (row < maze.length) {
      if (maze[row + 1] && maze[row + 1][column] !== '*' && maze[row + 1][column] !== undefined && maze[row + 1][column] !== '.') {
        starting[0]++;
        return 'D' + outOfMaze(maze, starting);
      }
    }
  }
  if (column + 1 >= maze[0].length || (maze[row] && maze[row][column + 1] === '.') || (maze[row] && maze[row][column + 1] === '*')) {
    if (starting[1] < 1) {
      starting[0]--
      return 'U' + outOfMaze(maze, starting);
    }
    starting[1]--;
    return 'L' + outOfMaze(maze, starting);
  }
};


// Anagram
function anagram(string) {
  if (string.length === 1) {
    return string;
  };
  return string.split('').map((_, idx) => {
    if (string[idx] === anagram(string.slice(1))) {
      return '';
    }
    return string[idx] + anagram(string.slice(1));
  });
};


// Recursion (converts any string to URL-accepted string)
function URLify(string) {
  if (string[0] === ' ') {
    if (string.length === 1) {
      return '%20';
    }
    return '%20' + URLify(string.slice(1));
  }
  if (string.length === 1) {
    return string;
  }
  return string[0] + URLify(string.slice(1));
}


//Working with 2D Arrays (incomplete)
const Input = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

function twoDeeArray(arrays) {
  for (i = 0; i < arrays.length; i++) {
    while (arrays[i].indexOf(0) > 0) {
      const idx = arrays[i].indexOf(0);
      arrays.forEach(array => {
        array[idx] = 0;
      })
      arrays[i] = arrays[i].map(val => {
        return val * 0;
      })
    }
  }
  return arrays;
};


/* Arrays / Linked Lists */

//Node
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


// Hashmap definition
class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  };

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    };
    return this._hashTable[index].value;
  };

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    };
    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      this.length++;
    };
    this._hashTable[index] = {
      key,
      value,
      DELETED: false
    };
  };

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    };
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;
      };
    };
  };

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      };
    };
  };

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    };
    return hash >>> 0;
  };
};


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


// Arrays: Breadth-First Search implementation
function bfs(tree, values=[]) {
  const queue = new Queue();
  const node = tree.root;
  queue.enqueue(node);
  while (queue.length) {
    const node = queue.dequeue();
    values.push(node);
    if (node.left) {
      queue.enqueue(node.left);
    };
    if (node.right) {
      queue.enqueue(node.right);
    };
  };
  return values;
};

function removeDuplicates(string) {
  const obj = {};
  string.split(' ').forEach(word => {
    obj[word] = 1;
  });
  return Object.keys(obj);
};

/*              EXECUTIONS                 */

// console.log('countSheep(5)') && countSheep(5);
// console.log('powerCalculator(10, 2):', powerCalculator(10, 2));
// console.log('reverseString("What a year, 2020"):', reverseString('What a year, 2020.'));
// console.log('triangularNumber(5):', triangularNumber(5));
// console.log(stringSplitter('Battle of the Vowels: Hawaii vs. Grozny'));
// console.log(fibonacci(3));
// console.log(factorial(5));
// console.log(outOfMaze(maze, [0,0]))
// console.log(anagram('aal'));
// console.log(URLify('google.com/some query here'))
// console.log(maxSum([4, 6, -3, 5, -2, 1]));
// console.log(mergeArraysSorted([5,2,6], [3, 1]));
// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
// console.log(productOfRest([1,3,9,4]));
// console.log(twoDeeArray(Input));
console.log(removeDuplicates('hey hi hey hi'));