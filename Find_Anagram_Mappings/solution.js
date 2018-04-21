function findAnagram(A, B) {
  let len = B.length;
  if (len === 0) return null;
  
  let mapB = {};
  for (let i = 0; i < len; ++i) {
    let b = B[i];
    if (mapB[b] === undefined) {
      mapB[b] = i;
    }
  }
  
  let anaMap = [];
  for (let i = 0; i < len; ++i) {
    let a = A[i];
    anaMap.push(mapB[a]);
  }
  return anaMap;
}
