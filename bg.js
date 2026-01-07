(() => {
  // Random accent colors for the shared background (RGB tuples)
  const palette = [
    [230, 40, 90],   // pink/red
    [120, 70, 200],  // purple
    [40, 180, 140],  // teal
    [255, 140, 40],  // orange
    [60, 140, 255],  // blue
    [200, 70, 120],  // magenta
    [140, 220, 70],  // green
    [255, 80, 60]    // red/orange
  ];

  function pickTwoDistinct() {
    const firstIndex = Math.floor(Math.random() * palette.length);
    let secondIndex = Math.floor(Math.random() * palette.length);
    if (secondIndex === firstIndex) {
      secondIndex = (secondIndex + 1) % palette.length;
    }
    return [palette[firstIndex], palette[secondIndex]];
  }

  const root = document.documentElement;
  const [a, b] = pickTwoDistinct();

  root.style.setProperty('--bg-accent-1', `${a[0]}, ${a[1]}, ${a[2]}`);
  root.style.setProperty('--bg-accent-2', `${b[0]}, ${b[1]}, ${b[2]}`);
})();
