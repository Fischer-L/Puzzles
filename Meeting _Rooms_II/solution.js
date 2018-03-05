var minMeetingRooms = function (intervals) {
  let starts = [];
  let ends = [];
  intervals.forEach(i => {
    starts.push(i[0]);
    ends.push(i[1]);
  });
  starts.sort();
  ends.sort();
  let rooms = 0;
  for (let i = 0, j = 0; i < starts.length; ++i) {
    let s = starts[i];
    let e = ends[j];
    if (s < e) {
      rooms++; 
    } else {
      j++;  
    }
  }
  return rooms;
}
