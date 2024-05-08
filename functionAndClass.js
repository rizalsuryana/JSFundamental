// !Class ES6

class Car {
    constructor(brand, color, maxSpeed, chassisNumber){
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }

    drrive() {
        console.log(`${this.brand} ${this.color} maxSpeed:${this.maxSpeed}`);
    }
    reverse(){
        console.log(`${this.brand} ${this.color} is Reversing.....`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning...`);
    }
}

const car1 = new Car('Toyota', 'silver', 200, 's1lv3r');
const car2 = new Car('Honda', 'Black', 190, 'bl4ck');
const car3 = new Car('Yamaha', 'Blue', 300, 'blu3');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drrive();
car1.reverse();
car1.turn();

car2.drrive();
car2.reverse();
car2.turn();

car3.drrive();
car3.reverse();
car3.turn();


// ? Getters and setters
/**
 * Accessor property merupakan properti yang dikontril oleh sebuah getter
 * dan setter. Nilai didapatkan dari properti tersbut dikontrol oleh method
 * get dan cara menetapkan nilai tersebut dikontril oleh method set.
 */

/**
 * 1. Method getter harus mengembalikan sebuah nilai dan nilai
 * tersebut akan menjadi nilai properti
 * 2. Method setter harus menerima suatu argumen yang nilainya diambil dari
 * operand ke dua ketika melakukan assigment operator
 */

// ? Contoh

class Mahasiswa {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const mahasiswa = new Mahasiswa('Rizal', 'Suryana');
console.log(mahasiswa);
console.log(mahasiswa.fullName);


mahasiswa.fullName= 'Johan Sanggra';
console.log(mahasiswa);
console.log(mahasiswa.fullName);


// Built-in class
// ? Contoh
const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
});

console.log(timeInJakarta);




// ? Class Array

const myArray = new Array('a', 'b', 'c', 'a', 'b', 'c');

console.log(myArray);
// dengan class array kita bisa menerapkan pewarisan dengan sub class baru


class UniqueArray extends Array {
    constructor(...args) {
        //  Make sure args is unique before passing it to super
        const UniqueValue = args.filter((item, index) => args.indexOf(item)=== index);

        super(...UniqueValue);
    }

    add(item) {
        // make sure only unique item is added
        if(!this.includes(item)) {
            super.push(item);
        }
    }
}


const someArray = new UniqueArray ('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray);
someArray.add('d');
console.log(someArray);
someArray.add('a');
console.log(someArray);