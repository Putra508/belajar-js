const fs = require("fs")

const film = fs.readFileSync("film.json", "utf-8")
const data = JSON.parse(film)

//  console.log("Sebelum PARSING ; ", film);
//  console.log("HASIL PARSING ; ", data);


//  data.push(
//      {id: 1, judulfilm: "Agak laen", tahunrilis: "(2024)", genrefilm: [" Horor", "komedi"] },
//      {id: 2, judulfilm: "Habibie & Ainun", tahunrilis: "(2012)", genrefilm: [" Drama", "Romantis"] },
//      {id: 3, judulfilm: "Dilan 1990", tahunrilis: "(2018)", genrefilm: [" Romantis"] }
//  )

//  fs.writeFileSync("film.json", JSON.stringify(data, null, 2))

console.log("Daftar film:");

// console.log("data length : ", data.length);

for (i = 0; i<data.length; i++) {
    console.log(data[i].id + ". " + data[i].judulfilm +" " + data[i].tahunrilis + "-"+ data[i].genrefilm);
}