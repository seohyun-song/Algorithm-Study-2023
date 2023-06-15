/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
*/

/*
Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
*/


var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop()); 
    }
    let res = this.stack2.pop();
    while (this.stack2.length !== 0) {      
        this.stack1.push(this.stack2.pop());
    }
    return res;
};
//stack1 배열에 있는 데이터를 모두 stack2로 옮긴 이후 stack2에서 pop 메소드를 호출하여 반환
//stack2에 남아있는 데이터를 stack1으로 다시 옮기면서 큐의 상태를 유지

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    let res = this.stack2.pop();
     this.stack1.push(res);
    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return res;
};
//stack2에서 데이터를 꺼낸 후, push 메소드를 호출하여 다시 stack1으로 옮기면서 큐의 상태를 유지

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
     return this.stack1.length === 0 && this.stack2.length === 0;
};

//stack1과 stack2의 길이를 모두 확인하여 둘 다 길이가 0이면 true를 반환하고, 그렇지 않으면 false를 반환