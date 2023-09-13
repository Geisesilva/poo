class estudante{
    constructor(nome,matricula){
    this.nome;
    this.matricula;
    }
}
var nome = prompt("nome");
var matricula = parseInt(prompt("matricula"));
const estudante1 = new estudante(nome,matricula);
alert(estudante1.nome+ "\n" + estudante1.matricula);