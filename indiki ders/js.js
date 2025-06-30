class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says "${this.sound}"`);
  }
}

// Create 3 objects
const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");
const cow = new Animal("Cow", "Moo");

// Call makeSound() for each
dog.makeSound(); // Dog says "Woof"
cat.makeSound(); // Cat says "Meow"
cow.makeSound(); // Cow says "Moo"