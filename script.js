
function boardmaker(id){
    board = document.createElement("div");
    board.setAttribute("class", `horizantal${id}`);
    document.querySelector(".main_section_bordgame").appendChild(board);
    for(let col= 0; col < 20; col++){
        divcreator(id, col);
    }
}

function divcreator (id, col){
    cases = document.createElement("div");
    cases.setAttribute("class", "main_section_bordgame_case")
    cases.setAttribute("id", `${id}-${col}`);
    cases.setAttribute("onClick", `position(${col}, ${id})`)
    document.querySelector(`.horizantal${id}`).appendChild(cases);
    // console.log(`rooow:${id}-cool:${col}`)

}


function position(col,id){

    const click = document.getElementById(`${id}-${col}`);

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
        alert('choose an empty case');
    }
    const myTimeout = setTimeout(detectwinner, 2000);



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


function detectwinner(){
    let count= 0;
    for(let row = 0; row <20; row++){
        for(let col= 0; col <20; col++){
            const caseid = document.getElementById(`${col}-${row}`).innerText;
            if(col< 19){
                const caseidplusOne = document.getElementById(`${col+1}-${row}`).innerText;
                if(caseid !== ''){
                    if(caseidplusOne){
                        if(caseid == caseidplusOne){
                            count= count+1;
                        }else{
                            count = 0;
                        }
                    }
    
                }

            }

 

        }
        console.log('counter counting' + count);
        return count;
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

