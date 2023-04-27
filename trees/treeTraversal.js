class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            if (value === current.value) return undefined;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        var current = this.root;
        while (true) {
            if (!current) return undefined;
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    bfs() {
        var node = this.root;
        var queue = [];
        var visitied = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            visitied.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return visitied;
    }

    dfsPreOrder() {
        var visited = [];
        var current = this.root;
        function traverse(node) {
            visited.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return visited;
    }

    dfsPostOrder() {
        var visited = [];
        var current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    }

    dfsInOrder() {
        var visited = [];
        var current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.dfsInOrder());
// console.log(tree);
