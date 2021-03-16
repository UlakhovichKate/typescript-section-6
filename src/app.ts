type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

//interface  ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const  e1: ElevatedEmployee = {
    name: 'ula',
    privileges: ['creater'],
    startDate: new Date()
}


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('kate', 'ula') as string;
result.split(' ');

console.log(result);

const fetchUserData = {
    id: 'u1',
    name: 'ula',
    job: { title: 'ceo', description: 'ulalala'}
}
console.log(fetchUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
//
//
// type UknownEmployee = Employee | Admin;
//
// function printEmployeeInformation (emp: UknownEmployee){
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//
//     if ('startDate' in emp) {
//         console.log('Start date: ' + emp.startDate);
//     }
// }
//
// printEmployeeInformation({name: 'Manu', startDate: new Date()});
//
//
// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }
//
//
// class Truck {
//     drive() {
//         console.log('Driving truck...');
//     }
//
//     loadCargo(amount: number) {
//         console.log('loading cargo ... ' + amount);
//     }
// }
//
// type Vehicle = Car | Truck;
//
// const v1 = new Car();
// const v2 = new Truck();
//
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof  Truck) {
//         vehicle.loadCargo(1000);
//     }
// }
//
// useVehicle(v1);
// useVehicle(v2);
//
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }
//
// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }
//
// type Animal = Bird | Horse;
//
// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case "bird":
//             speed = animal.flyingSpeed;
//             break;
//         case "horse":
//             speed = animal.runningSpeed;
//
//     }
//     console.log('Moving at speed: ' + speed);
// }
//
// moveAnimal({type: "bird", flyingSpeed: 10});
//
// //const userInputElement = <HTMLInputElement>document.querySelector('#user-input')!;
// const userInputElement = document.querySelector('#user-input');
//
// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'hi there';
// }
//
// interface ErrorContainer {
//     [prop: string]: string;
// }
//
// const errorBag: ErrorContainer = {
//     email: 'not a valid email!',
//     username: 'must start with a capital'
// };
