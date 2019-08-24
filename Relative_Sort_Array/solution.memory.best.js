/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const arr2Map = createArr2Map(arr2);
  quickSort(0, arr1.length - 1, arr1, arr2Map);
  return arr1;
};

function createArr2Map (arr2) {
  if (!arr2 || !arr2.length) return {};
  return arr2.reduce((map, v, i) => {
    map[v] = i + 1;
    return map;
  }, {});
}

function compare(a, b, arr2Map) {
  const ia = arr2Map[a];
  const ib = arr2Map[b];
  if (ia && ib) return ia- ib;
  if (ia) return -1;
  if (ib) return 1;
  return a - b;
}

function swap(i, j, arr) {
  const iValue = arr[i];
  arr[i] = arr[j];
  arr[j] = iValue;
}

function quickSort(s, e, arr, arr2Map) {
  if (s >= e) return;
  
  if (s + 1 === e) {
    if (compare(arr[s], arr[e], arr2Map) > 0) swap(s, e, arr);
    return;
  }
  
  const p = Math.floor((s + e) / 2);
  const pv = arr[p];
  swap(p, e, arr);
  
  let i = s;
  let j = e - 1;
  while (i <= j) {
    const iNotMoreThanPV = compare(arr[i], pv, arr2Map) <= 0;
    const jMoreThanPV = compare(arr[j], pv, arr2Map) > 0;
    if (iNotMoreThanPV && jMoreThanPV) {
      i++;
      j--;
    } else if (iNotMoreThanPV && !jMoreThanPV) {
      i++;
    } else if (!iNotMoreThanPV && jMoreThanPV) {
      j--;
    } else {
      swap(i, j, arr);
      i++;
      j--;
    }
  }
  swap(i, e, arr);
  quickSort(s, i - 1, arr, arr2Map);
  quickSort(i + 1, e, arr, arr2Map);
}
