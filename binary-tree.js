const binaryTree = function() {
  
  const self = this;

  const Node = function(value) {
    this.value = value;
    this.left;
    this.right;
  };

  let root;
  let left;
  let right;

  self.insert = (value) => {
    if (!root) {
      root = new Node(value);
    } else {
      let current = root;
      while (current) {
        if (value < current.value) {

          if (!current.left) {
            current.left = new Node(value);
          }
          
          current = current.left;

        } else if (value > current.value) {

          if (current.right) {

            current = current.right;

          } else {

            current.right = new Node(value);
            
            return;
          };
        };
      };
    };
  };

  self.preOrder = function() {
    let current = root;
    if (!current) return;
    console.log(current.value);
    self.preOrder(current.left);
    self.preOrder(current.right);
  };

  self.inOrder = (current) => {
    if (current) {
      self.inOrder(current.left);
      console.log(current.value, current.right);
      self.inOrder(current.right);
    };
  };

  return this;
};


// Unfinished


const binary = binaryTree();

binary.insert(2);
binary.insert(3);
binary.inOrder(2);