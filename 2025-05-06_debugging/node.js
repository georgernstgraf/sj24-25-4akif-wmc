const n = 10;
for (let i = 0; i < n; i++) {
  console.log(i);
  for (let j = 0; j < i; j++) {
    console.log(j);
    if (j === 5) {
      console.log("Breaking out of the inner loop");
      break;
    }
  }
  console.log("Inner loop finished");
}
console.log("Loop finished");
