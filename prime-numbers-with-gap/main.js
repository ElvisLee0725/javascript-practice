// Use a for loop start from a, when i + gap <= b, i++ to find 2 prime 
// numbers i and i + g that's withing the boundary a and b
// If we found i and i + g is withing range a and b, return [i, i+g]
// Else, return null in the end
// Write a isPrime(num) function to check if current number is prime
// isPrime: From 2 to num / 2, if num % i is 0, return false.
// Edge Case: If b <= a, return null

function primeGaps(g, a, b) {
	if(b <= a) {
		return null;
	}
	
	for(let i = a; i + g <= b; i++) {
		if(isPrime(i) && isPrime(i+g)) {
			return [i, i+g];
		}
	}
	return null;
}

function isPrime(num) {
	if(num <= 1) {
		return false;
	}
	
	for(let i = 2; i <= Math.trunc(num / 2); i++) {
		if(num % i === 0) {
			return false;
		}	
	}
	return true;
}