

let bars = document.getElementById('bars');
let minrange = 2;
let maxrange = 100;

let barNum = 50;

let unsorted_array = new Array(barNum);
//genereaza numer aleatioriu
function number_randomiser(min,max){

    return Math.floor(Math.random() *(max - min + 1)) + min;
   
}
//punerea acelor numere aleatorii innr-un array//
function genRandArray(){

    for(let i = 0; i <barNum; i++){

        unsorted_array[i] = number_randomiser(minrange,maxrange);
    }

}
//Randarea array-ul la deschiderea paginii//
document.addEventListener('DOMContentLoaded', function(){

    genRandArray();
    renderB(unsorted_array);

});
//functie de randarea a array-ului//
function renderB(array){
for(let i = 0; i < array.length; i++){
  let bar = document.createElement("div");
  bar.classList.add("bar");
  bar.style.height = array[i] * 10 + "px";
  console.log(array[i]);
  bars.appendChild(bar);


}

}
//genereaza array nou cand apesi butonul//
document.getElementById('array_gen').addEventListener("click", function(){

 
  window.location.reload();

});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function bubbleSort(array) {
    let velements = document.getElementsByClassName("bar");
    
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          for (let k = 0; k < velements.length; k++) {
            if (k !== j && k !== j + 1) {
                velements[k].style.backgroundColor = "rgb(87,155,255)";
            }
          }
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          velements[j].style.height = array[j] * 10 + "px";
          velements[j].style.backgroundColor = "#ff57a1";
          velements[j].innerText = array[j];
          velements[j + 1].style.height = array[j + 1] * 10 + "px";
          velements[j + 1].style.backgroundColor = "#ff57a1";
          velements[j + 1].innerText = array[j + 1];
          await sleep(20);
        }
      }
      await sleep(20);
    }
    return array;
  }
  document.getElementById("sort_button").addEventListener("click", function(){

   let sorted_array = bubbleSort(unsorted_array);

 

  });









