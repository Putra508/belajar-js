// Pemanggilan fungsi sesuai instruksi
const verifikasiLogin = require ("tugas-login.js")

verifikasiLogin("admin", "12345");  // Login berhasil
verifikasiLogin("admin", "salah");  // Username atau password salah
verifikasiLogin(123, true);         // Terjadi kesalahan

