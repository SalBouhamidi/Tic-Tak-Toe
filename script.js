
function boardmaker(id){
    board = document.createElement("div");
    board.setAttribute("class", `horizantal${id}`);
    board.setAttribute("onClick", `detectPositionCol(${id})`)
    document.querySelector(".main_section_bordgame").appendChild(board);
    for(let j= 0; j < 20; j++){
        divcreator(id, j);
    }
}

function divcreator (id, j){
    cases = document.createElement("div");
    cases.setAttribute("class", "main_section_bordgame_case")
    cases.setAttribute("id", `main_section_bordgame_case+${id}`);
    cases.setAttribute("onClick", `detectPositionRow(${j})`)
    document.querySelector(`.horizantal${id}`).appendChild(cases);
}

function detectPositionRow(j){
    console.log(`row`+ j);
    localStorage.setItem('row', j);
    console.log(localStorage.getItem('row'));
    
}
function detectPositionCol(id){
    alert('col'+id)
    // localStorage.setItem('col', id)
    // console.log(localStorage.getItem('col'));
}






function boardgame (){
    let size=20;
    for(let i = 0; i <size; i ++){
        boardmaker(i);
    }
}
boardgame();

