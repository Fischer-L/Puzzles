function solution(arr) {
  const N = arr.length;
  let left = N % 2 === 0 ? 0 : 1;
  let right = N - 1;
  
  arr.sort((a ,b) => a - b);
  
  while (left < right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left += 2;
    right -= 2;
  }
}
