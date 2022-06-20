/*
// Criando classe
class Animal {
    // criar os atributos
    constructor(tipo,nome,som,idade){
        this.tipo = tipo
        this.nome = nome
        this.som = som
        this.idade = idade
    }

    // criar o método latir
    latir(){
        console.log(`${this.nome} está ${this.som}`)
    }

    fazerNiver(novaIdade){
        this.idade += novaIdade
        console.log(`O ${this.nome} fez aniversário de ${this.idade} anos.`)
    }

}

// Criando objeto
let zeca = new Animal('cachorro','zeca','auau',12)
zeca.latir()
zeca.fazerNiver(1)
*/

// ========================================================================================

class Time {
    constructor(nome,corPrincipal,titulos,idade,campeonato){
        this.nome = nome
        this.corPrincipal = corPrincipal
        this.titulosBrasileiros = titulos
        this.idade = idade
        this.campeonato = campeonato
    }

    info(){
        alert(`O ${this.nome} tem a cor ${this.corPrincipal}, tem ${this.titulosBrasileiros} brasileirões, ${this.idade} anos e atualmente joga o ${this.campeonato}`)
    }

    fazNiver(msg){
        alert(`O Palmeiras faz ${this.idade + msg} anos`)
    }

}

let palmeiras = new Time('Palmeiras','Verde',10,108,'Brasileirão')
palmeiras.info()

palmeiras.fazNiver(1)