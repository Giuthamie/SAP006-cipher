const cipher = {

encode: function (offset, string){
  let textoCifrar = "";
  let numberoffset = parseInt(offset);

  if (typeof offset !== "number"){
    throw TypeError('Offset precisa ser número') 

 }
 if (typeof string !== "string"){
   throw TypeError('String precisa ser letra') 

}

  for (let i= 0; i<=string.length; i++){

    let codigomsgci = string.charCodeAt(i);
    
    if(codigomsgci >=65 && codigomsgci <=90){
    let codigoformci = ((codigomsgci - 65 + numberoffset) %26) + 65;
    textoCifrar+=String.fromCharCode(codigoformci);
    }
    else if
    (codigomsgci >=97 && codigomsgci <=122){
      let codigoformci = ((codigomsgci - 97 + numberoffset) %26) + 97;
      textoCifrar+=String.fromCharCode(codigoformci); 
    }
    else if (string.charCodeAt(i) == 32) {
      textoCifrar+= string.charAt(i);
    } else if (string.charCodeAt(i) == 33) {
      textoCifrar+= string.charAt(i);
    } else if (string.charCodeAt(i) == 44) {
      textoCifrar+= string.charAt(i);
    } 
     else if (string.charCodeAt(i) == 64) { 
      textoCifrar+= string.charAt(i);
    }
    }

    
    return textoCifrar;
    
},
  
  
decode: function(offset, string){
  let textoDecifrar = "";
  let numberoffset = parseInt(offset);

  if (typeof offset !== "number"){
     throw TypeError('Offset precisa ser número') 

  }
  if (typeof string !== "string"){
    throw TypeError('String precisa ser letra') 

 }
  

  for (let i= 0; i<=string.length; i++){
  let codigomsgde = string.charCodeAt(i);
  
    if(codigomsgde >=65 && codigomsgde <=90){
    let codigoformde = ((codigomsgde - 90 - numberoffset) %26) + 90;
    textoDecifrar+=String.fromCharCode(codigoformde);

    }
    else if (codigomsgde >=97 && codigomsgde <=122){
    let codigoformde = ((codigomsgde - 122 - numberoffset) %26) + 122;
    textoDecifrar+=String.fromCharCode(codigoformde);
    }
    else if (string.charCodeAt(i) == 32) {
      textoDecifrar+= string.charAt(i);
    } else if (string.charCodeAt(i) == 33) {
      textoDecifrar+= string.charAt(i);
    } else if (string.charCodeAt(i) == 44) {
      textoDecifrar+= string.charAt(i);
    }
     else if (string.charCodeAt(i) == 64) { 
      textoDecifrar+= string.charAt(i);
    }
    }

  return textoDecifrar;


}

};




export default cipher;
