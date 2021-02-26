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