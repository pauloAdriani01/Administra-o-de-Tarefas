document.getElementById("botaoAdicionar").addEventListener("click", function() { //Caso o evento "click" for detectado, o código dentro da função será rodado
    let novaTarefa = document.createElement("div") //Cria uma nova div no DOM (ainda invisível) e guarda ela dentro da variável novaTarefa
    novaTarefa.contentEditable = true //Deixa a div criada editável, onde o usuário poderá adionar o texto que ele quiser
    novaTarefa.innerText = "Hoje eu preciso..." //Texto padrão quando a div é criada
    novaTarefa.classList.add("p-3", "m-2", "border", "rounded", "col-12", "col-md-6", "col-lg-4") //Adcionar várias configurações do bootstrap para a div
        //p-3 adiciona o padding de 1rem (scaling do bootstrap)
        //m-2 adicona margem de 0,5rem em todos os lados
        //border adiciona uma borda ao redor da div
        //rounded deixa ao redor da div redondinho pra ficar bonitinho
        //col-12 deixa a div ter o tamanho máximo de 12 colunas em dispositivos menores
        //col-md-6 deixa a div ter a metade do tamanho máximo (6 colunas) em dispositivos médios
        //col-lg-4 deixa a div ter um terço do tamanho máximo (4 colunas) em dispostivos grandes
    novaTarefa.style.minWidth = "500px" //Adiciona um tamanho mínimo quando a div surgir
    novaTarefa.style.backgroundColor = "#FFFFFF"
    document.getElementById("containerTexto").appendChild(novaTarefa) //Adiciona a novaTarefa dentro desse container
})

document.getElementById("botaoAdicionar").addEventListener("click", function() {
   let botaoDeletar = document.createElement("button")
   botaoDeletar.innerText = "Deletar"


   document.getElementById("containerDeleta").appendChild(botaoDeletar)
})