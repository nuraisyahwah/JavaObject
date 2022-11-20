console.log("Selamat pagi")

// // variabel
// let npm = 2125250087
// let nama = "Nur Aisyah Wahyuni"
// // array
// let arrayMahasiswa = ["Dinda", "Icha"];
// let arrayDosen = Array("Ahmad", "Ali")
// // objek
// let mahasiswa = {
//     npm: 2125250087,
//     nama: "Nur Aisyah",
//     hobi: ["ngoding", "gaming", "reading"]
// }

// console.log(arrayMahasiswa[0])
// console.log(arrayDosen[1])
// console.log(mahasiswa.nama) //output Nur Aisyah
// console.log(mahasiswa.hobi[0]) // output ngoding

console.log("mulai")

let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")

let data = []
tampil()

function simpan() {
    console.log("Button simpan ditekan")
    console.log(txtNpm.value)
    console.log(txtNama)

    // simpan object ke array data

    // cek apakah ada data didalam localStroge dengan key lsMahasiswa
    if (localStorage.getItem("lsMahasiswa") === null) {
        //jika localstorage dengan key lsMahasiswa belum ada

        // simpan object ke array data
        data.push({
            "npm": txtNpm.value,
            "nama": txtNama.value
        })
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))
    } else {
        //jika localStorage dengan key lsMahasiswa sudah ada/sudah disimpan sebelumnya

        // ambil dulu data di localstorage dengan key lsMahasiswa
        let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
        console.log(dataLs)
        // push data baru kedalam array
        dataLs.push({
            "npm": txtNpm.value,
            "nama": txtNama.value
        })
        // simpan data baru ke dalam localStorage
        localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))
    }
    // panggil function tampil()
    tampil()
}

function tampil() {
    // clear elemen listMahasiswa
    listMhs.innerHTML = ""
    data.forEach(listData)

    //  clear elemen tblMahasiswa 
    tblMhs.innerHTML = ""
    //ambil data localstorage dengan key lsMahasiswa
    dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    dataTampil.forEach(listData)
}

function listData(item, index) {
    //  innerHTML elemen ul id="listMahasiswa" pada index.html
    listMhs.innerHTML += "<li class='list-group-item'>" + item.npm + "-" + item.nama + "</li>"
    // innerHTML elemen table id="tblMahasiswa" pada index.html
    tblMhs.innerHTML += `<tr><td>${item.npm}</td><td>${item.nama}</td></tr>`
}