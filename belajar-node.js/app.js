/**
 * Aplikasi NOde.js paling sederhana
 * Memanggil fungsi dan menampilakan nama aplikasi
 */

const namaApp = require('./config/namaApp');    //import nama aplikasi
const tampilkanSalam = require('./fungsi/tampilSalam');  //import fungsi

//Menampilkan nama aplikasi ke terminal
console.log("Aplikasi:", namaApp);

//Menampilkan salam ke pengguna
tampilkanSalam();