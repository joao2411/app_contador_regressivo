//constante segundo 1000 em milesegundo
const second = 1000;
//6000 milisegundos
const minute = second * 60;
//3600 segundos
const hour = minute * 60;
//86400 segundos (24 horas)
const day = hour * 24;
//data definida que será setada
let dataDefinida = new Date('03/01/2040 00:00:00').getTime();
//variavel para ativar função contador cada 1 segundo (1000ms)
let ativar = setInterval(() => contador(), second);



//função novaData
function novaData() {
  //limpa um cronômetro definido com o setInterval
  clearInterval(ativar);
  //recebe data escolhida
  let date_end = document.querySelector('#dateNova').value;
  // receber data escolhida pelo usuário
  dataDefinida  = new Date(`${date_end} 00:00:00`).getTime();
  //ativar contador
  ativar = setInterval(() => contador(), second);



  function contador() {
    //data e hora local
    let nova = new Date(Date.now()).getTime();
    //diferença data escolhida e data local 
    let subtracao = dataDefinida  - nova;
  //mostrar a diferença (subtração) e divide pela viariavel day
    document.getElementById('dia').innerHTML = Math.floor(subtracao / day);
    // retorna o menor número inteiro  restante da divisão (diferença de horas que faltam e variavel dia) dividido por 1 hora
    document.getElementById('hora').innerHTML = Math.floor(subtracao % day / hour);
       // retorna o menor número inteiro  restante da divisão (diferença que falta até a data definida e variavel hora ) dividido por 1 minuto
    document.getElementById('minuto').innerHTML = Math.floor(subtracao % hour / minute);
       // retorna o menor número inteiro  restante da divisão (diferença que falta até a data definida e variavel minuto) dividido por 1 segundo
    document.getElementById('segundo').innerHTML = Math.floor(subtracao % minute / second);
  
  }

}
// função ativada assim que o usuário altera o valor 
dateNova.addEventListener('change', novaData)