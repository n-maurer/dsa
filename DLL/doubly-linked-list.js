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
        const newNode = new Node(val);
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
        return true;
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
    }
}

let dll = new DoublyLinkedList();
for (let i = 1; i <= 10; i++) {
    dll.push(i);
}
dll.shift();

console.log(dll);
