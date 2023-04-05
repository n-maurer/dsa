class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var nodeToQueue = new Node(val);
        if (!this.first) {
            this.first = nodeToQueue;
            this.last = nodeToQueue;
        } else {
            this.last.next = nodeToQueue;
            this.last = nodeToQueue;
        }
        this.size++;
        return nodeToQueue;
    }

    dequeue() {
        if (!this.first) return null;
        var nodeToDequeue = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = nodeToDequeue.next;
        this.size--;
        return nodeToDequeue;
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
// queue.enqueue(3);
queue.dequeue();
console.log(queue);
