


// addEventListener
const p4 = document.querySelector('section#b p');

function tambahItem(){
    const sectionB = document.querySelector('section#b ul');
    
    const liBaru = document.createElement('li');  
    const textLiBaru = document.createTextNode('item');
    
    liBaru.appendChild(textLiBaru);
  
    sectionB.appendChild(liBaru);
    
}


p4.addEventListener('click', tambahItem);

// perbedan event handler dan event listener
const p3 = document.querySelector('.p3');

// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function(){
//     p3.style.color = 'red';
// }

p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightblue';
})

p3.addEventListener('click', function (){
    p3.style.color = 'red';
})



const tombol = document.querySelector('section#a button');
const b = document.body;

// tombol.addEventListener('mouseenter', function(){
//     b.classList.add('biru-muda');
// })
// tombol.addEventListener('mouseleave', function(){
//     b.classList.remove('biru-muda');
// })

tombol.addEventListener('click', function(){
    b.classList.toggle('biru-muda');
}) 

tombol.innerText = "Biru Muda";

tombol.style.backgroundColor = '#333';
tombol.style.color = '#fff';
