class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
const cat = new Cat("cat");
console.log(cat.species); // Output: cat
cat.makeSound(); // Output: The cat makes a sound.
cat.purr(); // Output: purr

const dog = new Dog("dog");
console.log(dog.species); // Output: dog
dog.makeSound(); // Output: The dog makes a sound.
dog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
