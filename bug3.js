function doSomething(i) {
  if (i < 10) {
    return 1;
  } else if (i < 20) {
    return 2;
  }
}

function testDoSomething() {
  // if (bad thing) { return false; }
  // if (other bad thing) { return false; }
  // ...
  // return true;

  // if no bad things encountered, return true
  return true;
}

if (testDoSomething()) {
  console.log("pass");
} else {
  console.log("fail");
}
