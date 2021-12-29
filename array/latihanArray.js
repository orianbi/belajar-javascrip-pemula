var penumpang = ['ori','zyan','tika'];
// var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
//  jika angkot kosong 
if ( penumpang.length == 0) {  
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
// else 
}else{
    // telusuri seluruh kursi dari awal
    for(var i = 0; i < penumpang.length; i++){
        // jika ada kursi kosong
        if(penumpang[i] == undefined){
            // tambah penumpang di kursi tersebut
            penumpang[i] = namaPenumpang;
            // kembalikan isi array & keluar dari function
            return penumpang;
        // jika sudah ada nama yang sama 
        }else if( penumpang[i] == namaPenumpang){            
            // tampilkan pesan kesalahanya
            console.log(namaPenumpang + ' sudah ada dalam angkot.');

            // kembalikan is array & keluar dari function
            return penumpang;

        // jika seluruh kursi terisi 
        }else if(i == penumpang.length - 1){          
            // tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
        }
        
        }
     }
} 

var hapusPenumpang = function (namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong, dan 
        // tidak mungkin ada penumpang turun
        console.log('angkot masih kosong.')
        // kembalikan isi arary & keluar dari functioin
        return penumpang;

    }else{
        // telusuri seluruh kursi dari awal
        for(var i=0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if(i == penumpang.length - 1){
                console.log(namaPenumpang + '  tidak ada di dalam angkot.')
                return penumpang;
            } 

        }
    }
}
// var tampil;
// tampil = tambahPenumpang('zyan',penumpang);
// var hapus;
// hapus = hapusPenumpang('ori', penumpang);

// tampil = tambahPenumpang('isa',penumpang);
// tampil = tambahPenumpang('zyan',penumpang);
// tampil = tambahPenumpang('zyan',penumpang);



// console.log(tampil);
// console.log(hapus);