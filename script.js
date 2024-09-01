
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


function position(row,id){

    const click = document.getElementById(`${id}-${row}`);
 
    if(click.innerHTML === '' ){
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

function detectwinner(click, id, row) {
let countX = 1;
let countO = 1;
let step = stepForward(id);
let total = id+step;
let stepb = stepback(id);
// console.log(stepb);
let totalBack = id-stepb;
// console.log(totalBack);

for(let col = id; col < total; col++){
    if(col < 19){
        let cell= document.getElementById(`${col}-${row}`).innerText;
        let cellpluspone = document.getElementById(`${col+1}-${row}`).innerHTML;
            if(cell == cellpluspone){
                if(cell == 'X'){
                    countX++;
                    // console.log( countX);
                    if(countX == 5){
                        alert('the X is the winner');
                        break;
                    }else{
                        for(let col = id; col > totalBack; col--){
                            if(col > 0){
                                let cell= document.getElementById(`${col}-${row}`).innerText;
                                let cellpluspone = document.getElementById(`${col-1}-${row}`).innerHTML;
                                if(cell == cellpluspone){
                                    if(cell == 'X'){
                                        countX++;
                                        // console.log('wlah ila bseh ')
                                        if(countX == 5){
                                            console.log('heet')
                                            alert('the X is winner');
                                            break;
                                        }

                                    }
                                }
                                


                            }
                        }

                    }
                }else if(cell == 'O'){
                    console.log("ooooooo");
                    countO++;
                    if(countO == 5){
                        alert('the O is the winner');
                        break;
                    }else{
                        for(let col = id; col > totalBack; col--){
                            if(col > 0){
                                let cell= document.getElementById(`${col}-${row}`).innerText;
                                let cellpluspone = document.getElementById(`${col-1}-${row}`).innerHTML;
                                if(cell == cellpluspone){
                                    if(cell == 'O'){
                                        countO++;
                                        // console.log('counter o is workng')
                                        if(countO == 5){
                                            alert('the X is winner');
                                            break;
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }

    else{                    
            console.log("zeeeeeeeeeero");
            countX = 0;
            countO = 0;
        }

    }else{
        break;
    }
}

console.log('countx' +countX);
console.log('county' +countO);


}



function boardgame (){
    let size=20;
    for(let i = 0; i <size; i ++){
        boardmaker(i);
    }
    whoGannaPlay()
}
boardgame();

