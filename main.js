const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })
const lines = []

class EvenRange {
	constructor(start, end) {
		this.start = start
		this.end = end
	}
	*[Symbol.iterator]() {
		let i = this.start
		const end = this.end
		for(let j = i; j < end; j++) {
			if(j & 1) continue
			else yield j
		}

	}
	// TODO: add a [Symbol.iterator]() method.
	// It returns an object with a next() that reports { value, done }.
	// Skip the odd numbers, and stop BEFORE end -- the range is [start, end).
}

// Plumbing below is finished: two lines in, then for...of over your range.
rl.on("line", (line) => {
	lines.push(line)
	if(lines.length === 2) {
		const start = parseInt(lines[0])
		const end = parseInt(lines[1])
		for(const n of new EvenRange(start, end)) console.log(n)
		rl.close()
	}
})
rl.on("close", () => process.exit(0))
