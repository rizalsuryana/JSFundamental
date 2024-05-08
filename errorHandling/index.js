// ? Try and Catch
/**
 * Untuk menangani error pada javaScript, gunakan try and catch. Penulisan kode try-catch
 * untuk menangani error adalah seperti ini:
 */
try {
    //kode
} catch(error) {
    //error handling
}
/**
 * Letakan kode yang berpeluang menimbulkan error dalam blok try. Apabila terjadi error di dlam blok kode try,
 * maka akan ditangkap dan ditangani oleh blok kode catch. Sementara jika tidak terjadi error
 * maka block catch akan diabaikan
 */

try {
    console.log(`First Try Block`);
    console.log(`End Try Block`);
} catch {
    console.log(`Jika tidak terjadi error, kode ini akan diabaikan`);
}

// contoh apabila ada error pada try

try {
    console.log(`Blok try awal`);
    asumsikanIniKodeYangError;
    console.log(`Blok try akhir`);
} catch (error){
    console.log(`Pesan error : Error ditemukan`);
    //Properti utama dalam objek error
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
/**
 * Baris ke 2 akan menghasilkan error. Eksekusi kode dalam blok try akan dihentikan, sehingga
 * baris kode 3 tidak akan tereksekusi. Kemudian kode akan dilanjutkan ke baris 4 (atau block catch).
 */

// ? Try-catch-finally
/**
 * Selain try and catch, ada satu blok lagi yang ada dalam mekanisme error handling pada javaScript, yaitu finally.
 * Blok finally akan tetap dijalankan tanpa peduli apapun hasil yang terjadi pada blok try catch.
 */

try{
    console.log(`Baris awal`);
    // ainun;
    console.log(`Baris akhir`);
} catch {
    console.log(`Baris ini diabaikan`);
} finally {
    console.log(`Akan tetap dieksekusi`);
}

// ! Throwing Errors
// Implementasi try-catch pada kasus yang lebih umum, contoh :

console.log(`\t ------- Throw Error`);

const json = '{"name": "Yoda", "age": 20}';

try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// ! Contoh throw untuk menimbulkan error kita sendiri.
console.log(`\t ------ Contoh`);

const json2 = '{"name" : "Zay", "age": 28}';

try {
    const user = JSON.parse(json2);

    if (!user.name) {
        throw new SyntaxError("'name' is required");
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // console.log(`JSON Error : ${error.message}`);
    // Menangani error sesuai dengan  error yang muncul
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

// ! Custom error
console.log(`\n \t -------- Custom Error`);

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name ='ValidationError';
    }
}

const json3 = '{"age": 38}';

try {
    const user = JSON.parse(json3);

    if (!user.name) {
        throw new ValidationError("'name' is required");
    }

    if(!user.age) {
        throw new ValidationError("'age' is required");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if ( error instanceof SyntaxError) {
        console.log(`JSON Syntax Error : ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}