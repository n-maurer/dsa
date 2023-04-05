class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var nodeToPush = new Node(val);
        if (this.size === 0) {
            this.first = nodeToPush;
            this.last = nodeToPush;
        } else {
            var first = this.first;
            nodeToPush.next = first;
            this.first = nodeToPush;
        }
        this.size++;
        return nodeToPush;
    }

    pop() {
        if (this.size === 0) return null;
        var firstNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            firstNode.next = null;
        } else {
            this.first = firstNode.next;
            firstNode.next = null;
        }
        this.size--;
        return firstNode;
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);
