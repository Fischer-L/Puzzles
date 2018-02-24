function okWebP() {
  return new Promise(resolve => {
    if (okWebP._ok !== undefined) resolve(okWebP._ok);
    let img = new Image();
    img.onload = () => {
      okWebP._ok = true;
      resolve(true);
    };
    img.onerror = () => {
      okWebP._ok = false;
      resolve(false);
    };
    img.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  });  
}
