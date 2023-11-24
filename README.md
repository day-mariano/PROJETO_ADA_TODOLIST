<h1>To-Do List App</h1>

Este é um aplicativo de lista de tarefas desenvolvido em JavaScript. Ele permite adicionar, remover, editar, pesquisar e marcar tarefas como concluídas. Abaixo estão as principais funcionalidades e uma breve descrição do código.

<h2>Funcionalidades</h2>

<strong>Adicionar Tarefa:</strong> Ao preencher o campo de nova tarefa e clicar no botão "Adicionar", a tarefa é adicionada à lista.

<strong>Remover Tarefa:</strong> Ao clicar no botão "Apagar", a tarefa correspondente é removida da lista.

<strong>Editar Tarefa:</strong> Ao clicar no botão "Editar", é solicitada uma nova descrição para a tarefa. A tarefa é então atualizada com a nova descrição.

<strong>Pesquisar Tarefa:</strong> Ao inserir um ID de tarefa na caixa de pesquisa e clicar em "Pesquisar", a tarefa correspondente é exibida na lista.

<strong>Alterar Status:</strong> Ao marcar/desmarcar a caixa de seleção ao lado de uma tarefa, o status da tarefa é alternado entre "pendente" e "concluído". O texto da tarefa é estilizado de acordo.

<strong>Mostrar Todas as Tarefas:</strong> Ao clicar no botão "Mostrar Todas", todas as tarefas na lista são exibidas.

<h2>Estrutura do Código</h2>

O código consiste em uma lista de tarefas, funções para adicionar, remover, editar, pesquisar, mudar o status e exibir todas as tarefas. As tarefas são representadas como objetos JavaScript, armazenando informações como ID, nome e status. A interface é atualizada dinamicamente em resposta às interações do usuário.

<h2>Funções Principais</h2>

<strong>adicionarTarefa():</strong> Adiciona uma nova tarefa à lista.

<strong>removerTarefa(id):</strong> Remove uma tarefa com o ID especificado.

<strong>editarTarefa(id):</strong> Permite a edição da descrição de uma tarefa existente.

<strong>buscarTarefa(id):</strong> Exibe uma tarefa específica com base no ID fornecido.

<strong>mudarStatus(id):</strong> Altera o status de uma tarefa entre "pendente" e "concluído".

<strong>mostrarTodasAsTarefas():</strong> Exibe todas as tarefas na lista.

<h2>Estrutura HTML</h2>

A estrutura HTML inclui uma lista ul onde cada tarefa é representada como um elemento li. Cada tarefa contém uma checkbox, a descrição da tarefa e botões para editar e apagar.

<h2>Estilização</h2>

O estilo básico é fornecido através de classes CSS para aprimorar a apresentação da lista de tarefas.






