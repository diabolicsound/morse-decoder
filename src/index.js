const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let sortedarr = expr.toString().match(/.{1,2}/g);
   let newarr = []
   for (let i = 0; i < sortedarr.length; i++) {
       if (sortedarr[i] == '00') {
           sortedarr[i] = '~~'
    newarr.push (sortedarr[i]);
       } 
        else if (sortedarr[i] == '10') {
           sortedarr[i] = '.~';
        newarr.push (sortedarr[i]);
       }
       else if (sortedarr[i] == '11') {
           sortedarr[i] = '-~';
        newarr.push (sortedarr[i]);
       }
       else if (sortedarr[i] == '**') {
        newarr.push (sortedarr[i]);
       } 
    }
    let newarrjoined = newarr.join('');
    let resarr = [];

    newarrjoined = newarrjoined.toString().match(/.{1,10}/g);
     for (let j = 0; j < newarrjoined.length; j++) {
        resarr.push(newarrjoined[j].replace(/~/g, ''));
 }
let finalarr = [];

 for (let t = 0; t < resarr.length; t++) {
     if (resarr[t] == '**********') {
     finalarr.push(' ')
     }
     else {
finalarr.push(MORSE_TABLE[resarr[t]]);
 }
}
return finalarr.join('');
}


module.exports = {
    decode
}