// ? Contoh kode imperatif

const names = ['Harry', 'Rin', 'Jeff', 'Thomas'];

const newNameWithExcMark = [];

for (let i = 0; i< names.length; i++) {
    newNameWithExcMark.push(`${names[i]}!`);
}

console.log(newNameWithExcMark);

// ! Contoh kode deklaratif

const ngaran = ['Rizal', 'Johan', 'Indra', 'Nansi'];

const newNgaranWithExcMark = ngaran.map((ngarana) => `${ngarana}!`);

console.log(newNgaranWithExcMark);


console.log(`\nKonsep-Konsep Functional Programing\n`);

// ! Contoh impure function

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => PI * (jariJari * jariJari);

console.log(hitungLuasLingkaran(4));

PI = 5; // Tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4));

// ! Berikut pure function

const ngitungLuasLingkaran = (jari_jari) => 3.14 * (jari_jari * jari_jari);

console.log(ngitungLuasLingkaran(4));
console.log(ngitungLuasLingkaran(4));
console.log(ngitungLuasLingkaran(8));
console.log(ngitungLuasLingkaran(8));

/* Dengan memindahkan nilai PI ke dalam fungsi maka dapat dipastikan nilai tersebut
tidak akan berubah atau tak sengaja diubah. Dengan begitu
gungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama.
*/
/**
 *! Selain dilarang untuk bergantung terhadap nilai luar, pure function
 *! juga dilarang keras untuk mengubah nilai yang berdada di luar baik secara sengaja atau tidak sengaja
 *! Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.
 */


const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name: 'Bobi'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});


//  ! Pure Function

const orangDenganUmur = (usia, orang) => {
    return{...orang, usia};
};


const orang = {
    nama: 'Johan'
};

const newOrang = orangDenganUmur(34, orang);

console.log({
    orang,
    newOrang
});

/**
 * Pure function memiliki 3 konsep :
 * mengembalikan nilai yang sama bila inputan (nilai paramter) sama
 * hanya bergantung pada argumen yang diberikan
 * tidak menimbulkan efek samping
 */

// * Imumutability
/**
 * Imumutable berarti  sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
 * contohnya pada array map yang menghasilkan array baru bukan mengubha nilai dari array itu sendiri
 */


const family = ['Johan', 'Indra', 'Yuris'];

const familyName = family.map((fName) => `${fName} ululu`);

console.log({
    family,
    familyName,
});

/**
 * Apabila kita benar-benar membutuhkan untuk mengubah nilai objeknya
 * maka gunakan cara ini
 */


const son = {
    firstName   : 'Johan',
    lastName    : 'alala', //Not a family name
}

const lastNameUpdate = (newLastName, son) => {
    return {... son, lastName: newLastName}
}

const newSon = lastNameUpdate('ululu', son);

console.log(son);
console.log(newSon);

console.log(`\n\n\n\n\n Rekrusif\n`);
// ! Rekursif
// teknik pada sebuah function yang memanggil dirinya sendiri

const countDown = start => {
    do{
        console.log(start);
        start -=1;
    }
    while(start >= 0);
};

countDown(10);
console.log(`\n rekursif \n`);
// ? Bentuk rekursinya adalah sebagai berikut :

const countDown2 = start => {
    console.log(start);
    if (start > 0 ) countDown2(start-=1);
}
countDown2(10);


/* 
! Higher-Order Function
! Merupakan fungsi yang dapat menerima fungsi lainya pada argumen,
! mengembalikan sebuah fungsi, atau bahkan keduanya
*/ 

/** Frist class function merupakan kemampuan yang dimiliki javaScript
 * Dapat menyimpan function dalam variabel, memberikan function
 * sebagai parameter pada fungsi lainnya hingga mengembalikan function dalam function
 */


const selamat = () => {
    console.log('Selamat Ya !');
};

const ucapan = (tuturutMunding) => {
    tuturutMunding();
}

const ucapanSelamat = () => {
    return() => {
        console.log('Selamat Yahaha');
    }
}


selamat();
ucapan(selamat); // ngambil dari function lainya
ucapan(ucapanSelamat());
ucapanSelamat()();


// ? Contoh Array map

// const namess = ['Zay', 'Ziy', 'Zuy'];

// const arrayMap = (arr, action) => {
//     const loopTrough = (arr, action, newArray) = [], 
// }

