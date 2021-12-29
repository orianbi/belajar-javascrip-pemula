var tanya = true;

while (tanya) {
    

// menangkap pilihan player
var p = prompt('Pilihan : gajah, semut, orang');

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34){
    comp = 'gajah';
}else if(comp >= 0.34 && comp < 0.67){
    comp = 'orang';
}else{
    comp = 'semut';
}
// menentukan rules
var hasil = '';

if (p == comp){
    hasil = 'SERI!';
}else if(p == 'gajah'){
    hasil = (comp  == 'orang')? 'MENANG!':'KALAH!';
}else if(p == 'orang'){
    hasil = (comp == 'semut')? 'MENANG!':'KALAH!';
}else if(p == 'semut'){
    hasil = (comp == 'gajah')? 'MENANG!':'KAHALH!';
}else{
    alert('Ada Memasukan pilihan yang salah ');
}



// tampilkan hasilnya
alert('Kmau memilih : ' + p +' dan Komputer memilih '+ comp + ' \n Maka hasilnya kamu : '+ hasil);
tanya = confirm('Maen lagi?');
}
alert('Terimakasih suduah bermain.')