/**
 * fungsi untuk menampilkan salam ke terminal
 * Author instruktur TIK
 * Version 1.0
 * Date: 8 juli 2025
 */

function tampilkanSalam() {
    //Menyimpan pesan salam
    const pesan = "Halo! Selamat datang di dunia Node.js";

    //Menampilkan pesan ke terminal
    console.log(pesan);
}

//Mengekspor fungsi agar bisa di gunakan di file lain
module.exports = tampilkanSalam;