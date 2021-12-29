var lagi = true;
// var kesempatan = 3
// alert('kalkulator \n kesempatan 3 kali')
while (lagi) {
    

var pilih = prompt("Piliih : \n 1. tambah \n 2. kurang \n 3. kali \n 4. bagi");
var nilai1 = parseInt(prompt('Masukan nilai 1 :'));
var nilai2 = parseInt(prompt('Masukan nilai 2 :'));
var hasil;
function tambah(a,b){
    return a + b;
}
function kurang(a,b){
    return a - b;
}  
function kali(a,b){
    return a * b;
}
function bagi(a,b){
    return a / b;
}

if (pilih == '1'){
  hasil = tambah(nilai1,nilai2);
}else if(pilih == '2'){
    hasil = kurang(nilai1,nilai2);

}else if(pilih == '3'){
    hasil = kali(nilai1,nilai2)
}else if (pilih == '4'){
    hasil = bagi(nilai1,nilai2)
}else{
    alert('Angka yang anda inputkan salah.')
}

alert("Hasil : " +  hasil);

lagi = confirm('lagi?');

}

// function hitungDuaVolum(a,b){
//     var volumA = a * a * a;
//     var volumB = b * b * b;

//     var total = volumA + volumB;

//     return total;
// }

// alert(hitungDuaVolum(8, 3));
// alert(hitungDuaVolum(10, 6));


// var a = 8;
// var b = 3;

// volumA = a * a * a;
// volumB = b * b * b;

// total = volumA + volumB;

// console.log(total);