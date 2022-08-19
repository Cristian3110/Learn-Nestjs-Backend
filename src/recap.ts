const myName = 'Cristian';

const myAge = 34;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(2, 5);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSumary() {
    return `My name is ${this.name}, y tengo ${this.age} años`;
  }
}

const cristian = new Persona(15, 'cristian');

cristian.getSumary();

// También se pueden colocar los atributos privados de la siguiente manera.

class Alumno {
  constructor(private nombre: string, private materia: string) {}
  getEstudiante() {
    return `El estudiante ${this.nombre} cursa la materia ${this.materia}`;
  }
}

const nemecio = new Alumno('nemecio', 'matemáticas');

console.log(nemecio);
