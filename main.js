const html = document.querySelector('html');
const body = document.querySelector('body');

html.style.height = '100%';
body.style.height = '100%';

const container1 = document.querySelector('.container1');


container1.style.height = '100%';
container1.style.display = 'flex';
container1.style['flex-direction'] = 'column';
container1.style['justify-content'] = 'space-between';



function makeGrid(size = 16) {

    for (let i = 0; i < size; i++) {
        const container2 = document.createElement('div');
        
        container2.classList.add('container2', `${i}`);
        container1.appendChild(container2);
    }


    const containers2 = document.querySelectorAll('.container2');
    let columnnumber = 1;
    containers2.forEach(container2 => {
        //container2.style.borderStyle = 'solid';
        //container2.style.borderWidth = '2px';
        //container2.style.borderColor = 'red';
        container2.style['flex-grow'] = '1';
        container2.style.display = 'flex';
        container2.style.justifyContent = 'space-between';
        
        for (let i = 1; i <= size; i++) {
            const rowElement = document.createElement('div');
            
            rowElement.classList.add('rowElement', `${i}`);
            rowElement.setAttribute('id', `${columnnumber}`);
            rowElement.style.flexGrow = '1';
            container2.appendChild(rowElement);
            //rowElement.style.borderStyle = 'solid';
            //rowElement.style.borderColor = 'green';
            

        }
        columnnumber++;
    })
    
}

makeGrid();



let size2 = 16;

function mouseEvent(){
    let arr = [];
    for (let i = 0; i < 10000; i++){
    arr[i] = 0;
    }   


    const rowElements = document.querySelectorAll('.rowElement');
    rowElements.forEach(rowElement => rowElement.addEventListener('mouseover', (event) => {
        //event.target.style.backgroundColor = `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)} )`;
        console.log(event.target.getAttribute('class'));
        console.log(event.target.getAttribute('id'));
        event.target.style.backgroundColor ='purple';           
        let count = 0;
        for (let i = 1; i <= size2; i++){
            
            for (let j = 1; j <= size2; j++){
                if ((event.target.getAttribute('class') === `rowElement ${j}`) && (event.target.getAttribute('id') === `${i}`)){
                    
                    arr[count] += 1;

                    if (arr[count] === 1){
                        event.target.style.backgroundColor = 'rgb(230, 230, 230)';
                    }
                    else if (arr[count] === 2){
                        event.target.style.backgroundColor = 'rgb(200, 200, 200)';
                    }
                    else if (arr[count] === 3){
                        event.target.style.backgroundColor = 'rgb(170, 170, 170)';
                    }
                    else if (arr[count] === 4){
                        event.target.style.backgroundColor = 'rgb(140, 140, 140)';
                    }
                    else if (arr[count] === 5){
                        event.target.style.backgroundColor = 'rgb(100, 100, 100)';
                    }
                    else if (arr[count] === 6){
                        event.target.style.backgroundColor = 'rgb(70, 70, 70)';
                    }
                    else if (arr[count] === 7){
                        event.target.style.backgroundColor = 'rgb(30, 30, 30)';
                    }
                    else {
                        event.target.style.backgroundColor = 'rgb(0, 0, 0)';
                    }
                }
            
            count++;
            }

        
    }
             
}))};

mouseEvent();



function changeGridSize() {
    let size = 16;
    do {
        size = +(prompt('Set a gridsize of 2 to 100: ', 16));
    } while (size > 100 || size < 2)
    const container1 = document.querySelector('.container1');
    container1.innerHTML = "";
    /* const rowElements2 = document.querySelectorAll('.rowElement');
    rowElements2.forEach(rowElement => rowElement.remove());
    const containers2_2 = document.querySelectorAll('.container2');
    containers2_2.forEach(container2 => container2.remove()); */
    size2 = size;
    makeGrid(size);
    mouseEvent();
    
}

const button = document.querySelector('#setGridSize');
button.addEventListener('click', changeGridSize);

//const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));





















