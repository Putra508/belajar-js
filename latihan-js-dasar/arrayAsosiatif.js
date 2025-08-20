let tinggibadan=[
    {nama: "Rose", tinggi: 178},
    {nama: "Magnolia", tinggi: 153},
    {nama: "Daisy", tinggi: 165},
    {nama: "Jasmine", tinggi: 161},
    {nama: "Violet", tinggi: 159},
]

for ( i in tinggi) {
    let tinggiBadan = tinggi[i];
    console.log(tinggiBadan.nama + "memiliki tinggi" + tinggiBadan.tinggi +"cm");
}


console.log ("......Soal......")

let modal=1200000

let belanjaan=[

    {nama: "New Balance NB530", harga:390000},
    {nama: "NIke Vomero 5", harga:350000},
    {nama: "Adidas Samba", harga:180000},
    {nama: "Onitsuka Tiger Mexico", harga:420000},
]

let no=1
let totalHarga=0
for (let i= 0; 1 < belanjaan.length; i++){
    console.log(i+1+"."+belanjaan[i].nama+" - Rp. "+belanjaan[1].harga.tolocaleString("id-ID"));
    no++

    totalHarga+=belanjaan[i].harga
}

console.log("total belanjaan = Rp. " +totalHarga)

if (totalHarga<250000) {
    let diskon=totalHarga
}