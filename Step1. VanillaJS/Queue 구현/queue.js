class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    size() {
        return this.rear - this.front;
    }
}


const queue = new Queue();
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.dequeue();
queue.enqueue(8);
console.log(queue);