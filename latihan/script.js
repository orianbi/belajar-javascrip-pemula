var s = '';

// for (var i = 0; i < 7; i++) {
//     for (var j =0; j < 7; j++) {
//         s += '*';
       
        
//     }
     
//     s += '\n';
    
// }

// for (var i = 0; i < 7; i++) {
//     for (var j =0; j <= i; j++) {
//         s += '*';
       
        
//     }
     
//     s += '\n';
    
// }
// perulangan terbalik
// for (var i = 7; i > 0; i--) {
//     for (var j =0; j < i; j++) {
//         s += '*';
       
        
//     }
     
//     s += '\n';
    
// }

for (var i = 7; i > 0; i--) {
    for (var j =1; j <= 7; j++) {
        if (j >= i) {            
            s += '*';
        }else{
            s += ' ';
        }
       
        
    }
     
    s += '\n';
    
}
for (var i = 7; i > 0; i--) {
    for (var j =1; j <= i; j++) {
        if (j <= i) {            
            s += '*';
        }else{
            s += ' ';
        }
       
        
    }
     
    s += '\n';
    
}

console.log(s)