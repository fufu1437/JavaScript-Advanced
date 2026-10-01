const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })

// TODO: turn this into a generator that yields 1, 4, 9, 16, ... forever.
// It must never return on its own -- the caller decides how many to take.
function* squares() {
	let i = 1
	while(true) {
		yield i * i
		i++
	}
}

rl.on("line", (line) => {
	const n = parseInt(line)
	const gen = squares()
	for(let i = 0; i < n; i++) console.log(gen.next().value)
	rl.close()
})
rl.on("close", () => process.exit(0))
