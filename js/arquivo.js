function enviar(){

  var nome = document.getElementById('txt-nome');
  if (nome.value != "") {
  alert("Área indisponivel" +nome.value);
  }
  else {
    alert("Área em manutenção");
  }

}
