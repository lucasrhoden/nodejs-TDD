class Person {
  speak(name?: string) {
    return `Hello, ${name?.toUpperCase() ?? 'no one'}`
  }
}

const person = new Person()
person.speak('Lucas')
person.speak()
