var str = (' yuAN ')
str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});
// replace(/\b[a-z]/g regex ou regexp --> expresssion régulière

 // str = str.replace(' ','');
str = str.trim(); // " str    " vaut "str"
let command = str
switch(command) {
    case 'Dollars' :
        console.log('vous payez en dollars')
        break;
    case 'Euro' :
        console.log('vous payez en euros')
        break;    
    case 'Yuan' :
        console.log('vous payez en yuan')   
        break;
    default :
        console.log('aucune devise valide')
        break;
}

