function computeSquareRoot(num) {
	let approx = 1

	while (approx ** 2 !== num) {
        if (Number(approx * approx).toFixed(2) === num) break
	approx = (approx + (num / approx)) / 2
	}

return Number(approx.toFixed(2))
}

computeSquareRoot(8)

function computeSquareRoot(num) {
    const diffs = [1, 0.1, 0.01, 0.001];
    let base = 1;
    for (let i = 0; i < diffs.length; i++) {
      while (base * base < num) {
        base = base + diffs[i];
      }
  
      if (base * base === num) {
        return base;
      } else {
        base = base - diffs[i];
      }
    }
    return Number(base.toFixed(2));
}

computeSquareRoot(8)