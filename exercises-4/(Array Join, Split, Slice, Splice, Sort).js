var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(input) {
    input.splice(1, 0, "Roman Alamsyah Elsharawy");
    input.splice(2, 0, "Provinsi Bandar Lampung");
    input.splice(3, 0, "21/05/1989");
    input.splice(4, 0, "Pria");
    input.splice(5, 0, "SMA Internasional Metro");
    input.splice(6, 7);

    console.log(input);

    var bulan = 5;
    bulan2 = ["", "january", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    switch (bulan) {
        case 1:
            console.log(bulan2[1])
            break;

        case 2:
            console.log(bulan2[2])
            break;

        case 3:
            console.log(bulan2[3])
            break;

        case 4:
            console.log(bulan2[4])
            break;

        case 5:
            console.log(bulan2[5])
            break;

        case 6:
            console.log(bulan2[6])
            break;

        case 7:
            console.log(bulan2[7])
            break;

        case 8:
            console.log(bulan2[8])
            break;

        case 9:
            console.log(bulan2[9])
            break;

        case 10:
            console.log(bulan2[10])
            break;

        case 11:
            console.log(bulan2[11])
            break;

        case 12:
            console.log(bulan2[12])
            break;

        default:
            console.log("bukan Bulan yang di pilih");
    }

    var kata = "1989/05/21";
    splitTgl = kata.split("/");
    console.log(splitTgl);


    var balikKata = splitTgl //['1989','05','21'];
    balikKata.sort(function (value1, value2) {
        return value1 += value2
    });
    console.log(balikKata.join('-'));


    //Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

    var ambil = "Roman Alamsyah Elsharawy";
    console.log(ambil.slice(0, 15))
    console.log(ambil.length);

}




/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */