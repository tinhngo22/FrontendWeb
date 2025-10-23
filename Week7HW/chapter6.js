console.log("chapter 6 exercises");
const aurora = {
	name: "Aurora",
	health: 150,
	strength: 25,
	xp: 0,
	describe: function () {
		return `${this.name} has ${this.health} health, ${this.strength} strength and ${this.xp} xp`;
	},
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// exercise 2

const dog = {
	name: "Fang",
	species: "boarhound",
	size: "75",
	bark: function () {
		return "Grr! Grr!";
	},
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Exercise 3

const r = Number(prompt("Enter the circle radius:"));

const circle = {
	circumference: () => r * 2 * 3.14,
	area: () => r * r * 3.14,
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// Exercise 4

const account = {
	name: "Alex",
	balance: 0,
	credit: function (a) {
		this.balance += a;
	},
	describe: function () {
		return `owner ${this.name}, balance: ${this.balance}`;
	},
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
