var angkot = prompt('Masukan jumlah angkot anda:');
var angkotBeroprasi = prompt('Masukan jumlah angkot yang beroprasi:');
var angkotLembur = prompt('Masukan angkot lembur:');
var jumlahAngkot = parseInt(angkot);
var jumlahAngkotBeroprasi = parseInt(angkotBeroprasi);
var jumlahAngkotLembru = parseInt(angkotLembur);
var noAngkot = 1;

for (noAngkot;noAngkot <= jumlahAngkot; noAngkot++) {
    
    if (noAngkot <= jumlahAngkotBeroprasi) {
        console.log('Angkot No. '+ noAngkot + ' beroprasi dengan baik.');
    
    }else if( noAngkot <= jumlahAngkotLembru){
        console.log('Angkot No. '+ noAngkot + ' sedang lembur.');

    }else{
        console.log('Angkot No. '+ noAngkot + ' sedang tidak beroprasi.');
    }
    
}
