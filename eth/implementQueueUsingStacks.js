/**
 * queue 클래스는 push, pop, peek, empty의 메소드를 가지며 지문에서는 
 * 이를 오직 표준 스택 push, pop, peek, size등의 속성을 가진 스택으로 구현하라고 적혀있다.
 * 
 * 또한, 문제 지문의 하단에 분할상환분석(Amortized Analysis)이라는 낯선 단어가 나오는데
 * 이는 최악의 케이스만을 고려하는 시간 복잡도와는 다르게
 * n개의 작업이 이루어졌을 때 n개의 작업에 소요되는 시간을 모두 더하고 
 * 이를 n만큼 나누어 시간 복잡도를 표기하는 방법으로 
 * 즉, n개의 작업들이 모두 시간 복잡도를 나눠가져(분할상환) 평균 시간복잡도를 사용한다.
 * 
 * 아래 코드에서 작성한 sync라는 메소드는 outStack이 비어있을때만 
 * inStack으로 옮기는 비용 O(n)의 시간복잡도를 가지고 
 * 그 외의 경우에는 O(1)의 시간복잡도를 가지므로 이를 평균적으로 작업 수행 횟수와 나눈다면
 * Amortized O(1)이 되어 문제 기준을 충족한다.
 */

const MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
    return;
};

MyQueue.prototype.pop = function() {
    this.sync();
    
    return this.outStack.pop();
};

MyQueue.prototype.peek = function() {
    this.sync();

    return this.outStack[this.outStack.length-1];
};

MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};

MyQueue.prototype.sync = function() {
    if (this.outStack.length === 0) {
        while(this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
}