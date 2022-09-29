function canAttendMeetings (intvls) {
  intvls.sort((a, b) => a[0] - b[0]);
    
  let farRight = intvls[0][1];
  for (let i = 1; i < intvls.length; i++) {
    const [ s, e ] = intvls[i];
    if (farRight >= s) {
      return false;
    } else {
      farRight = Math.max(farRight, e);
    }
  }
    
  return true;
}
