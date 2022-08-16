function minMeetingRooms(meetings) {
  const begins = meetings.map(m => m[0]).sort((a, b) => a - b);
  const ends = meetings.map(m => m[1]).sort((a, b) => a - b);
  let count = 0;
  let maxCount = 0;
  while (begins.length) {
    const b = begins[0];
    const e = ends[0];
    if (b < e) {
      count++;
      begins.shift();
    } else if (e <= b) {
      maxCount = Math.max(maxCount, count);
      count--;
      ends.shift();
    }
  }
  return maxCount;
}
