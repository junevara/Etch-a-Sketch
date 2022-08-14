const html = document.querySelector('html');
const body = document.querySelector('body');

html.style.height = '100%';
body.style.height = '100%';

const container1 = document.querySelector('.container1');


container1.style.height = '100%';
container1.style.display = 'flex';
container1.style['flex-direction'] = 'column';
container1.style['justify-content'] = 'space-between';


for (let i = 0; i < 16; i++){
const container2 = document.createElement('div');
    container1.appendChild(container2);
    container2.classList.add('container2');
}


const containers2 = document.querySelectorAll('.container2');

containers2.forEach(container2 => {
    container2.style.borderStyle = 'solid';
    container2.style.borderWidth = '2px';
    container2.style.borderColor = 'red';
    container2.style['flex-grow'] = '1'; 
    container2.style.display = 'flex';
    container2.style.justifyContent = 'space-between';
    for (let i = 0; i < 16; i++){
        const rowElement = document.createElement('div');
        container2.appendChild(rowElement);
        rowElement.classList.add('rowElement');
        rowElement.style.flexGrow = '1';
        rowElement.style.borderStyle = 'solid';
        rowElement.style.borderColor = 'green';
        
    }

});






