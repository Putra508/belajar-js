// tugas-login.js

// Fungsi untuk memverifikasi login
function verifikasiLogin(username, password) {
    try {
        // Pengecekan tipe data harus berupa string
        if (typeof username !== 'string' || typeof password !== 'string') {
            throw new Error("Username dan password harus berupa teks");
        }

        // Pengecekan username dan password
        if (username === "admin" && password === "12345") {
            console.log("Login berhasil");
        } else {
            console.log("Username atau password salah");
        }

    } catch (error) {
        // Menangkap dan menampilkan pesan error
        console.log("Terjadi kesalahan:", error.message);
    }
}

// Pemanggilan fungsi sesuai instruksi
verifikasiLogin("admin", "12345");  // Login berhasil
verifikasiLogin("admin", "salah");  // Username atau password salah
verifikasiLogin(123, true);         // Terjadi kesalahan
