// soal no 1

console.log("=====================");
console.log("NO 1");
console.log("=====================");

const tinggi = [
    { nama: "Rose", tinggi: 178 },
    { nama: "Magnolia", tinggi: 153 },
    { nama: "Daisy", tinggi: 165 },
    { nama: "Jasmine", tinggi: 161 },
    { nama: "Violet", tinggi: 159 },
]

for (i in tinggi) {
    let tinggiBadan = tinggi[i];
    console.log(tinggiBadan.nama + " memiliki tinggi " + tinggiBadan.tinggi + " cm");
}

console.log("=====================");
console.log("NO 2");
console.log("=====================");



// soal no 2
const urut = tinggi.sort(function (a, b) { return a.nama.localeCompare(b.nama) })
for (i = 0; i < urut.length; i++) {
    let tinggiBadan = urut[i];
    console.log(tinggiBadan.nama + " : " + tinggiBadan.tinggi + " cm");
}


// const tinggi2 = tinggi.sort(function(a,b){return a.tinggi - b.tinggi}) 
// for ( i =0; i< urut.length; i++){
//     let tinggiBadan = urut[i];
//     console.log(tinggiBadan.nama + " : " + tinggiBadan.tinggi + " cm"); 
// }


console.log("===================");
console.log("NO 3");
console.log("===================");
let buah = [];

buah.push("Apel", "Mangga", "Jeruk", "Semangka", "Pisang", "Anggur", "Nanas")

const urutanBuah = buah.sort()
// console.log(urutanBuah);

for (i in urutanBuah) {
    console.log(i + ". " + urutanBuah[i])
}


console.log("=====Rincian Belanja Sepatu=====");

const arr = [
    { nama: "New Balance NB530", harga_sepatu: 390000 },
    { nama: "Nike Vomero 5", harga_sepatu: 350000 },
    { nama: "Adidas Samba", harga_sepatu: 180000 },
    { nama: "Onitsuka Tiger Mexico", harga_sepatu: 420000 },
]

let totalHarga = 0;
let diskon = 0;
let pembayaran = 1200000;

for (i = 0; i < arr.length; i++) {
    console.log((i + 1) + ". ", arr[i].nama, " - Rp. ", arr[i].harga_sepatu.toLocaleString("id-ID"))
    totalHarga = totalHarga + arr[i].harga_sepatu
}

if (totalHarga >= 800000) {
    diskon = 15
} else if (totalHarga < 799999 && totalHarga > 500000) {
    diskon = 10
} else if (totalHarga < 499999 && totalHarga > 250000) {
    diskon = 5
} else {
    diskon = null;
}

const formatRupiah = totalHarga.toLocaleString("id-ID");

console.log("--------------------------");
console.log("total belanja = ", formatRupiah);
console.log("Diskon = ", diskon, "%");
let potonganDiskon = totalHarga * (diskon / 100);
let hargaDiskon = totalHarga - potonganDiskon;
let kembalian = pembayaran - hargaDiskon;
console.log("potongan diskon = ", potonganDiskon.toLocaleString("id-ID"));
console.log("Harga setelah diskon = ", hargaDiskon.toLocaleString("id-ID"));
console.log("Pembayaran = ", pembayaran.toLocaleString("id-ID"));
console.log("Kembalian = ", kembalian.toLocaleString("id-ID"));



console.log("================");
console.log("NO 5");
console.log("================");

let daftarBelanja = []
daftarBelanja.push("Beras", "Minyak", "Gula")

daftarBelanja.push("Telur", "Sayur", "Buah")
const indexMinyak = daftarBelanja.indexOf("Minyak")
// console.log(indexMinyak);

daftarBelanja.splice(indexMinyak, 1)

daftarBelanja.sort()

// console.log(daftarBelanja);

for (let i = 0; i < daftarBelanja.length; i++) {
    let urutan = daftarBelanja[i]
    console.log(i + 1 + ". " + urutan);
}