var pessoa = {
    nome: ["Geise", "Silva"],
    idade: 18,
    sexo: "feminino",
    interesses: ["ler", "jogar"],
    bio: function () {
      alert(
        this.nome[0] +
          " " +
          this.nome[1] +
          " tem " +
          this.idade +
          " anos de idade. Ela gosta de " +
          this.interesses[0] +
          " e " +
          this.interesses[1] +
          ".",
      );
    },
    saudacao: function () {
      alert("Oi! Eu sou " + this.nome[0] + ".");
    },
  };
  