class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        return temp;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var currentHead = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return currentHead;
            }
            currentHead = currentHead.next;
        }
    }

    set(index, value) {
        var found = this.get(index);
        if (!found) {
            return false;
        }
        found.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            this.push(val);
        } else if (index === 0) {
            this.unshift(value);
        } else {
            var newNode = new Node(value);
            var prev = this.get(index - 1);
            var temp = prev.next;
            prev.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === this.length) {
            this.pop();
        } else if (index === 0) {
            this.shift();
        } else {
            var nodeToRemove = this.get(index);
            var nextNode = nodeToRemove.next;
            var prev = this.get(index - 1);
            prev.next = nextNode;
            this.length--;
            return nodeToRemove;
        }
    }

    reverse() {
        var prev = null;
        var current = this.head;
        while (current) {
            var nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return true;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList();
for (let i = 0; i < 10; i++) {
    list.push(i + 1);
}
// console.log(list.reverse());
list.print();
