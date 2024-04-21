function adicionarLinha() {
  var nome = document.getElementById("nomeInput").value.trim();
  var cpf = document.getElementById("cpfInput").value.trim();//ler campo em branco e pegar o elemento do html
  var idade = document.getElementById("idadeInput").value.trim();
  if (nome !== "" && cpf !== "" && idade !== "") {
    var tabela = document.getElementById("cadastro");//pegar tabela no html
    var linha = tabela.insertRow(); //criar linhas na tabela
    var cell1 = linha.insertCell(0);
    var cell2 = linha.insertCell(1);
    var cell3 = linha.insertCell(2);
    cell1.textContent = nome;
    cell2.textContent = cpf;
    cell3.textContent = idade;
    document.getElementById("nomeInput").value = "";
    document.getElementById("cpfInput").value = "";
    document.getElementById("idadeInput").value = "";
}else{
    alert("Insira todos os dados");
} 

}
function editar() {
    var tabela = document.getElementById("cadastro");
    var linhas = tabela.rows;
  
    for (var i=1;i<linhas.length;i++) {//percorrer cada celula da tabela(nome, cpf, idade) e seleciona se clicar
      linhas[i].onclick = function() {
        document.getElementById("nomeInput").value = this.cells[0].textContent;
        document.getElementById("cpfInput").value = this.cells[1].textContent;
        document.getElementById("idadeInput").value = this.cells[2].textContent;
        tabela.deleteRow(this.rowIndex); //remove a linha selecionada para edição
      };
    }
}
function remover() {
    var tabela = document.getElementById("cadastro");
    var linhas = tabela.rows;
    for (var j=1;j<linhas.length;j++) { //percorre cada linha e remove se clicar
      linhas[j].onclick = function() {
        tabela.deleteRow(this.rowIndex);// remove a linha selecionada 
      };
    } 
}