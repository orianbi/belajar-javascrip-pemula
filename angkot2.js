var angkot = prompt('Masukan jumlah angkot anda: ');
var angkotBeroprasi = prompt('Masukan jumlah angkot yang beroprasi: ');
// var jumlahAngkot = 10;
// var angkotBeroprasi = 6;
var jumlahAngkot = parseInt(angkot);
var jumlahAngkotBeroprasi = parseInt(angkotBeroprasi);
var noAngkot = 1;

while (noAngkot <= jumlahAngkotBeroprasi) {
    console.log('Angkot No. '+ noAngkot + ' beroprasi dengan baik.');
    noAngkot ++;
    
  
}

for(noAngkot=jumlahAngkotBeroprasi+1;noAngkot<=jumlahAngkot;noAngkot++){
    console.log('Angkot No. '+ noAngkot + ' sedang tidak beroprasi.');
    
   }
   