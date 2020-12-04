thing = 10;

function isMatch(something) {
  if (thing = something) {
    return true;
  } else {
    return false;
  }
}


console.log(isMatch(10)); // should be true
console.log(isMatch(20)); // should be false
