function solution(arr) {
  // Go swap
  let max = arr.length - 1;
  let exp = "<";
  let actual = "";
  for (i = 0; i < max; ++i) {
    let actual = arr[i] < arr[i+1] ? "<" : ">";
    if (exp != actual) {
      let tmp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = tmp;
    }
    if (exp == "<") {
      exp = ">";
    } else {
      exp = "<";
    }
  }
}
