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
    <input type="checkbox" id="status">
    <p>${novaTarefa.status}</p>
    <p id="nomeTarefa">${novaTarefa.nome}</p>
    <button onclick="editarTarefa(${id})">Editar</button>
    <button onclick="removerTarefa(${id})">Apagar</button>
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

    let tarefaEditada = prompt("Qual a nova tarefa?");
    const tarefaIndex = listaDeTarefas.findIndex((tarefa) => tarefa.id === id);
    listaDeTarefas[tarefaIndex].nome = tarefaEditada;

    let tarefa = document.getElementById(id);

    tarefa.innerHTML = `<li id="${id}">
    <input type="checkbox" id="status">
    <p id="novaTarefa" type="text">${tarefaEditada}</p>
    <button onclick="editarTarefa(${id})">Editar</button>
    <button onclick="removerTarefa(${id})">Apagar</button>
    </li>`

    console.log(listaDeTarefas)
    console.log(listaDeTarefas[tarefaIndex].nome)

}

function buscarTarefa(id) {

    id = parseInt(id)
    const tarefaIndex = listaDeTarefas.find((tarefa) => tarefa.id === id);

    let lista = document.getElementById("lista");

    alert(listaDeTarefas[tarefaIndex])

    console.log(id)
    console.log(listaDeTarefas[tarefaIndex].nome)
    

    // lista.innerHTML = `<li id="${id}">
    // <input type="checkbox" id="status">
    // <p id="nomeTarefa">${listaDeTarefas[tarefaIndex].nome}</p>
    // <button onclick="editarTarefa(${id})">Editar</button>
    // <button onclick="removerTarefa(${id})">Apagar</button>
    // </li>` 
}


const checkbox = document.getElementById('status')

checkbox.addEventListener('change', (event) => {

    let idPai = checkbox.parentElement.id;
    
    const tarefaIndex = listaDeTarefas.findIndex((tarefa) => tarefa.id === idPai);

    if (event.currentTarget.checked) {
    
        listaDeTarefas[tarefaIndex].status = "concluído";
    } else {
        listaDeTarefas[tarefaIndex].status = "pendente";
    }
})



//   editarTarefa(id, novoNome, novoStatus) {
//     const tarefaIndex = this.tarefas.findIndex((tarefa) => tarefa.id === id);
//     if (tarefaIndex !== -1) {
//       if (novoNome) {
//         this.tarefas[tarefaIndex].nome = novoNome;
//       }
//       if (novoStatus) {
//         this.tarefas[tarefaIndex].status = novoStatus;
//       }
//       return this.tarefas[tarefaIndex];
//     }
//     return null; // Tarefa não encontrada
//   }




//   obterTarefa(id) {
//     return this.tarefas.find((tarefa) => tarefa.id === id) || null;
//   }




