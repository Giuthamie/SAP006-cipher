const cipher = {

encode: function (offset, string){
  let textoCifrar = "";
  let numberoffset = parseInt(offset);

  for (let i= 0; i<=string.length; i++){

  let codigomsgci = string.charCodeAt(i);
  //Se for digitado maísculas de A a Z
  if(codigomsgci >=65 && codigomsgci <=90){
  let codigoformci = ((codigomsgci - 65 + numberoffset) %26) + 65;
  textoCifrar+=String.fromCharCode(codigoformci);
  }
  }
  return textoCifrar;
  //console.log(textoCifrar);
},
  
  
decode: function(offset, string){
  let textoDecifrar = "";
  let numberoffset = parseInt(offset);

  for (let i= 0; i<=string.length; i++){
  let codigomsgde = string.charCodeAt(i);
  
  if(codigomsgde >=65 && codigomsgde <=90){
  let codigoformde = ((codigomsgde - 90 - numberoffset) %26) + 90;
  textoDecifrar+=String.fromCharCode(codigoformde);

}
}
return textoDecifrar;
//console.log(textoDecifrar);
}

};




export default cipher;
