//  DOM Manipulasi
// 1. Manipulasi Eelement
// 2. Manipulasi Node

// MANIUPULASI ELEMENT
// 1. element.innerHTML
// 2. element.style.<property>
// 3. element.setAttribute()
// 4. element.classList()
// ....   

// element innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>isa asrori</em>';
// atau
// const sectionA = document.querySelector('section#a');
// innerHTML bakalan menghapus semua element yang ada dalam section id=a
// di ganti dengan Hello World.
// sectionA.innerHTML = '<div>Hello World!</div>'

// element style

// const judul = document.querySelector('#judul');

// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// element setAttribute()
// element getAttribute()
// element removeAttribute()

// const judul = document.getElementsByTagName('h1')[0];
// // akan menambahkan attribute name dalam h1
// judul.setAttribute('name', 'judul'); 
// judul.setAttribute('class', 'judul'); 
// const a = document.querySelector('a');
// atau lebih specipik
// const a = document.querySelector('section#a a');
// a.setAttribute('id','link');
// a.removeAttribute('href');
// const b = a.getAttribute('id');
// console.log(a);
// console.log(b);
 
// element classList
// 1. classList.add() 
// 2. classList.remove()
// 3. classList.toggle() menambahkan jika element itu tdk mempunyai kelas dan hapus element class yg sudah ada 
// 4. classList.item() mengetahui celas tertentu
// 5. classList.contains() mengecek class tertentu
// 6. classList.replace() mengganti class yang ada sama class yg tertentu

// const p2 = document.querySelector('.p2');
// berhasil menambahkan tapi menimpa class yg sudah ada, jadi kurang efektif
// p2.setAttribute('class','label');

// gunakan classList


// p2.classList.add('label');
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.toggle('p2');
// item index mulai dari 0
// const item = p2.classList.item(2);
// console.log(item);
// contains menanyakan apakah ada celass tertentu
// p2.classList.contains('satu');
// console.log('satu');
// mengganit celasss yang sudah ada sama celass yg baru
// p2.classList.replace('satu','tiga');
// console.log(p2);





