/*
** A general tree data structure is composed of nodes with children nodes. The first/top
 node is called the root node.
**
*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

/**
 * A binary tree is a type of tree that has only two children nodes: left and right
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * A binary tree always has a root node (the node at the top), which is initialized to null
before any element is inserted
 */

class BinaryTree {
  constructor() {
    this._root = null;
  }

  //Pre-order traversal ==> Pre-order traversal visits nodes in the following order: root (the current node), left,right;
  traversePreOrder() {
    traversePreOrderHelper(this._root);

    //traverse preorder helper function
    function traversePreOrderHelper(node) {
      if (!node) {
        //base case: when the node is null
        return;
      }
      //print the current node value and tarverse the left and right nodes, recursively
      console.log(node.value); //current node
      traversePreOrderHelper(node.left); //left node
      traversePreOrderHelper(node.right); //right node
    }
  }

  //In-order traversal ==> In-order traversal visits nodes in the following order: left,root (the current node),right;
  traverseInOrder() {
    traverseInOrderHelper(this._root);

    //traverse in-order helper function
    function traverseInOrderHelper(node) {
      if (!node) return;

      traverseInOrderHelper(node.left); //left node
      console.log(node.value); //current node
      traverseInOrderHelper(node.right); //right node
    }
  }

  //Post-order traversal ==> Post-order traversal visits nodes in the following order: left, right, root (the current node)
  traversePostOrder() {
    traversePostOrderHelper(this._root);

    //traverse post-order helper function
    function traversePostOrderHelper(node) {
      if (!node) return;

      if (node.left) {
        traversePostOrderHelper(node.left); //left
      }

      if (node.right) {
        traversePostOrderHelper(node.right); //right
      }

      console.log(node.value); //current node
    }
  }

  //Lever-order traversal (breadth first search) visits each node level by level instead of going deep into the left or right
  traverseLevelOrder() {
    const root = this._root;
    const queue = [];

    if (!root) {
      return;
    }
    queue.push(root);

    while (queue.length) {
      const temp = queue.shift();
      console.log(temp.value);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
  }
}
