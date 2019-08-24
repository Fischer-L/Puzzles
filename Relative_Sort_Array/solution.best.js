/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const arr2Map = createArr2Map(arr2);
  
  const arrsInArr2 = [];
  const arrRest = [];
  for (let v of arr1) {
    if (arr2Map[v] >= 0) {
      if (!arrsInArr2[arr2Map[v]])  arrsInArr2[arr2Map[v]] = [];
       arrsInArr2[arr2Map[v]].push(v);
    } else {
      arrRest.push(v);
    }
  }
  
  let ans = [];
  for (let arr of arrsInArr2) ans = ans.concat(arr);
  return ans.concat(arrRest.sort((a, b) => a - b));
};

function createArr2Map (arr2) {
  if (!arr2 || !arr2.length) return {};
  return arr2.reduce((map, v, i) => {
    map[v] = i;
    return map;
  }, {});
}
