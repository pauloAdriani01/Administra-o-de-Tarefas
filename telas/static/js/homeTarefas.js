document.getElementById("botaoAdicionar").addEventListener("click", function() { //Cria a área de colocar a tarefa, juntamente com seu botão de deletar

    let uniaoElementos = document.createElement("div") //Cria uma div dentro da váriavel "uniãoElementos"
    uniaoElementos.classList.add("d-flex", "align-items-center", "m-2") //Adiciona configurações do bootstrap para a div
    //d-flex deixa a div como um container flexível
    //align-items-center deixa a div no centro do eixo horizontal
    //m-2 coloca o tamanho da margem como 0.5 rem (unidade do bootstrap)

    let novaTarefa = document.createElement("div")
    novaTarefa.contentEditable = true //Deixa o conteúdo da div editável
    novaTarefa.innerText = "Hoje eu preciso..." //Muda o texto predefinido dentro da div
    novaTarefa.classList.add("p-3", "m-2", "border", "rounded", "col-12", "col-md-6", "col-lg-4")
    novaTarefa.style.backgroundColor = "#FFFFFF" //Muda a cor do funda da div

    novaTarefa.style.minWidth = "300px" //Muda a largura mínima da div (valor menor para maior flexibilidade)
    novaTarefa.style.width = "100%" //Garante que vai se adaptar totalmente ao seu parent
    novaTarefa.style.maxWidth = "90%" //Não deixa ficar muito grande
    novaTarefa.style.maxHeight = "200px"
    novaTarefa.style.padding = "10px"
    novaTarefa.style.boxSizing = "border-box" //Conta a borda da div para não ter problemas com o padding e a borda

    novaTarefa.style.wordBreak = "break-word" //Quebra palavras longas se não caberem dentro da div
    novaTarefa.style.whiteSpace = "normal" //Não deixa o texto ficar dentro de um esoaço em branco para sempre

    novaTarefa.style.overflowY = "auto" //Adiciona uma barra de deslizamento quando necessária

    let botaoDeletar = document.createElement("button")
    botaoDeletar.innerText = "Deletar"
    botaoDeletar.classList.add("btn", "btn-block", "btn-danger")

    uniaoElementos.appendChild(novaTarefa) //Une a div novaTarefa na div uniaoElementos
    uniaoElementos.appendChild(botaoDeletar)

    document.getElementById("containerFull").appendChild(uniaoElementos) //Une a div aqui criada na div invisível inserida no html

    botaoDeletar.addEventListener("click", function() { //Apaga a div após o botão de deletar for criado
        uniaoElementos.remove() 
    })
})