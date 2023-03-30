class Animal {
    name: string;
    age: number;
    sound: string;
    
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
    
    makeSound(): void {
      console.log(`${this.name} makes the sound: ${this.sound}`);
    }
  }
  
  class Mammal extends Animal {
    constructor(name: string, age: number) {
      super(name, age, "roar");
    }
  }
  
  class Bird extends Animal {
    constructor(name: string, age: number) {
      super(name, age, "chirp");
    }
  }
  
  class Fish extends Animal {
    constructor(name: string, age: number) {
      super(name, age, "blub");
    }
  }
  
  // Example usage
  const lion = new Mammal("Leo", 5);
  const canary = new Bird("Tweety", 2);
  const goldfish = new Fish("Nemo", 1);
  
  lion.makeSound(); // Leo makes the sound: roar
  canary.makeSound(); // Tweety makes the sound: chirp
  goldfish.makeSound(); // Nemo makes the sound: blub
  