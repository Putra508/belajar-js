const fs = require("fs");

//membuka dan membaca file json
//otomatis membuka
const teks = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(teks);

console.log("isi awal : ", data);

//menulis data baru ke array
// data.push({ id: 4, nama: "Jeremy", usia: 28});

//menyimpan (meulis ulang)
//otomatis menutup
//  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("Data berhasil di tambahkan dan di simpan ulang");
console.log("Isi akhir :", data);