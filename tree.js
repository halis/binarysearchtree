function Tree(root) {
	this.root = root || null;
	if (this.root) {
		this.root.depth = 1;
		this.root.isLeftChild = false;
		this.root.isRightChild = false;
		this.root.parent = null;
	}

	function addNode(node, ptr, depth) {
		if (node == null) throw 'node is required';
		if (node.value == null) throw 'value is required';
		if (depth == null) depth = 2;

		if (ptr == null) ptr = this.root;

		node.root = this.root;

		if (node.value === ptr.value) {
			ptr.count++;
			return ptr;
		}
		else if (node.value < ptr.value) {
			if (ptr.left == null) {
				node.parent = ptr;
				ptr.left = node;
				node.depth = depth;
				node.isLeftChild = true;
				node.isRightChild = false;
				return node;
			}
			else addNode(node, ptr.left, depth + 1);
		}
		else if (node.value > ptr.value) {
			if (ptr.right == null) {
				node.parent = ptr;
				ptr.right = node;
				node.depth = depth;
				node.isLeftChild = false;
				node.isRightChild = true;
				return node;
			}
			else addNode(node, ptr.right, depth + 1);
		}
	}

	this.isRoot = function(node) {
		return node && node.depth === 1 && node.root == null;
	};

	this.add = function(node) {
		return addNode.bind(this)(node);
	};

	this.search = function(value, ptr) {
		var notFound = null;
		
		if (value == null) throw 'value is required';
		if (ptr == null) ptr = this.root;

		if (value === ptr.value) return ptr;
		else if (value < ptr.value) {
			if (ptr.left == null) return notFound;
			return this.search(value, ptr.left);
		}
		else if (value > ptr.value) {
			if (ptr.right == null) return notFound;
			return this.search(value, ptr.right);
		}
	};

	function traverse(depths, ptr, depth) {
		if (depths.indexOf(depth) === -1) depths.push(depth);
		if (ptr.left != null) traverse(depths, ptr.left, depth + 1);
		if (ptr.right != null) traverse(depths, ptr.right, depth + 1);
	}

	this.depth = function() {
		var depths = [];
		traverse(depths, this.root, 1);

		return Math.max.apply(null, depths);
	};
}

function Node(value, left, right) {
	this.value = value;
	this.left = left || null;
	this.right = right || null;
	this.count = 1;
	this.parent = null;
	this.root = null;
}

