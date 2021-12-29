// DOM selection
// document.getElementById()
// -> mengembalikan element

// const judul = document.getElementById('judul');
// judul.style.backgroundColor = '#ccc';
// judul.style.color = '#333';
// judul.style.textAlign = 'center';
// judul.style.fontSize = '20px';
// judul.innerHTML = "Muhammad Isa Asrori";

// document.getElementsByTagName() // menggunakan index
// -> mengembalikan HTMLCollection

// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){

//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '25px';


// console.log(p);
// console.log(h1);

// document.getElementsByClassName(); // menggunakan index
// -> mengembalikan HTMLCollection ( harus berisi element HTML saja)
// const p1 = document.getElementsByClassName('p1')[0];
// p1.style.color = '#fff';
// p1.innerHTML = 'Programmer';
// p1.style.backgroundColor = '#333';
// console.log(p1);

// document.querySelector()
// -> mengembalikan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.backgroundColor = '#ccc';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';
// li2.innerHTML = 'Javascript';
// li2.innerText = 'ptyhon';
// li2.style.fontSize = '25px';

// kekurangan
// rencana mau mengubah semua element p tapi dia akan merubah element p yang
// pertama kali di temukan (bisa menggunakan querySelectorAll());

// const p = document.querySelector('p');
// p.innerHTML = 'Mengubah element yang pertama kali di temuka dalam window';


// document.querySelectorAll() // menggunakan index
// -> mengembalikan NodeList (dapat berisi node apa pun, bisa html, text dll);

// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].innerHTML = 'Mengubah text menggunakan javascript';
//     p[i].style.backgroundColor = 'lightblue';
//     p[i].style.color = '#333';
    
// }


// console.log(p)

// Mengubah Node root

// cek element paragraf 4 tidak punya id dan className, jadi 
// kita menggunakan TagName dan querySelectorAll

// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'lightblue';
// atau
// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

// Node root

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';
// atau
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].style.backgroundColor = 'orange';