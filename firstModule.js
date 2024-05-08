// Object

// const Boss = {
//     firstName   : 'Rizal',
//     lastName    : 'Suryana',
//     Age         : 27,
//     isMarrid    : false,
//     'Alamat Asal' : 'Tasikmalaya',
// };


// // console.log(`Hallo nama saya ${Boss.firstName} saya dari marga ${Boss.lastName}, saat ini saya berusia ${Boss.Age}, dan saya ${Boss.isMarrid}`);
// // console.log(`Saya berasal dari ${Boss['Alamat Asal']}`)

// Boss.Age = 28;
// Boss['Alamat Asal'] = 'Sukahening';
// Boss.foodFav = 'Avocado';
// delete Boss.firstName;
// console.log(Boss);



// Array 


// let myArray = ['Kucing', 'Ikan', 10, 21, true, 'Burung'];


// myArray.shift(); // menghapus nilai array paling depan
// myArray.unshift('Nama-nama :') // menambahkan data di depan array
// myArray.pop(); //menghapus burung (nilai arrray paling akhir)
// myArray.push('Binatang'); // menambahkan binatang di akhir

// // menghapus nilai array pada index tertentu akan teteapi posisi tersebut akan menjadi kosong

// delete myArray[1];

// splice menghapus array dan indexnya,angka pertama adalah
// dari index ke berapa mulai menghapus, angka ke 2 adalah berapa
// jumlah index yang ingin di hapus
// myArray.splice(1, 1);




// // menghapus / menampilkan array baru tanpa index ke 0 dan 2

// const newArray = myArray.filter((element, index) => {
//     return index !== 0 && index !==2;

// });

// console.log(newArray);


// // splice untuk menyisipkan index kedalam array
// const Hari = ['Senin', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
// console.log(Hari);

// Hari.splice(1, 0, 'Selasa');
// console.log(Hari);



// Spread Operator (...)
//  menyebarkan nilai array / iterable object menjadi beberapa element

/*
const isiKamar = ['Monitor', 'Mouse', 'Keyboard', 'Laptop'];
console.log(isiKamar);
console.log(...isiKamar);


! Speard Operator dapat digunakan untuk menggabungkan dua buah array
! ke dalam array baru.


const kamarDepan =['Monitor', 'Mouse', 'Keyboard', 'Laptop'];
const kamarBelakang = ['TV', 'Koleksi Jam', 'Lemari baju', 'Meja'];

! Nilai array tidak akan tergabung, malah menjadi array baru 
! yang menampung dua array
const isiKamar = [kamarDepan, kamarBelakang];
console.log(isiKamar);


! untuk itu kita gunakan speard
const isiKamar = [...kamarDepan, ...kamarBelakang];
console.log(isiKamar);

*/


/*
!Selain array spread juga bisa digunakan untuk object literals.
!Jadi bisa menggabungkan beberapa object dengan kode yang lebih ringkas



const depan = {
    firstName   : 'Rizal',
    age         : 27,
};

const belakang = {
    lastName    : 'Suryana',
    gender      : 'Male',
};

const biodata = {...depan, ...belakang};

console.log(biodata);
*/


// Destructuring Object and Array
// !Destructuring Object
/* const profile = {
    firstName   : 'Rizal',
    lastName    : 'Suryana',
    age         : 27,
};

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);
*/
// ! Destructuring Assigment
/*
const profile = {
    firstName   : 'Rizal',
    lastName    : 'Suryana',
    age         : 27,
};

// ? jadi Nilai yang di deklarasikan di bawah ini akan digantikan oleh
// ? Nilai yang ada pada object

let firstName   = 'Johan';
let age         = 37;
({firstName, age}   = profile);
console.log(firstName, age);
*/

// ! Default Values

// ketika mendestruksikan object dan menetapkan variable yang bukan begian dari properti object = undifine
// maka kita definisikan dan beri nilai

// const profile = {
//     firstName   : 'Rizal',
//     lastName    : 'Suryana',
//     age         : 27,
// };

// // const { firstName, age, isMale } = profile; undefine
// const { firstName, age, isMale = true } = profile;

// console.log(firstName);
// console.log(age);
// console.log(isMale);


// ! Assigning to Different Local Variable Names

/*
const Boss = {
    firstName    : 'Zay',
    lastName    : 'Falcon',
    age         : 27,
};

const {firstName: localFirstName, lastName: localLastName, age: localAge} = Boss;
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
*/

// ! Destructuring Array

// const alat = ['Mouse', 'Keyboard', 'Laptop', 'Monitor'];

// // * Untuk meyimpan 3 string diatas
// /* const [firstItem, secondItem, thirdItem, furthItem] = alat;
// console.log(firstItem);
// console.log(secondItem);
// console.log(thirdItem);
// console.log(fourthItem);
// */
// // * Kita juga bisa memilih salah satu nilai saja

// const [, , thirdItem] = alat;
// console.log(thirdItem);



// ! Destructuring Assigment
// Tidak perlu membungkusnya dengan kurung seperti pada object

// const food = ['Noodle', 'Salad', 'Potato', 'Juice'];

// let myFood = 'Avocado';
// let hisFood = 'Banana';

// [myFood, hisFood] = food;
// console.log(myFood);
// console.log(hisFood);

// let a = 1;
// let b = 2;
// console.log(`Sebelum swap \n Nilai A = ${a} \n Nilai B = ${b}`);

// [a,b] = [b,a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a

// console.log(`Setelah swap \n Nilai A = ${a} \n Nilai B = ${b}`);


//  ! Default Values
/*
Ketika melakukan destructuring array, 
tetapi terdapat variabel yang posisinya
tidak dapat terjangkau oleh array,
maka variabel tersebut akan bernilai undefined. Contohnya:
*/

// const purakeun = ['Gorengan'];
// // const [myFood, yourFood] = purakeun
// //solusinya seperti ini
// const [myFood, yourFood = 'Sayuran'] = purakeun

// console.log(myFood);
// console.log(yourFood);

// ! Map
// ! set
/*
 * Map dan Set
- Map adalah sebuah data structure yang digunakan untuk menyimpan data yang berupa key-value
- Set adalah sebuah data structure yang digunakan untuk menyimpan data yang berupa value-value
- Map dan Set memiliki fungsi untuk menghapus data yang ada di dalamnya
*/
// !weakMap

// const visitCountMap = new Map(); // menyimpan daftar user

// const countUser = (user) => {
//     let count = visitCountMap.get(user) || 0;
//     visitCountMap.set(user, count + 1);
// }

// let rizal = {name: "Rizal"};
// countUser(rizal); // menambahkan user "Rizal"

// rizal = null; // data object Rizal dihapus

// // delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(() => {
//     console.log(visitCountMap);
// }, 10000)

/*
jonas sudah dihapus dengan mengubah nilainya menjadi null, seharusnya
map tidak lagi menyimpan data user (garbage collected). Namun, kenyataanya
data jonas masih tersedia di dalam Map. Artinya, data jonas masih tersimpan
dalam memori sampai kita benar-benar menghapusnya
*/

// berbeda ketika kita menggunakan WeakMap

/*
const {inspect} = require('util');

const visitCountMap = new WeakMap(); // menyimpan data user

const countUser = (user) => {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

let surya = {name: 'Surya'};
countUser(surya); // menambahkan user surya

 surya = null; // data object surya dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja

setTimeout(() =>{
    console.log(inspect(visitCountMap, {showHidden: true}));
}, 50000);


!hasil ditak sesuai karena bermain dengan garbage
*/
/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


// // TODO


// const restaurant  = {
//     name                : 'Rizal',
//     city                : 'depok',
//     'favorite drink'    : 'Lava ice',
//     'favorite food'     : 'Buah Zaitun',
//     isVegan             : false,
// };

// const name = restaurant.name;
// const favoriteDrink = restaurant['favorite drink'];


// module.export = {
//     restaurant,
//     name,
//     favoriteDrink,
// };
// console.log(module.export);


/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
// const evenNumber = [];

// for (i=0; i<=100; i++){
//     if (i % 2 == 0) {
//         evenNumber.push(i);
//     }
// }

// console.log(evenNumber);



/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */
// const priceInJPY = 5000;
// //  TODO
// const currency = new Map([
//     ['USD', 14000],
//     ['JPY', 131],
//     ['SGD', 11000],
//     ['MYR', 3500]
// ]);

// const priceInIDR  = currency.get('JPY')*priceInJPY;

// console.log(currency, priceInIDR);



// ! Function


// const multiply = (a, b) => {
//     return console.log(a*b);
// }

// multiply(20, 2);


// const ucapan = () => {
//     console.log('Semangat');
// }

// ucapan();

// const ucapan = (nama, bahasa) => {
//     if (bahasa === 'Inggris') {
//         console.log(`ood Morning ${nama}!`);
//     }
//     else if (bahasa === 'Indonesia') {
//         console.log(`Selamat Pagi ${nama}!`);
//     }
//     else {
//         console.log(`Wilujeng Enjing ${nama}!`);
//     }
// }

// ucapan('Rizal' , 'Indonesia');


// const ucapan = (name, languange) => {
//     if (languange === 'english') {
//         return `Hallo madafaka ${name}, jangan lupa puasa`;
//     }
//     else if (languange === 'indonesis') {
//         return `Jangan lupa puasa ya ${name}`;
//     }
//     else{
//         return `Tong hilap puasa nya ujang ${name}, anu kasep !`;
//     }
// }

// const iyeu = ucapan('Rizal' , 'english');
// console.log(iyeu);

/*
clg kalau tidak disimpan ke memori dan hanya ingin menampilkan di console
sedangkan return akan disimpan pada memori, dan bisa menggunakannya kembali
*/


// ! Expression function

/*
Cara lain untuk membuat sebuah fungsi pada JavaScript adalah expression function
ingat kembali bahwa expression function adalah kode atau intruksi yang
mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel
Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function. Berikut ini merupakan contoh penulisan expression function:
*/

// const greeting = function(name, language) {
//     if(language === "English") {
//       return "Good Morning " + name + "!";
//     } else if (language === "French") {
//       return "Bonjour " + name + "!";
//     } else {
//       return "Wilujeng Enjing " + name + "!";
//     }
//   }

//   console.log(greeting('Zay', 'Sunda'));



// ! Function Parameter
//  ? Parameter
/* function Parameter(a,b) {
    return a*blur;
} */

// Argumen = nilai atau expression yang dimasukkan ke dalam fungsi
// parameter(3,6);

/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO

// const minimal =(a, b) =>{
//     if (a < b ) {
//         return a;
//     }
//     else if (b < a) {
//         return b;
//     }
//     else {
//         return a;
//     }

// }

// const power = (a, b) => a**b;

// console.log(minimal(17, 17));
// console.log(power(12, 2));


// ! Constructor function and Class

// ? Gak bisa pake arrow function

// function Lelaki (Jakun, Kumis, Janggot, Brewok) {
//     this.Jakun = Jakun;
//     this.Kumis = Kumis;
//     this.Janggot = Janggot;
//     this.Brewok = Brewok;
//     console.log(`Idris memiliki jakun berukuran ${this.Jakun},
//     memiliki Kumis ${this.Kumis}, dan janggot ${this.Janggot}, serta memiliki Brewok ${this.Brewok}`);
// }

// const lelaki1 = new Lelaki ('Kecil', 'tipsi', 'tebal', 'Tidak lebat');


// class Perempuan {
//     constructor(Nama, NIM, Kelas, Prodi) {
//         this.Nama   = Nama;
//         this.NIM    = NIM;
//         this.Kelas  = Kelas;
//         this.Prodi  = Prodi;
//     }
// }

// const Ariana = new Perempuan('Ariana', 1052190, 'Kakap', 'Informatika');

// console.log(Ariana);

// ! Iherith

// // ? Super Class
// class MailServer {
//     constructor(sender) {
//         this.sender = sender;
//     }

//     sendMessage(message, receiver) {
//         console.log(`${this.sender}, sent message: ${message} to ${receiver}`);
//     }
// }

// // * SubClass
// class WhatsAppService extends MailServer {
//     sendBroadcastMessage(message, receivers) {
//         for(const receiver of receivers) {
//             this.sendMessage(message, receiver);
//     }
// }

// }

// class EmailService extends MailServer {
// sendDelayedMessage(message, receiver, delay) {
//     setTimeout(()=>{
//         this.sendMessage(message, receiver);
//     }, delay);
// }
// }


// const whatsapp = new WhatsAppService('+6281234567890');
// const email = new EmailService('dimas@dicoding.com');
 
// whatsapp.sendMessage('Hello', '+6289876543210');
// whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// // whatsapp.sendDelayedMessage(); // Error
 
// email.sendMessage('Hello', 'john@doe.com');
// email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
// // email.sendBroadcastMessage(); // Error


// class KucingFamily {
//     constructor(jenis) {
//         this.jenis = jenis;
//     }
//     aksiKucing(makan, minum) {
//         console.log(`${this.jenis} Mememakan ${makan}, dan minum ${minum}`);
//     }
// }


// class KucingKampung extends KucingFamily {
//     makananKucingKampung(makan, minums) {
//         for (const minum of minums) {
//             this.aksiKucing(makan, minum);
//         }
//     }
//     // ! Overriding constructor
//     constructor(jenis, isMale) {
//         super(jenis);

//         this.isMale = isMale;
//     }

//     // ! Overriding method
//     aksiKucing(makan, minum) {

//         // ? Memanggil method aksiKucing pada superclass
//         super.aksiKucing(makan, minum);
//         console.log(`dan dipelihara`);
//         // console.log(`${this.jenis} Mememakan ${makan}, dan minum ${minum}, serta di pelihara`);
//     }


// }


// class KucingBesar extends KucingFamily {
//     makananKucingBesar(makans, minum) {
//         for (const makan of makans) {
//             this.aksiKucing(makan, minum);
//         }
//     }
// }




// const Meong = new KucingKampung('Malika siKucing Kampung');
// const Singa = new KucingBesar('Singa siKucing Besar');

// Meong.aksiKucing('Dry Foods', 'Milk Cat');
// Meong.makananKucingKampung('Ikan', ['Milk Cat' , 'Air Mineral']);

// console.log('\n');
// Singa.aksiKucing('Rusa', 'Air Hujan');
// Singa.makananKucingBesar(['Bison', 'Zebra'], 'Air Sungai');

// console.log(Meong instanceof KucingKampung);
// console.log(Meong instanceof KucingBesar);
// console.log(Meong instanceof KucingFamily);



// console.log(Singa instanceof KucingKampung);
// console.log(Singa instanceof KucingBesar);
// console.log(Singa instanceof KucingFamily);



// ! Object Compositions

/*
Agar lebih mudah dalam membuat objek, kita bisa membuat sebuah fungsi
sebagai object creator dengan mengomposisikan kemampuan-kemampuan yang
dibutuhkan. Di javascript, kita bisa secara mudah mengomposisikan objek
dengan menggunakan method //! Object.assign().
 */


// // ? Contoh

// class Developer {
//     constructor(name) {
//         this.name = name;
//     }

//     commitChange() {
//         console.log(`${this.name} membuat perubahan....`);
//     }
// }

// function canBuildUI(developer) {
//     return {
//         buildUI: () => {
//             console.log(`${developer.name} membuat User Interface`);
//         }
//     }
// }


// function canBuildAPI(developer) {
//     return {
//         buildAPI: () => {
//             console.log(`${developer.name} membuat API`);
//         }
//     }
// }

// function canDeployApp(developer) {
//     return{
//         deployApp : () => {
//             console.log(`${developer.name} mendeploy aplikasi...`);
//         }
//     }
// }



// function createFrontEndDev(name) {
//     const developer = new Developer(name);
//     return Object.assign(developer, canBuildUI(developer));
// }


// function createBackEndDev(name) {
//     const developer = new Developer(name);
//     return Object.assign(developer, canBuildAPI(developer));
// }

// function createDevOS(name) {
//     const developer = new Developer(name);
//     return Object.assign(developer, canDeployApp(developer));
// }


// function createFullStackDev(name) {
//     const developer = new Developer(name);
//     return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
// }


// const frontEndDev = createFrontEndDev('Rizal FrontEnd');
// frontEndDev.commitChange();
// frontEndDev.buildUI();
// console.log(`is ${frontEndDev.name} developer?`, frontEndDev instanceof Developer);


// console.log(`\n -------------------------\n`);

// const backEndDev = createBackEndDev('Rizal BackEnd');
// backEndDev.commitChange();
// backEndDev.buildAPI();
// console.log(`is ${backEndDev.name} developer?`, backEndDev instanceof Developer);

// console.log(`\n -------------------------\n`);

// const devOS = createDevOS('Rizal devOS');
// devOS.commitChange();
// devOS.deployApp();
// console.log(`is ${devOS.name} developer?`, devOS instanceof Developer);


// console.log(`\n -------------------------\n`);


// const fullStackDev = createFullStackDev('Rizal FullStack');
// fullStackDev.commitChange();
// fullStackDev.buildUI();
// fullStackDev.buildAPI();
// fullStackDev.deployApp();

// console.log(`is ${fullStackDev.name} developer?`, fullStackDev instanceof Developer);

/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO

// class Animal {
//     constructor(name, age, isMamal) {
//         this.name = name;
//         this.age = age;
//         this.isMamal = isMamal;
//     }

//     eat() {
//         return `${this.name} sedang makan! berumur ${this.age} tahun, apakah mamalia? ${this.isMamal}`;
//     }

//     fly() {
//         return `${this.name} sedang terbang! berumur ${this.age} tahun, apakah mamalia? ${this.isMamal}`;
//     }
// }

// class Rabbit extends Animal {
//    constructor(name, age, isMamal){
//     super(name, age, isMamal);
//    }
// }

// class Eagle extends Animal {
//     constructor(name, age, isMamal){
//         super(name, age, isMamal);
//     }
// }

// const myRabbit = new Rabbit('Labi', 2, true);
// const myEagle = new Eagle ('Elo', 4, false);
// console.log(myRabbit.eat());
// console.log(myEagle.fly());