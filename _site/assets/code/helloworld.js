class Person{
	constructor(name, surename, comment){
		this._name = name
		this._surename = surename
		this._comment = comment
	}

	fullName() {
		const fullName = `${this._name} ${this._surename}\n`
		return fullName
	}

	message() {
		const message = this._comment 
		return message
	}
}

const person = new Person("Simon", "Bakken-Jantasuk", "Hello World!")

console.log(person.fullName(), person.message()) 
