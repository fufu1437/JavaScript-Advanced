// TODO: give Animal a kind() method that returns "animal".
class Animal {
	kind() {
		return "animal"
	}
}

// TODO: make Dog extend Animal and override kind() to return "dog".
class Dog extends Animal {
	kind() {
		return "dog"
	}
}

// TODO: make Puppy extend Dog. Do NOT give it a kind() of its own --
// the whole point is that the lookup walks up to Dog.
class Puppy extends Dog {
}

// Plumbing below is finished. It prints the resolved kind(), then walks
// three links of the prototype chain and names the constructor at each one.
const p = new Puppy()
console.log(p.kind())
console.log(p.__proto__.constructor.name)
console.log(p.__proto__.__proto__.constructor.name)
console.log(p.__proto__.__proto__.__proto__.constructor.name)
