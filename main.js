const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })
const lines = []

const obj = {}
// TODO: replace this empty handler. The set trap must print the line
// first, then store the value, then report success. The get trap just
// hands back what is stored.
const proxy = new Proxy(obj, {
	get(obj, key) {
		return obj[key]
	},
	set(obj, key, value) {
		console.log(`set ${key}=${value}`)
		obj[key] = value
		return true
	}
})

// Plumbing below is finished: it feeds three key=value lines through the
// proxy and then reads the last key back out through it.
rl.on("line", (line) => {
	lines.push(line)
	if(lines.length === 3) {
		for(const l of lines) {
			const [k, v] = l.split('=')
			proxy[k] = v
		}
		const lastKey = lines[2].split('=')[0]
		console.log(proxy[lastKey])
		rl.close()
	}
})
rl.on("close", () => process.exit(0))
