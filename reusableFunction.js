// ! Reusable Function

// ? Array Map
/*
* Mengembalikan array baru, nilai tiap item pada array yang dikembalikan dihasilkan dari
* kembalian callback function-nya. Karena callback function dapat mengakses item array<
* biasnya developer menggunakannya untuk menghasilkan nilai baru.
 */
console.log(`Array Map`);

['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });
/*
* callback function tersebut akan dipanggil sebanyak jumlah panjang array
* dan akan memiliki akses index array sesuai dengan iterasinya
 */

const newRoom = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name} !!` );
console.log(newRoom);

//  ?Array Filter
/**
 * digunakan untuk menyaring / memfilter terhadap nilai array yang ada.
 * Cara kerjanya sama seperti array.map(), akan tetapi callback function array filter
 * mengembalikan nilai boolean, dimana nilai boolean ini digunakan untuk menentukan
 * apakah item array ini lolos saring atau tidak.
 */
console.log(`\n-----------------------------\n Array Filter`);

const teangan = [1, '', 'Hallo', 0, null, 'Hanzo', 22].filter((item)=> Boolean(item));
console.log(teangan);

console.log(`\n\n\n Filtering array from Object`);

const race = [
    {
    name    : 'Ridwan',
    score   : 88,
},
{
    name    : 'Rizal',
    score   : 111,
},
{
    name    : 'Indra',
    score   : 69,
},
{
    name    : 'Johan',
    score   : 222,
},
] ;

const winer = race.filter((races)=> races.score > 100);
console.log(winer);


// ? Array Reduce
console.log(`\n--------- Array Reduce`)
/** Mengeksekusi fungsi reducer pada setiap element array
 * dan hanya mengambalikan output satu nilai saja
 * 
 */
//*:  arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
//*: [...] merupakan optional parameter
/**
 * Callback funtion dari fungsi ini dapat dioleh untuk manipulasi
 * data currentValue dan menyimpannya pada accumulator. Selain itu,
 * fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada
 * bagian initialValue
 */

// ? Contohnya kita gunakan untuk menjumlahkan nilai score peserta race

const totalScore = race.reduce((acc, races) => acc+ races.score, 0);
console.log('Total score peserta :', totalScore);


// ? Array Some
console.log(`\n--------Array Some`);
// fungsi ini akan menghasilkan nilai boolean

//  *: arr.some(callback(element, [index], [array]), [thisArg])
//  *: [...] merupakan opsional parameter
/**
 * Nilai yang dihasilkan berdasarkan pada pernyataan apakah ada setidaknya
 * satu dari dereta nilai dalam array tersebut lolos berdasarkan kriteria
 * yang kita tuliskan dalam callback function
 */

// todo: ingin mengetahui apakah dalam deretan angka terdapat angka genap

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element %2 === 0);
console.log(array);
console.log('Apakah terdapat angka genap pada array? :', even);

// ? Array find
console.log(`\n----------- Array find`);
/**
 * Digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai
 * dengan kriteria yang kita definisikan pada callback funtion
 *! Perbedaan dengan array.some(), array.find() akan menghasilkan satu nilai
 *! dari element yang pertama kali ditemukan berdasarkan kriteria tertentu
 *! dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array
 */

// * arr.find(callback(element, [index], [array]), [thisArg]);
//* [...] adalah opsional parameter

// TODO: mencari mahasiwa bernama Rizal
const mahasiswaMIT =[
    {
        name    : 'Thomas',
        GPA     : 40,
    },
    {
        name    : 'Steve',
        GPA     : 39,
    },
    {
        name    : 'Rizal',
        GPA     : 40,
    },
    {
        name    : 'Adam',
        GPA     : 38,
    }
];

console.log(mahasiswaMIT);
const findRizal = mahasiswaMIT.find(mahasiswa => mahasiswa.name === 'Rizal');
console.log(`Cari mahasiswa bernama Rizal:`, findRizal);
const findJohan = mahasiswaMIT.find(mahasiswa => mahasiswa.name === 'Johan');
console.log(`Cari mahasiswa bernama Johan:`, findJohan);

// ? Array Sort
console.log(`\n----------- Array sort`);
/**
 * melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi
 * bentuk string dan mengurutkanya secara ascending.
 */
//* arr.sort([compareFUnction]);
//* [...] merupakan functional parameter

// TODO: mengurutkan nama bulan dan angka
const months =['March', 'June', 'Jan', 'Dec', 'Feb'];
console.log('Sebelum di sort',months)
months.sort();
console.log('setelah sort',months);

const angkaArray = [1, 30, 4, 1000, 101, 121, 30, 4];
console.log(`sebelum di sort`, angkaArray);
angkaArray.sort()
console.log(`setelah sort`, angkaArray);
console.log(`Urutan diatas berdasarkan string, jika kita ingin mengurutkan berdasarkan tanggal / score maka kita bisa membuat  compare function sendiri`);
const compareNumber = (a, b) => {
    return a - b;
};
const sorting = angkaArray.sort(compareNumber);
console.log(`Setelah ditambahkan compare function`,sorting);
/**
 * Pada compare function fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result
 * yaitu negatif (-), 0 dan positi (+).
 * Jika negative, maka `a` akan diletakan sebelum `b`
 * Jika positive, maka `b` akan diletakan seblum `a`
 * Jika 0, maka tidak ada perubahan posisi.
 */



// ? Array every
console.log(`\n------------ Array every`);
/**
 * merupakan fungsi bawaan dari array yang digunakan untuk mengecek apakah semua nilai dari sebuah array
 * sesuai dengan kriteria yang didefinisikan. Kemblian dari array.every() adalah nilai Boolean
 */
//* arr.every(callback(element, [index], [array]))

//  TODO: apakah mahasiswa harus melakukan reevaluasi ?
const score = [90, 88, 95];
const minimunScore = 75;

console.log(`Nilai mahasiswa`,score);
console.log(`KKM:`,minimunScore);
//reval
const reEvaluasi = score.every(totalScore => totalScore <= minimunScore);
//lulus
const lulus = score.every(totalScore => totalScore >= minimunScore);
console.log(`Apakah mahasiswa harus melakukan reevalusia?`,reEvaluasi);
console.log(`Apakah mahasiswa lulus?`,lulus);

// ? Array forEach
console.log(`\n----------------Array forEach`);
/***
 * Memanggil fungsi callback pada setiap iterasi index array, fungsi ini tidak mengembalikan nilai apapun
 * jadi secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tidak lebih dari itu.
 * Dengan fungsi ini kita dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif
 */

// TODO :
//* Cara imperatif
const namaNama = ['Indra', 'Johan', 'Kamaludin', 'Lusi'];

for(let i = 0; i < namaNama.length; i++) {
    // if(namaNama[i] === 'Kamaludin') continue/break;
    console.log(`Hi, My name is ${namaNama[i]}, Nice to see you :)`);
}
//* Cara deklaratif
const names = ['Indra', 'Johan', 'Kamaludin', 'Lusi'];

names.forEach((names) =>{
    console.log(`Kenalken nami aing ${names} >:)`);
});

/**
 * forEach tidak bisa menggunakan operator break / continue pada proses perulangan
 * (bisa dilakukan pada perulangan for). Hal ini berlaku juga ketika pada fungsi map dan filter.
 */