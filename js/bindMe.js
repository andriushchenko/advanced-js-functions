Function.prototype.bindMe = function(context) {
  var args = Array.prototype.slice.call(arguments, 1),
      funcToBind = this;
  return function() {
    return funcToBind.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  };
}
