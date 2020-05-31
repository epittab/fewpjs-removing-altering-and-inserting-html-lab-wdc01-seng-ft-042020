// Write your code here!
const main = document.querySelector('main');
main.remove();


let header = document.createElement('h1');
document.body.appendChild(header);


let newHeader = document.body.querySelector('h1');
newHeader.id = "victory";
newHeader = document.body.querySelector('h1#victory');


const myName = 'Enrique Pittaluga';
newHeader.innerHTML = `${myName} is the champion`;