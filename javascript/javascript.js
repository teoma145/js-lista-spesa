let listaspesa=[];
let counter=0;
let oggettoutente = '';
    

while(oggettoutente !=='stop' && counter < 20){
  oggettoutente= prompt('ti serve altro per la spesa?');
  if (oggettoutente !== 'stop') {
    listaspesa.push(oggettoutente);
    counter++;
  }
}

console.log(listaspesa)
