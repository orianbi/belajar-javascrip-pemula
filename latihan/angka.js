alert('tebak angka dari 1 - 10 \n kamu punya 3 kesempatan ');

// membangkitkan bilangan random
var comp = Math.floor(Math.random() * 10);
var kesempatan = 3;
for(var i = 1; i < kesempatan ; i++) {
// menangkap pilihan player
var angka = parseInt(prompt('Masukan angka tebakan : 1 - 10 '));

// menentukan rules


if (angka == comp){
    hasil = 'BENAR!';
    break;
}else if(angka > comp){
    alert('terlalu BESAR!')

}else if(angka < comp ){
    alert('terlalu KECIL!');
}else{
    alert('Anda memasukan pilihan yang salah')
}

alert('kesempatan tinggal ' + i) + 1;

}

alert('terimakasih sudah bermain.');