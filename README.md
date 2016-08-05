Tasks

Write isEven() function that takes one argument and returns true if the number is even, and false if the number is odd.Using recursion is mandatory.
Write a polyfill for a .bind() function and save it in Function.prototype.bindMe(). This way your bindMe function will be available for any function in your code same as apply, call and bind. myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Hint: play with the function in Function.prototype and see what this points to inside it.

Your code should look like:

Function.prototype.bindMe = function () {
  // your code here
}

No need of module.exports for this one

Invocation example:

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.bindMe({
  prop: 9
});
bound(1)  // 10


Write fibonacci() function that returns n-th Fibonacci number. The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two. Using recursion is mandatory. You will get additional bonus points for this task in case your function works for very big numbers.
Hint: in order to make the function work with big numbers - use a technique called memoization - cache the results of previous function calls somewhere inside your function.

Invocation example:
fibonacci(0)    // 0
fibonacci(1)    // 1
fibonacci(3)    // 2
fibonacci(6)    // 8
fibonacci(25)    // 75025
fibonacci(999)    // 2.686381002448534e+208