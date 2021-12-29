const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.addEventListener('click', function(){
    // document.body.classList.toggle('biru-muda');
    document.body.classList.toggle('putih');
})

const bttnBaru = document.createElement('button');
const textBttnBaru = document.createTextNode('Acak Warna');
const bttnReset = document.createElement('button');
const textReset = document.createTextNode('reset Warna');

bttnBaru.appendChild(textBttnBaru);
bttnReset.appendChild(textReset);
bttnBaru.setAttribute('type','button');
bttnReset.setAttribute('type', 'button');

tUbahWarna.after(bttnBaru);
tUbahWarna.after(bttnReset);

bttnBaru.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})


bttnReset.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
})


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');


sMerah.addEventListener('change', function(){
     
    //  console.log(sMerah.value);s
    const r = sMerah.value;
    const g = sMerah.value;
    const b = sMerah.value;
    
    

     document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sHijau.addEventListener('change', function(){
    const r = sHijau.value;
    const g = sHijau.value;
    const b = sHijau.value;


    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

sBiru.addEventListener('change', function(){
    const r = sBiru.value;
    const g = sBiru.value;
    const b = sBiru.value;


    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})