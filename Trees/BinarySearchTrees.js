/**
 * Binary search trees (BSTs) also have two children, left and right. However, in a binary
   search tree, the left child is smaller than the parent, and the right child is bigger than the
   parent. BSTs have this structure because this property enables for searching, inserting,
   and removing specific values with O(log2(n)) time complexity
 * 
 */

class BinarySearchTrees {
  constructor() {
    this._root = null;
  }

  insert(value) {
    //Inserting into the BST requires a couple of steps. First, if the root is empty, the root
    //becomes the new node. Otherwise, a while loop is used to traverse the BST until the
    //right condition is met. At each loop iteration, it is checked whether the new node is
    //greater or smaller than the currentRoot

    const newNode = { left: null, right: null, value: value };

    if (!this._root) {
      //assign the new node to the root node if the root node is empty
      this._root = newNode;
    } else {
      //loop traverse
      let currentNode = this._root;
      while (true) {
        if (currentNode.value > value) {
          //if it's less than the current node, put it on the left
          //increment if it's not a null, else insert it
          if (currentNode.left != null) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            break;
          }
        } else if (currentNode.value < value) {
          //if it's greater than the current node, put it on the right
          //increment if it's not a null, else insert it
          if (currentNode.right != null) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            break;
          }
        } else {
          //case that both are the same
          break;
        }
      }
    }
  }

  remove(value) {
    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value) {
      if (!root) {
        return null;
      } else if (value < root.value) {
        root.left = deleteRecursively(root.left, value);
      } else if (value > root.value) {
        root.right = deleteRecursively(root.right, value);
      } else {
        if (!root.left && !root.right) {
          //no child
          return null; //if the root has no child, delete it by returning null
        } else if (!root.right) {
          //only one child
          root = root.left; //if it has only one child, delete it by replacing it with it's child
          return root;
        } else if (!root.left) {
          //same as above (one child)
          root = root.right; // same as above
          return root;
        } else {
          //If the node has two children, either find the maximum of the left
          //subtree or find the minimum of the right subtree to replace that node.
          const temp = findMin(root.right); //minimum of the right subtree
          root.value = temp.value;
          root.right = deleteRecursively(root.right, temp.value);
          return root;
        }
      }
    }

    function findMin(root) {
      while (root.left) {
        root = root.left;
      }
      return root;
    }
  }

  findNode(value) {
    //Traversing the tree can be done by checking whether currentRoot is smaller or greater
    //than the value to be searched. If currentRoot is smaller, the right child is visited. If
    //currentRoot is bigger, the left child is visited

    let currentRoot = this._root;
    let found = false;
    while (currentRoot) {
      if (currentRoot.value < value) {
        currentRoot = currentRoot.right;
      } else if (currentRoot.value > value) {
        currentRoot = currentRoot.left;
      } else {
        //we have found the node
        found = true;
        break;
      }
    }
    return found;
  }
}

//Tests

// const BST = new BinarySearchTrees();

// BST.insert(2);
// BST.insert(4);
// BST.insert(1);
// BST.insert(5);
// BST.insert(3);

// BST.remove(3);
// const result3 = BST.findNode(3);
// console.log("search result for 3: ", result3);
// BST.insert(7);
// const result7 = BST.findNode(7);
// console.log("search result for 7: ", result7);
