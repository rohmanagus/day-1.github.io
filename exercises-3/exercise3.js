//Contoh input
var nama = "AgusRohman";
var peran = "Ksatria";

if (nama === "AgusRohman" && peran === "Ksatria") {
  console.log('Selamat datang di dunia Proxynita, ' + nama);
  console.log('halo ' + nama + ', kamu dapat menyerang dengan senjatamu');
} else if (nama === "Rohman" && peran === "Tabib") {
  console.log('Selamat datang di dunia Proxynita, ' + nama);
  console.log('Halo ' + nama + ' kamu akan membantu temen mu yang terluka');
} else if (nama === "Alex" && peran === "Penyihir") {
  console.log('Selamat datang di dunia Proxynita, ' + nama);
  console.log('Halo ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu ');
} else if (nama === '' && peran === '') {
  console.log('Nama harus di isi');
} else if (nama === 'Roh' && peran === '') {
  console.log('halo ' + nama + ', pilih peranmu untuk memulai game');
}


// Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"