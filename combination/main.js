// Combination formula: n! / (n-k)! * k!
// Create a denominator variable = 1, then start * n * n-1 * ...until n - k + 1
// Then, a numerator with value = k * k-1 * ...1
// Return the denominator / numerator with Math.trunc() to get integer
// Edge Case: k is 0, k is greater than n, or k equals to n
function combinations(k, n) {
	if(k === 0 || k > n) {
		return 0;
	}
	else if(k === n) {
		return 1;
	} 

	let denominator = 1;
	for(let i = n; i >= n-k+1; i--) {
		denominator *= i;
	}
	let numerator = 1;
	for(let i = k; i > 1; i--) {
		numerator *= i;
	}
	return Math.trunc(denominator / numerator);
}