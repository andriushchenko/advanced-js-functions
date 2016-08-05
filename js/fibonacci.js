var fibonacci = (function() {
  var memo = {};
  return function(n) {
    if (memo[n]) {
      return memo[n];
    }
    return memo[n] = (n <= 2) ? 1 : fibonacci(n-2) + fibonacci(n-1);
  };
})();

module.exports = fibonacci;
