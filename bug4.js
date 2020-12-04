function sumAll(array) {
  var total = 0;
  for (i = 1; i < array; i += 1) {
    total += array[i];
  }
  return total;
}

const arr = [12, 35, 68, 12, 1, 100];
console.log("the sum should be 228. it is:", sumAll(arr));
