function minMeetingRooms(meetings) {
  const begins = meetings.map(m => m[0]).sort((a, b) => b - a);
  const ends = meetings.map(m => m[1]).sort((a, b) => b - a);
  let count = 0;
  let maxCount = 0;
  while (begins.length) {
    const b = begins.pop()
    const e = ends.pop();
    if (b < e) {
      count++;
      ends.push(e); 
    } else {
      count--;
      begins.push(b);
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}
