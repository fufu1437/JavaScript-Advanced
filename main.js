const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })
const lines = []

function Vec3(x, y, z) {
	this.x = x
	this.y = y
	this.z = z
}

// Plumbing below is finished: five lines in, one Vec3 each, sum of the x's out.
rl.on("line", (line) => {
	lines.push(line)
	if(lines.length === 5) {
		const vecs = lines.map(line => {
			const [x, y, z] = line.split(' ').map(Number)
			return new Vec3(x, y, z)
		})
		const total = vecs.reduce((s, v) => s + v.x, 0)
		console.log(total)
		rl.close()
	}
})
rl.on("close", () => process.exit(0))
