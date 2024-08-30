
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
    console.log('the col pos '+ id);
    console.log('the row pos' + j);
    const click = document.getElementById(`main_section_bordgame_case${id}-${j}`);

    if(click.innerHTML === '' ){
        if(localStorage.getItem('lastchar') === 'X'){
            click.innerHTML = 'O'
            localStorage.setItem('lastchar', 'O');
            // console.log(localStorage.getItem('lastchar'));
        }else if(localStorage.getItem('lastchar') === 'O')
        {
            click.innerHTML = 'X'
            localStorage.setItem('lastchar', 'X');
            // console.log(localStorage.getItem('lastchar'));
        }
    }else{
        alert('choose an empty case');
    }

}









function boardgame (){
    let size=20;
    for(let i = 0; i <size; i ++){
        boardmaker(i);
    }
}
boardgame();

