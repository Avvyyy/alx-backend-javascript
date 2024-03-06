export default function divideFunction(numerator, denominator) {
	try {
		if (denominator === 0)
			throw new Error("Error: cannot divide by 0");
		return numerator / denominator;
	}
	catch(e) {
		return (e.message);
	}
}
