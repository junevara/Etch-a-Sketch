const html = document.querySelector('html');
const body = document.querySelector('body');

html.style.height = '100%';
body.style.height = '100%';

const container1 = document.querySelector('.container1');
const container1punkt1 = document.createElement('div');
container1punkt1.classList.add('container1punkt1');
container1.appendChild(container1punkt1);

container1.style.height = '100%';


container1punkt1.style.height = '100%';
container1punkt1.style.display = 'flex';
container1punkt1.style['flex-direction'] = 'column';
container1punkt1.style['justify-content'] = 'space-between';

//let size = 16;

function changeGridSize() {
    do{
    size = +(prompt('Set a gridsize of 2 to 100: ', 16));
    }while(size>100 || size<2)
    const rowElements2 = document.querySelectorAll('.rowElement');
    rowElements2.forEach(rowElement => rowElement.remove());
    const containers2_2 = document.querySelectorAll('.container2');
    containers2_2.forEach(container2 => container2.remove());
    makeGrid(size);
    
}

const button = document.querySelector('#setGridSize');
button.addEventListener('click', changeGridSize);


function makeGrid(size = 16){

    for (let i = 0; i < size; i++){
        const container2 = document.createElement('div');
            container1punkt1.appendChild(container2);
            container2.classList.add('container2');
        }


    const containers2 = document.querySelectorAll('.container2');

    containers2.forEach(container2 => {
        //container2.style.borderStyle = 'solid';
        //container2.style.borderWidth = '2px';
        //container2.style.borderColor = 'red';
        container2.style['flex-grow'] = '1'; 
        container2.style.display = 'flex';
        container2.style.justifyContent = 'space-between';
        for (let i = 0; i < size; i++){
            const rowElement = document.createElement('div');
            container2.appendChild(rowElement);
            rowElement.classList.add('rowElement');
            rowElement.style.flexGrow = '1';
            //rowElement.style.borderStyle = 'solid';
            //rowElement.style.borderColor = 'green';
            const rowElements = document.querySelectorAll('.rowElement');
            rowElements.forEach(rowElement => rowElement.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'purple';
            }))
                
            }

        });
}   

makeGrid();








