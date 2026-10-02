const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })

function factorial(n) {
	// TODO: build the product with BigInt values only.
	// The accumulator starts at 1n. The loop counter is a Number, so it has
	// to be converted before it can multiply: BigInt(i), called as a plain
	// function -- `new BigInt(i)` is a TypeError, BigInt is not a constructor.
	let out = BigInt(1)
	for(let i = 1; i <= n; i++) {
		out *= BigInt(i)
	}
	return out
}

rl.on("line", (line) => {
	const n = parseInt(line)
	console.log(factorial(n).toString())
	rl.close()
})
rl.on("close", () => process.exit(0))
