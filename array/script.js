// menampah array

// var arr = [];

// arr[0] = 'isa';
// arr[1] = 'asrori';

// console.log(arr);

// menampilkan array secara looping

// var arr = ['isa', 'asrori','ori','muhammad','zyan'];

// for(var i = 0; i < arr.length; i++){
//     console.log('Mahasiswa ke- ' + (i+1) + ':'+ arr[i]);
// }

// method array

// 1 join 
// console.log(arr.join(' - '));

// 2. push (tambah di akhir) & pop (hapus di akhir)

// arr.push('tika','dila');

// cuma bisa menghapus sekali
// arr.pop(); 
// arr.pop(); 

// console.log(arr.join(' , '));
// 3. unshift (tambah di awal) & shift (hapus di akhir)

// arr.unshift('tika', 'dila');

// arr.shift();
// arr.shift();

// console.log(arr.join(' - '));

var arr = ['isa', 'asrori','ori','muhammad','zyan'];
// 4 splice (menyisipkan array di tengah)
// splice( indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)

arr.splice(1,0,'rian','habibi','ririn');

console.log(arr.join(' - '));

// 5. slice (mengiris array)
// slice(awal,akhir), array yang akhir tidak di ekseskusi, dan slice mengahsilkan array baru

// var arr = ['isa', 'asrori','ori','muhammad','zyan','insan'];
// sya mau iri ori dan muhammad 
// var arr1 = arr.slice(2,4);
// array lama
// console.log(arr.join(' - ')); 
// array baru
// console.log(arr1.join(' - '));

// 6. foreach (perulangan sepreti for tapi lebih sakti)

// var nama = ['isa', 'asrori','ori'];

// nama.forEach(function(e){
//     console.log(e);
// }) 
// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke- '+ (i + 1) + ' adalah :' + e );
// })

// 7. map
//  var angka = [1,2,3,4,5,6,7];
//  var angka1 = angka.map(function(e){
//      return e * 2;
//  })

//  console.log(angka1.join(' - '));

// 8. sort