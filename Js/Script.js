var salarioBruto = null;
var descontoFixo = null;
var dentroFaixaSalario = null;
//var descontoIRPF = null;
//var descontoTotalINSS = null;
//var salarioDescINSS = null;
var parcelaDedutiva = 0;
//var descontoFaixa=null;
var taxaINSS=null;
var taxaIRPF=null;
var salarioLiquido=null;

var teto1INSS = 1045;
var teto2INSS = 2089.6;
var teto3INSS = 3134.4;
var teto4INSS = 6101.06;
var taxa1INSS = 0.075;
var taxa2INSS = 0.09;
var taxa3INSS = 0.12;
var taxa4INSS = 0.14;
var descontoFixo1 = teto1INSS * taxa1INSS;
var descontoFixo2 = (teto2INSS - teto1INSS) * taxa2INSS + descontoFixo1;
var descontoFixo3 = (teto3INSS - teto2INSS) * taxa3INSS + descontoFixo2;
var descontoFixo4 = 713.1;


var teto1IRPF = 1903.98;
var teto2IRPF = 2826.65;
var teto3IRPF = 3751.05;
var teto4IRPF = 4664.08;
var taxa1IRPF = 0.075;
var taxa2IRPF = 0.15;
var taxa3IRPF = 0.225;
var taxa4IRPF = 0.275;
var parcelaDedutiva1 = 142.8;
var parcelaDedutiva2 = 354.8;
var parcelaDedutiva3 = 636.13;
var parcelaDedutiva4 = 869.36;

function calcularSalario(){
  salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
console.log("salario Bruto " +salarioBruto );

  if (salarioBruto <= teto1INSS) {
    descontoFixo = 0;
    dentroFaixaSalario = salarioBruto;
    taxaINSS = taxa1INSS;
  } else if (salarioBruto > teto1INSS && salarioBruto <= teto2INSS) {
    descontoFixo = descontoFixo1;
    dentroFaixaSalario = salarioBruto - teto1INSS;
    taxaINSS = taxa2INSS;
  } else if (salarioBruto > teto2INSS && salarioBruto <= teto3INSS) {
    descontoFixo = descontoFixo2;
    dentroFaixaSalario = salarioBruto - teto2INSS;
    taxaINSS = taxa3INSS;
  } else if (salarioBruto > teto3INSS && salarioBruto <= teto4INSS) {
    descontoFixo = descontoFixo3;
    dentroFaixaSalario = salarioBruto - teto3INSS;
    taxaINSS = taxa4INSS;
  } else {
    descontoFixo = descontoFixo4;
    dentroFaixaSalario = salarioBruto - teto4INSS;
    taxaINSS = 0;
  }

  var  descontoFaixa = dentroFaixaSalario * taxaINSS;
  var descontoTotalINSS = descontoFixo + descontoFaixa;
  var salarioDescINSS = salarioBruto-descontoTotalINSS;
  console.log( "dentro da faixa " + dentroFaixaSalario);
  console.log( "taxa INSS " +taxaINSS);
  console.log( "desconto faixa " +descontoFaixa);
  console.log( "dentro total INSS " +descontoTotalINSS);
  console.log( "Salario desconto INSS " +salarioDescINSS);

if (salarioDescINSS <= teto1IRPF) {
    taxaIRPF = 0;
    parcelaDedutiva = 0;
  } else if (salarioDescINSS > teto1IRPF && salarioDescINSS <= teto2IRPF) {
    taxaIRPF = taxa1IRPF;
    parcelaDedutiva = parcelaDedutiva1;
  } else if (salarioDescINSS > teto2IRPF && salarioDescINSS <= teto3IRPF) {
    taxaIRPF = taxa2IRPF;
    parcelaDedutiva = parcelaDedutiva2;
  } else if (salarioDescINSS > teto3IRPF && salarioDescINSS <= teto4IRPF) {
    taxaIRPF = taxa3IRPF;
    parcelaDedutiva = parcelaDedutiva3;
  } else{
    taxaIRPF = taxa4IRPF;
    parcelaDedutiva = parcelaDedutiva4;
  }
  

  var descontoIRPF = salarioDescINSS * taxaIRPF - parcelaDedutiva;
 
  console.log( "taxa IRPF " +taxaIRPF);
  console.log( "parcela Dedutiva " +parcelaDedutiva)
  console.log( "teto1 IRPF " +teto1IRPF);
  teto1IRPF

var descontoINSS=descontoTotalINSS;

var descontoTotal=descontoINSS+descontoIRPF;
salarioLiquido = salarioBruto-descontoTotal;

console.log( "desconto IRPF  " +descontoIRPF);
console.log( "desconto total  " +descontoTotal);
console.log( "Salario líquido " +salarioLiquido);

document.getElementById('descontoINSS').innerHTML =
    'Desconto INSS:  R$' + descontoINSS.toFixed(2);
document.getElementById('descontoIRPF').innerHTML =
    'Desconto IRPF: R$' + descontoIRPF.toFixed(2);
document.getElementById('descontoTotal').innerHTML =
    'Desconto Total: R$' + descontoTotal.toFixed(2);
document.getElementById('salarioLiquido').innerHTML =
    'Salário Líquido: R$' + salarioLiquido.toFixed(2); 
}


function limpar() {
  document.getElementById("salarioBruto").value = 0;
   document.getElementById("descontoINSS").innerHTML = "";
  document.getElementById("descontoIRPF").innerHTML = "";
  document.getElementById("descontoTotal").innerHTML = "";
  document.getElementById("salarioLiquido").innerHTML = "";
}

