class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return false;
        var nodeToPop = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = nodeToPop.prev;
            this.tail.next = null;
            //remove any links to the linked list since it is no longer
            nodeToPop.prev = null;
        }
        this.length--;
        return nodeToPop;
    }

    shift() {
        if (!this.head) return false;
        var nodeToShift = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeToShift.next;
            this.head.prev = null;
            nodeToShift.next = null;
        }
        this.length--;
        return nodeToShift;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.tail = newNode;
        } else {
            let currentHead = this.head;
            currentHead.prev = newNode;
        }
        this.head = newNode;
        this.length++;
    }

    get(index) {
        if (index >= this.length || index < 0 || !index) return null;
        var middle = this.length / 2;
        if (index > this.length / 2) {
            var i = this.length - 1;
            var currentNode = this.tail;
            while (i >= middle) {
                var previousNode = currentNode.prev;
                if (i === index) return currentNode;
                currentNode = previousNode;
                i--;
            }
        } else {
            var i = 0;
            var currentNode = this.head;
            while (i <= middle) {
                if (i === index) return currentNode;
                currentNode = currentNode.next;
                i++;
            }
        }
    }

    set(index, value) {
        var nodeToSet = this.get(index);
        if (!nodeToSet) return false;
        nodeToSet.val = value;
        return true;
    }
}

let dll = new DoublyLinkedList();
for (let i = 1; i <= 10; i++) {
    dll.push(i);
}
dll.set(9, 100);
console.log(dll);
