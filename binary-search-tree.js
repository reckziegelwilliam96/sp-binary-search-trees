class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
      if (!this.root) {
        this.root = new Node(val);
        return this;
      } else {
        let current = this.root;
        while (true) {
          if (val < current.val) {
            if (current.left === null) {
              current.left = new Node(val);
              return this;
            } else {
              current = current.left;
            }
          } else if (val > current.val) {
            if (current.right === null) {
              current.right = new Node(val);
              return this;
            } else {
              current = current.right;
            }
          } else {
            return undefined;
          }
        }
      }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(!this.root) {
      this.root = new Node(val);
      return this;
    }
    function helper(node) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
          return this;
        } else {
          helper(node.left);
        }
      } else if (val > node.val) {
        if (node.right === null) {
          node.right = new Node(val);
          return this;
        } else {
          helper(node.right);
        }
      } else {
        return undefined;
      }
    }
    return helper(this.root);

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return undefined;
    let current = this.root;
    while (true) {
      if (val === current.val) return current;
      if (val < current.val) {
        if (current.left === null) return undefined;
        current = current.left;
      }
      if (val > current.val) {
        if (current.right === null) return undefined;
        current = current.right;
      }
    }
      return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
      if (!this.root) return undefined;
      function helper(node) {
        if (val === node.val) return node;
        if (val < node.val) {
          if (node.left === null) return undefined;
          return helper(node.left);
        }
        if (val > node.val) {
          if (node.right === null) return undefined;
          return helper(node.right);
        }
      }
      return helper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];
    let visited = [];
    function helper(node) {
      visited.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    if (!this.root) return visited;
    function helper(node) {
      if (node.left) helper(node.left);
      visited.push(node.val);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return visited;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    if(!this.root) return visited;
    function helper(node) {
      if(node.right) helper(node.right);
      visited.push(node.val);
      if(node.left) helper(node.left);
    }
    helper(this.root);
    return visited;
  }
  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(!this.root) return [];
    let visited = [];
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    if(!this.root) return null;
    let current = this.root;
    let parent = null;
    while (current && current.val !== val) {
      parent = current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (!current) return null;

    const hasLeftChild = current.left !== null;
    const hasRightChild = current.right !== null;

    if (!hasLeftChild && !hasRightChild) {
      if(!parent){
        this.root = null;
      } else if (parent.left === current){
        parent.left === null;
      } else {
        parent.right === null;
      }
    } else if (hasLeftChild && !hasRightChild) {
      if(!parent){
        this.root = current.left;
      } else if (parent.left === current){
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (!hasLeftChild && hasRightChild) {
      if (!parent) {
        this.root = current.right;
      } else if (parent.left === current){
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {
      const successorParent = current;
      let successor = current.right;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
      current.val = successor.val; // Replace the value of the current node with the successor
      if (successorParent.left === successor) {
        successorParent.left = successor.right; // Update parent's reference to the successor's right child
      } else {
        successorParent.right = successor.right; // Update parent's reference to the successor's right child
      }
  }
    
      return current; // Return the removed node
}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
