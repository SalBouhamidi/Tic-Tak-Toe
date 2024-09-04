
function boardmaker(id){
    board = document.createElement("div");
    board.setAttribute("class", `horizantal${id}`);
    document.querySelector(".main_section_bordgame").appendChild(board);
    for(let row= 0; row < 20; row++){
        divcreator(id, row);
    }
  
}

function divcreator (id, row){
    cases = document.createElement("div");
    cases.setAttribute("class", "main_section_bordgame_case")
    cases.setAttribute("id", `${id}-${row}`);
    cases.setAttribute("onClick", `position(${row}, ${id})`)
    document.querySelector(`.horizantal${id}`).appendChild(cases);
    // console.log(`rooow:${id}-cool:${row}`)

}

function restartGame(){
    for(let row =0; row <=19; row++){
        for(let col=0; col <=19; col++){
            document.getElementById(`${col}-${row}`).innerHTML = '';
        }
    }
}
// function matchNull(){
//     for(let row =0; row <=19; row++){
//         for(let col=0; col <=19; col++){
//             let cell = document.getElementById(`${col}-${row}`);
//         }
//     }
// }

function scoreText(){
    let scorenumber =document.createElement("span");
    scorenumber.setAttribute('id', 'scoreX');
    document.querySelector('.score-x').appendChild(scorenumber);
    if(localStorage.getItem('Scoredetector') == null){
        document.getElementById(`scoreX`).innerHTML = 0;

    }else{
        let scoreX = parseInt(localStorage.getItem('Scoredetector'))
        document.getElementById(`scoreX`).innerHTML = scoreX;
    }


    let scorenumberO = document.createElement("span");
    scorenumberO.setAttribute('id', 'scoreO');
    document.querySelector('.score-o').appendChild(scorenumberO);
    if(localStorage.getItem('scoredByO') == null){
        document.getElementById('scoreO').innerHTML = 0;
    }else{
        let scoreOo = parseInt(localStorage.getItem('scoredByO'));
        document.getElementById('scoreO').innerHTML = scoreOo;
    }

}


function position(row,id){

    const click = document.getElementById(`${id}-${row}`);
 
    if(click.innerHTML === '' ){
        // console.log(localStorage.getItem('lastchar'))
        if(localStorage.getItem('lastchar') === 'X'){
            click.innerHTML = 'O'
            localStorage.setItem('lastchar', 'O');
            whoGannaPlay()
            // console.log(localStorage.getItem('lastchar'));
        }else if(localStorage.getItem('lastchar') === 'O')
        {
            click.innerHTML = 'X'
            localStorage.setItem('lastchar', 'X');
            whoGannaPlay()
            // console.log(localStorage.getItem('lastchar'));
        }else if(localStorage.getItem('lastchar') == null){
            click.innerHTML = 'X'
            localStorage.setItem('lastchar', 'X');
            whoGannaPlay()
        }
    }else{
       click.style.cursor ='Not-allowed';
    }
    detectwinner(click,id , row);

}
function whoGannaPlay(){
    
    player = document.createElement("p");
    player.setAttribute('class', 'player');
    document.querySelector('.main_section_role_determinator').appendChild(player);
    // player.innerHTML= 'ok'
    let result = localStorage.getItem('lastchar');
    if(result == 'X'){
        document.querySelector('.player').innerHTML = 'O: Ganna play';
    }else if(result == 'O'){
        document.querySelector('.player').innerHTML = 'X: ganna play'
    }
    scoreText()
    

}


function stepForward(number){
    if(number <= 15){
        step= 4;
        return step;
    }else if(number > 15 && number <= 19){
        step = 19-number;
        return step;
    } 
}

function stepback(number){
    if(number >= 4){
        step= 4;
        return step;
    }else if(number < 4){
        step = number;
        return step;
    }
}

function scoreCalculation(){
    let scoreX = parseInt(localStorage.getItem('Scoredetector'));
    scoreX++;
    localStorage.setItem('Scoredetector',scoreX );
}
function scoreCalculationO(){
    console.log('heeeer');
    console.log(localStorage.getItem('scoredByO'));
    // console.log(localStorage.getItem('hjhjhjhj'))
    let scoreO = localStorage.getItem('scoredByO');
    if(scoreO == null){
        localStorage.setItem('scoredByO', 0);
    }else{
        let scorenumbrofO = parseInt(scoreO);
        scorenumbrofO++;
        localStorage.setItem('scoredByO', scorenumbrofO);
    }


}



function horizantalDetectWin(id, row){
    let countX = 1;
    let countO = 1;
    let step = stepForward(id);
    let total = id+step;
    let stepb = stepback(id);
    // console.log(stepb);
    let totalBack = id-stepb;
    for(let col = id; col < total; col++){
        if(col < 19){
            let cell= document.getElementById(`${col}-${row}`).innerText;
            let cellpluspone = document.getElementById(`${col+1}-${row}`).innerHTML;
            // console.log(document.getElementById(`${col+1}-${row}`));
                if(cell == cellpluspone){
                    if(cell == 'X'){
                        countX++;
                        // console.log( countX);

                        if(countX == 5){
                        //    scoreX++;
                        //    console.log(localStorage.getItem('scoreX'))
                            scoreCalculation()
                            alert('the X is the winner');
                            break;
                        }

                    }else if(cell == 'O'){
                        // console.log("ooooooo");
                        countO++;
                        if(countO == 5){
                            scoreCalculationO()
                            alert('the O is the winner');
                            break;
                        }

                    }
                }
    
        else if(cell !== cellpluspone){
                // console.log('entering hereeeee')
                for(let col = id; col > totalBack; col--){
                    // console.log('enter the col stepback')
                    if(col > 0){
                        let cell= document.getElementById(`${col}-${row}`).innerText;
                        let cellpluspone = document.getElementById(`${col-1}-${row}`).innerHTML;
                        if(cell == cellpluspone){
                            if(cell == 'X'){
                                // console.log('bjoj are equal to X');
                                countX++;
                                // console.log('wlah ila bseh '+countX)
                                if(countX == 5){
                                    scoreCalculation()
                                    alert('the X is winner');
                                    break;
                                }

                            }else if(cell == 'O'){
                                countO++;
                                if(countO == 5){
                                    scoreCalculationO()
                                    alert('the O is the winner');
                                    break;
                                }
                            }
                        }
                        


                    }
                }            
                // console.log("zeeeeeeeeeero");
                // countX = 0;
                // countO = 0;
            }
    
        }else{
            break;
        }
    }
}
function verticalDetectwinner(id,row){
    let counterX= 1;
    let counterO=1;
    let stepForw=stepForward(row);
    // console.log(stepForw);
    let totalForw = row +stepForw;
    let stepBack=stepback(row);
    let totalBack = row -stepBack;
    // console.log(totalBack);
    for(let roow = row; roow < totalForw; roow++){
        if(roow < 19){
            let cell= document.getElementById(`${id}-${roow}`).innerText;
            let cellpluspone = document.getElementById(`${id}-${roow+1}`).innerHTML;
            // console.log(document.getElementById(`${id}-${roow+1}`));
                if(cell == cellpluspone){
                    if(cell == 'X'){
                        counterX++;
                        // console.log( countX);
                        if(counterX == 5){
                            scoreCalculation()
                            alert('the X is the winner');
                            break;
                        }

                    }else if(cell == 'O'){
                        // console.log("ooooooo");
                        counterO++;
                        if(counterO == 5){
                            scoreCalculationO()
                            alert('the O is the winner');
                            break;
                        }

                    }
                }
    
        else if(cell !== cellpluspone){
                // console.log('entering hereeeee')
                for(let roow = row; roow > totalBack; roow--){
                    // console.log('enter the roow stepback')
                    if(roow > 0){
                        let cell= document.getElementById(`${id}-${roow}`).innerText;
                        let cellpluspone = document.getElementById(`${id}-${roow-1}`).innerHTML;
                        if(cell == cellpluspone){
                            if(cell == 'X'){
                                counterX++;
                                // console.log(counterX)
                                if(counterX == 5){
                                    scoreCalculation()
                                    alert('the X is winner');
                                    break;
                                }

                            }else if(cell == 'O'){
                                counterO++;
                                if(counterO == 5){
                                    scoreCalculationO()
                                    alert('the O is the winner');
                                    break;
                                }
                            }
                        }
                        


                    }
                }            
            }
    
        }else{
            break;
        }
    }



}







function diagonalRight(id,row){
    let countX= 1;
    let countY=1;
    let rowStepBack = stepback(row);
    let totalRowsteps = row -rowStepBack;
    let colSteps = stepback(id);
    let totalColSteps = id -colSteps;
    // let colsteps = stepForward(id);
    // console.log(colsteps);


    if(id < 19){
        for(let col= id, roow= row;roow > totalRowsteps && col <19; roow--,col++){
            // console.log('here')
            let cellMain = document.getElementById(`${col}-${roow}`).innerText;
            if(col+1 <=19 && roow-1 >=0 ){
                let cellplusOne= document.getElementById(`${col+1}-${roow-1}`).innerText;
                if(cellMain === cellplusOne){
                    if(cellMain == 'X'){
                        countX++;
                        if(countX == 5){
                            scoreCalculation()
                            alert('the winner is x***');
                            break;
                        }
                    }else if(cellMain == 'O'){
                        countY++;
                        if(countY == 5){
                            scoreCalculationO()
                            alert('teh winner is o***');
                            break
                        }
                    }
                }else{
                for(let col= id, roow= row;col > totalColSteps && row < 19; roow++,col--){
                    console.log(totalColSteps + 'and col '+ col);
                    let cellMain = document.getElementById(`${col}-${roow}`).innerText;


                    if(col-1 >= 0 && row+1 < 19){
                        let cellplusOne= document.getElementById(`${col-1}-${roow+1}`).innerText;
                        console.log(document.getElementById(`${col-1}-${roow+1}`));
                        if(cellMain == cellplusOne){
                            if(cellMain == 'X'){
                                countX++;
                                if(countX == 5){
                                    scoreCalculation()
                                    alert('the winner is x**');
                                    break;
                                }
                            }else if(cellMain == 'O'){
                                countY++;
                                if(countY == 5){
                                    scoreCalculationO()
                                    alert('teh winner is o**');
                                    break
                                }
                            }
        
                        }

                    }
    

                }
            }


            }


        }


    }
}

function diagonalLeft(id,row){
let counterO = 1; 
let counterX =1; 
let steps =stepback(row);
let stepsUp = row - steps;

let stepdownForw = stepForward(row);
let stepsdownrow = stepdownForw + row;
// console.log('step down forward'+stepsdownrow);

// console.log('steps are '+stepsup);
// let stepDown = row +steps;
if(id>0 ){
    for(let roow=row, col=id; roow > stepsUp &&  col>0; roow--,col--){
        // console.log('hey left')
        let cell = document.getElementById(`${col}-${roow}`).innerText;
        if(col-1 > 0){
            // console.log(`tessssst ${col-1}`);
            let cellBefore = document.getElementById(`${col-1}-${roow-1}`).innerText;
            if(cell === cellBefore){
                if(cell === 'X'){
                    counterX++;
                    if(counterX === 5){
                        scoreCalculation()
                        alert('X is the winner ##l');
                        break;
                    }
                }else if(cell == 'O'){
                    counterO++;
                    if(counterO === 5){
                        scoreCalculationO()
                        alert('O is the winner #l');
                        break;
                    }
                }
            }else if(cell !== cellBefore){
                // console.log('they ganna check down row '+row +"and steps"+stepsdownrow);
    
        
                if(id < 19){
                    for(let roow=row, col=id; roow < stepsdownrow && col < 19; roow++,col++){
                        let cell = document.getElementById(`${col}-${roow}`).innerText;
                        if(col +1 <=19 && roow+1 <= 19){
                            let cellPlusOne = document.getElementById(`${col+1}-${roow+1}`).innerText;
    
                        if(cell === cellPlusOne){
                            if(cell == 'X'){
                                counterX++;
                                if(counterX === 5){
                                    scoreCalculation()
                                    alert('X is the winner*l');
                                    break;
                                }
                            }else if(cell == "O"){
                                counterO++;
                                if(counterO === 5){
                                    scoreCalculationO()
                                    alert('O is the winner***l');
                                    break;
                                }
                            }
                        }
                    }
                    }
    
                }
    
        
        
                
            }
        }
        // console.log(document.getElementById(`${col-1}-${roow-1}`));



    }

}



}


function detectwinner(click, id, row) {
    horizantalDetectWin(id,row);
    verticalDetectwinner(id, row);
    diagonalRight(id,row)
    diagonalLeft(id,row);

}


function InstructionsBlock(){
    let element = document.querySelector('#instractions-text').style.cssText;
    // console.log(document.querySelector('#instractions-text').style.cssText)
    if(element == 'display: block;'){
        let element = document.querySelector('#instractions-text').style.display = 'none';

    }else{
        let element = document.querySelector('#instractions-text').style.display = 'block';

    }
}


function boardgame (){
    let size=20;
    for(let i = 0; i <size; i ++){
        boardmaker(i);
    }
    whoGannaPlay()
}
boardgame();

