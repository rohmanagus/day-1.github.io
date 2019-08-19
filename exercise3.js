var nama = 'agus'
var peran = 'rohman'

if (peran == '' && nama == ''){
console.log("Nama harus diisi");
}
else if (peran == ''){
  console.log("Halo ",nama,", Pilih peranmu untuk memulai game")
}
else {
  console.log("Selamat datang di dunia Proxytia, ",nama)
  if(peran =="Ksatria"){
   console.log("Halo ",peran,nama,", kamu dapat menyerang dengan senjatamu") 
  }
  else if (peran == "Tabib"){
  console.log("Halo ",peran,nama,", kamu akan membantu teman kamu yang terluka") 
  }
  else{
    console.log("Halo ",peran,nama,", ciptakan keajaiban yang membantu kemenanganmu") 
  }
}
