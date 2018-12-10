let BinarySearchTree = require('./binary-search.js');

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//		  15
//		 /   \
//	  10   25
//	 / \   / \
//	 7 13 22 27
//	 / \  /
//   5 9 17

var root = BST.getRootNode();
console.log('PreOrder Algorithm');
BST.preorder(root);