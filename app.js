let listaDeTarefas = [];
let idInicial = 1;

function adicionarTarefa() {

    let lista = document.getElementById("lista");
    let tarefa = document.getElementById("novaTarefa");
    let id = gerarId();

    const novaTarefa = {
      id: id,
      nome: tarefa.value,
      status: "pendente",
    };

    listaDeTarefas.push(novaTarefa);

    lista.innerHTML += `<li id="${id}">
    <div class="task-name">
        <input class="check" type="checkbox" id="status" onchange="mudarStatus(${id})">
        <p id="tarefa-${id}">ID:${id} - ${novaTarefa.nome}</p>
    </div>
    <div class="buttons">
        <button id="btn-editar" onclick="editarTarefa(${id})"><img src="assets/editar-texto.png" width=20px; heigth=20px; /></button>
        <button id="btn-apagar" onclick="removerTarefa(${id})"><img src="assets/trash.png" width=20px; heigth=20px; /></button>
    </div>

    </li>` 
    
    tarefa.value = '';
}

function gerarId() {
    return idInicial++;
}

function removerTarefa(id) {

    const tarefaIndex = listaDeTarefas.findIndex((tarefa) => tarefa.id === id);
    listaDeTarefas.splice(tarefaIndex, 1);

    var el = document.getElementById( id );
    el.parentNode.removeChild( el );

}


function editarTarefa(id) {

    const tarefaIndex = listaDeTarefas.findIndex((tarefa) => tarefa.id === id);
    let tarefaEditada = prompt("Qual a nova tarefa?") ?? listaDeTarefas[tarefaIndex].nome;
    
    listaDeTarefas[tarefaIndex].nome = tarefaEditada;

    let tarefa = document.getElementById(`tarefa-${id}`);

    tarefa.innerHTML = `ID:${id} - ${tarefaEditada}`

}

function buscarTarefa(id) {

    id = parseInt(id)
    const tarefaIndex = listaDeTarefas.find((tarefa) => tarefa.id === id);
    let lista = document.getElementById("lista");

    if(tarefaIndex){
        lista.innerHTML = `<li id="${id}">
    <div class="task-name">
        <input class="check" type="checkbox" id="status" onchange="mudarStatus(${id})">
        <p id="tarefa-${id}">ID:${id} - ${tarefaIndex.nome}</p>
    </div>
    <div class="buttons">
        <button id="btn-editar" onclick="editarTarefa(${id})"><img src="assets/editar-texto.png" width=20px; heigth=20px; /></button>
        <button id="btn-apagar" onclick="removerTarefa(${id})"><img src="assets/trash.png" width=20px; heigth=20px; /></button>
    </div>

    </li>` 
        
    }else{
        alert("Esta tarefa não existe :(")
    }

    let pesquisa = document.getElementById("pesquisarTarefa");
    pesquisa.value = '';
}



function mudarStatus(id){

    const tarefaIndex = listaDeTarefas.findIndex((tarefa) => tarefa.id === id);
    let texto = document.getElementById(`tarefa-${id}`);
    
    
    if (listaDeTarefas[tarefaIndex].status == "concluído") {
    
        listaDeTarefas[tarefaIndex].status = "pendente";
        texto.style.textDecoration = "none";
    } else {
        listaDeTarefas[tarefaIndex].status = "concluído";
        texto.style.textDecoration = "line-through";
    }

}


function mostrarTodasAsTarefas(){

    let lista = document.getElementById("lista");
    lista.innerHTML = '';

    for(let i = 0; i < listaDeTarefas.length ; i++){

        lista.innerHTML += `<li id="${listaDeTarefas[i].id}">
    <div class="task-name">
        <input class="check" type="checkbox" id="status" onchange="mudarStatus(${listaDeTarefas[i].id})">
        <p id="tarefa-${listaDeTarefas[i].id}">ID:${listaDeTarefas[i].id} - ${listaDeTarefas[i].nome}</p>
    </div>
    <div class="buttons">
        <button id="btn-editar" onclick="editarTarefa(${listaDeTarefas[i].id})"><img src="assets/editar-texto.png" width=20px; heigth=20px; /></button>
        <button id="btn-apagar" onclick="removerTarefa(${listaDeTarefas[i].id})"><img src="assets/trash.png" width=20px; heigth=20px; /></button>
    </div>

    </li>` 
    }
}