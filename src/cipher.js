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
  console.log(textoCifrar);
},
  
  
decode: function(offset, string){
  let textoDecifrar = "";
  let numberoffset = parseInt(offset);

  for (let i= 0; i<=string.length; i++){
  let codigomsgde = string.charCodeAt(i);
  
  if(codigomsgde >=65 && codigomsgde <=90){
  let codigoformde = 90-((90-codigomsgde + numberoffset) %26);
  textoDecifrar+=String.fromCharCode(codigoformde);

}
}
console.log(textoDecifrar);
}

};




export default cipher;
