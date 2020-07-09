function timmer(){
  let time = new Date();
  let h = document.getElementById('hours').innerHTML = time.getHours();
  let m = document.getElementById('minute').innerHTML = time.getMinutes();
  let s = document.getElementById('second').innerHTML = time.getSeconds();
  let clock = document.getElementById('clock');
  clock.innerHTML = "The current time is: " + time.getHours() + ':00';

  // clock = checktime(clock);
      h = checkHour(h);
      s = checktime(s);
      m =  checktime(m);

  // document.getElementById('clock').innerHTML = `${h} : ${m} : ${s}`;
  let t = setTimeout(timmer, 200);
}

function checktime(i){
  if(i <10){i = "0" + 1};
  return i;
}
function checkHour(l){
  let element = document.querySelector('#meals');
  if(l === 9){
    element.classList.add('breakFast');
  }else if(l === 14){
    element.classList.add('lunch');
  }else if(l === 18){
    element.classList.add('dinner');
  }else{
    element.classList.add('coding-pix') ;
  };
return l;
}


timmer()
