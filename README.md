# binarysearchtree
A no dependency implementation of a binary search tree in JavaScript.


###### The code below will result in a binary search tree that looks like the following image:

![Binary Search Tree](http://www.nczonline.net/images/wp-content/uploads/2009/06/500px-Binary_search_tree.svg_-300x250.png)
```javascript
var tree, node;

node = new Node(8);
tree = new Tree(node); // node serves as the root node

node = new Node(8);
tree.add(node); // increments counter on the node with value 8

node = new Node(3);
tree.add(node); // becomes the left child of 8

node = new Node(1);
tree.add(node); // becomes the left child of 3

node = new Node(6);
tree.add(node); // becomes the right child of 3

node = new Node(4);
tree.add(node); // becomes the left child of 6

node = new Node(7);
tree.add(node); // becomes the right child of 6

node = new Node(10);
tree.add(node); // becomes the right child of 8

node = new Node(14);
tree.add(node); // becomes the right child of 10

node = new Node(13);
tree.add(node); // becomes the left child of 14

tree.depth(); // 4

console.log(tree.root); 	 // Node {value: 8, left: Node, right: Node, count: 2, parent: null…}
console.log(tree.root.left); // Node {value: 3, left: Node, right: Node, count: 1, parent: Node…}
console.log(tree.root.right); 	 // Node {value: 10, left: null, right: Node, count: 1, parent: Node…}
/* tree.root.right expanded view
	{
		count: 1
		depth: 2
		isLeftChild: false
		isRightChild: true
		left: null
		parent: Node
		right: Node
		root: Node
		value: 10
	}
*/

tree.isRoot(tree.root); 	 // true
tree.isRoot(tree.root.left); // false

tree.search(14) // Node {value: 14, left: Node, right: null, count: 1, parent: Node…}
tree.search(8)  // Node {value: 8, left: Node, right: Node, count: 2, parent: null…}
tree.search(55) // null
```
