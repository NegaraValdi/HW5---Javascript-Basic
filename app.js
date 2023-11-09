// Cek untuk mulai registrasi
console.log("Memulai Registrasi")

// Function untuk tiap inputnya

let data = []
function getDataInput () {
    // Input untuk nama
    const nama_input = document.getElementById ("nama")
    console.log (nama_input.value)
    data.push (nama_input.value)
    console.log (data)

    // Input untuk usia
    const usia_input = document.getElementById ("usia")
    console.log (usia_input.value)
    data.push (usia_input.value)
    console.log (data)

    // Input untuk uang
    const uang_input = document.getElementById ("uang")
    console.log (uang_input.value)
    data.push (uang_input.value)
    console.log (data)

    // Input rata-rata
    const rata_rata = [uang_input.value, usia_input.value]
    var sum = 0
    for (var number of rata_rata) {
        sum += number
    }

    nilai_rerata = sum / rata_rata.length

    // Input tampilan
    const node = document.createElement ("td")
    const value_td = document.createTextNode ([nama_input.value, usia_input.value, uang_input.value, nilai_rerata.value])
    node.appendChild (value_td)
    document.getElementById ("data_registrasi").appendChild(node)
}

// Function validasi
function validasi () {
    var nama = document.getElementById ("nama").value
    var usia = document.getElementById ("usia").value
    var uang = document.getElementById ("uang").value
    if (nama.length < 10 && usia.value < 21 && uang >= "100.000" && uang <= "1.000.000") {
        return true;
    } else {
        alert ("Isi Form Dengan Benar!")
    }
}