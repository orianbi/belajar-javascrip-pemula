
// MANIPULASI NODE
// 1. document.createElement()
// 2. document.createTextNode()
// 3. node.appendChild()
// 4. node.insertBefore()
// 5. parentNode.removeChild()
// 6. parentNode.replaceChild()
// .....

// APPENDCHILD()
//   buat element baru di section A
const pBaru = document.createElement('p');
// buat text/node elemen yang mau di isi di elemene baru
const textPBaru = document.createTextNode('paragraf Baru');

// masukan text ke dalaman element
pBaru.appendChild(textPBaru);

// menambah pBaru ke dalalm section A ke dalam html akan di taruh di akhir element 
// yg ada di dalam section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

const sectionA = document.getElementById('a');
const p2= sectionA.getElementsByTagName('p')[2];
// const p = document.querySelector('p:nth-child(4)');
sectionA.insertBefore(pBaru, p2);



// INSERTBEFORE()

// buat element baru di section B
const liBaru = document.createElement('li');
// buat text/node elemen yang mau di isi di elemene baru
const textLiBaru = document.createTextNode('Item Baru');

// masukan text ke dalam element

liBaru.appendChild(textLiBaru);
// menambah liBaru ke dalalm section B ke dalam html akan di taruh di element 
// yg di ingin kan dalam section B

// li tidak punya kelas mau pun id, tangkap perent satu tinggal dari element li
const sectionBUl = document.querySelector('section#b ul');
// nth-child(index mulai dari 1)
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
const li2 = sectionBUl.querySelector('li:nth-child(2)');

sectionBUl.insertBefore(liBaru, li2);

// REMOVECHILD()
const link = sectionA.getElementsByTagName('a')[0];
// const link = sectionA.getElementsByTagName('p')[1];

sectionA.removeChild(link);

// REPLACECHILD()
// ambil element perent di atas nya
const sectionB = document.getElementById('b');
// ambil element yg mau di replach
const p4 = sectionB.querySelector('p');

const h3Baru = document.createElement('h3');
const textH2Baru = document.createTextNode('Judul Baru!');

h3Baru.appendChild(textH2Baru);

sectionB.replaceChild(h3Baru, p4);


