
function boardmaker(id){
    board = document.createElement("div");
    board.setAttribute("class", `horizantal${id}`);
    // board.setAttribute("onClick", `detectPositionCol(${id})`)
    document.querySelector(".main_section_bordgame").appendChild(board);
    for(let j= 0; j < 20; j++){
        divcreator(id, j);
    }
}

function divcreator (id, j){
    cases = document.createElement("div");
    cases.setAttribute("class", "main_section_bordgame_case")
    cases.setAttribute("id", `main_section_bordgame_case${id}-${j}`);
    cases.setAttribute("onClick", `position(${j}, ${id})`)
    document.querySelector(`.horizantal${id}`).appendChild(cases);

}


function position(j,id){
    detectwinner();
    const click = document.getElementById(`main_section_bordgame_case${id}-${j}`);

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
    // console.log(localStorage.getItem('lastchar'));
    // console.log(click.id)

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
    // console.log(player.innerHTML)
}

function detectwinner(){

    let prefix = 'main_section_bordgame_case19-';
    let max= 20;
    for(let j =0; `${prefix}${j}`< `${prefix}${max}`; j++){
        for(let i = 0; document.getElementById(`${prefix}${i}`).id < `${prefix}${j}` ; i++){
            // console.log('heygg');
        }
    }
    console.log(document.getElementById(`${prefix}19`).id)

    
 
}








function boardgame (){
    let size=20;
    for(let i = 0; i <size; i ++){
        boardmaker(i);
    }
    whoGannaPlay()
}
boardgame();

