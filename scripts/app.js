const APP = document.querySelector('#app');
const RESTART = document.querySelector("#restart");
let cells = APP.querySelectorAll('.cell');
let color = randomColor();
let colors = {
  initColor: 'rgba(' + color[0] +', '+color[1]+ ', ' + color[2] + ', 1)',
  lightColor: 'rgba(' + color[0] +', '+color[1]+ ', ' + color[2] + ', '+ color[3] + ')'
}
let randomCell = Math.floor(Math.random() * 4);
var conta = 0;

function init(cellNum,cellWid) {
  APP.innerHTML = '';
  for (let i = 0; i < cellNum; i++) {
    APP.innerHTML += "<div class='cell' style='height:" + cellWid + "%; width:" + cellWid + "%'></div>";
    document.querySelectorAll('.cell')[i].style.background = colors.initColor;
  }
  cells = APP.querySelectorAll('.cell');
  cells[randomCell].style.background = colors.lightColor;
  guessCell(cellNum,cellWid);
}

function guessCell(cellNum,cellWid) {
  const winCell = cells[randomCell];
  for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", function () {
      if(i===randomCell) {
        conta++;
        color = randomColor();
        colors = {
         initColor: 'rgba(' + color[0] +', '+color[1]+ ', ' + color[2] + ', 1)',
         lightColor: 'rgba(' + color[0] +', '+color[1]+ ', ' + color[2] + ', '+ color[3] + ')'
        };
        if(conta==1||conta===4||conta===10){
          cellNum = (cellNum*4);
          cellWid = (cellWid/2);
          conta++;
        }
        randomCell = Math.floor(Math.random() * cellNum);
        init(cellNum, cellWid);
      }
    })
  }
}

function restart() {
  color = randomColor();
  colors = {
   initColor: 'rgba(' + color[0] +', '+color[1]+ ', ' + color[2] + ', 1)',
   lightColor: 'rgba(' + color[0] +', '+color[1]+ ', ' + color[2] + ', '+ color[3] + ')'
 };
}
 
 RESTART.addEventListener("click", function() {
  randomCell = Math.floor(Math.random() * 4);
  restart();
  conta = 0;
  init(4,50);
 });

 function randomColor() {
  var r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256); 
  let b = Math.floor(Math.random()*256);
  return [r,g,b,0.80];
}

init(4, 50);


