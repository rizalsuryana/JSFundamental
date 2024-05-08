// ! Mengubah callback menjadi promise dengan promisify
// membaca mengedit , menulis file dll
const fs = require('fs');
const { get } = require('http');
/* memnggunakan promisify dari core modul util
* untuk mengubah fungsi menjadi promise based
*/
const { promisify } = require('util');

// TODO : membaca file index.txt run "node index.js on terminal"
const readFilePromise = promisify(fs.readFile);

readFilePromise('./index.txt', 'utf8')
  .then(data => console.log(`Membaca File \n`, data))
  .catch(err => console.log(err.message));



  // ! Mengubah callback menjadi promise dengan promisify
//  TODO :

const getUser = (isOffline, callback) => {
  // simulate network delay

  setTimeout(()=> {
    const users = ['Rizal', 'Suryana', 'Johan', 'Sanggra'];
    if (isOffline) {
      callback(new Error('Please Cek Internet Conection'), null);
      return;
    }
    callback(null, users);
  }, 3000);
}

// create a promise version of getUsers
const getUserPromise = promisify(getUser);
// now we have 'getUser()'  function, and we can apply the promise without manual change

// call the function
//fulfilled condition
getUserPromise(false) // no internet conection ? false
.then(users => console.log(`\n -------- Fulfilled condition : \n`, users))
.catch(err => console.log(err.message));

// rejected condition
getUserPromise(true) // no internet conection ? true
.then(users => console.log(users))
.catch(err => console.log(`\n -------- Rejected condition : \n`,err.message));


/* NOTE : ketika hendak mengubah function callback-based menjadi Promise-based menggunakan util.promisify()
 * 1. Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous
      artinya promisify tidak dapat digunakan jika callback berada di posisi awal / tengah argumen
 * 2. Promisify akan bekerja dengan baik apabila callback memiliki struktur argumen 'callback(error, data).
      Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh promise ketika fulfilled dan rejected bisa tertukar

      ! Singkatnya, promisify hanya dapat digunakan pada fungsi yang mengikuti aturan Node.js callback.
 */


