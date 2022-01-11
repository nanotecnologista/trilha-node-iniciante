/* Arrow functions */

let array = [1, 2, 3, 4, 5, 6]

// maneira habitual 
let array0 = array.map(function(value){
    return value * 10;
})

let array1 = array.map(value => value * 10);
console.log (array)
console.log (array0)
console.log (array1)
///
/* Eu posso passar mais de um parametro*/
array = array.map((value, index) => value * 10);
console.log (array)

/* Tambem posso criar com mais de uma linha */
array = array.map((value, index) =>{
     value * 10
     //mais comandos
});
console.log (array)

/* Operador ternario */
array = array.map(value => value > 10 ? 0 : 2);

/* Definindo função com arrow function */
/* => funciona como return */
let funçãoSoma = (param1, param2) => param1 + param2

/* Simplificando as funções time out */
setTimeout(()=> execucao, 100)

setTimeout(()=> {//comandos com mais de uma linha
    //execucao
}, 100)


/* Default parameter */
//melhorando o teste na hora de passar os parametro
function test(param1, param2 = 'padrão') {
    if(param2 === 'padrão'){

    }
}
test('valor')

function test(param1, param2 = 'padrão', param3 = 'outrovalor') {
    if(param2 === 'padrão'){

    }
}
test()


/* Classes e objetos */
class Pessoa {
    constructor(nome, altura, sexo){
        this.nome = nome;
        this._altura = altura; //quando você coloca o _ no inicio da variavel, está encapsulando ela
        this.sexo = sexo;
    }
    getAltura(){
        return this.altura
    }

    //outra palavra reservada e pegando a variavel encapsulada
    get altura(){
        return this._altura
    }
    //outra palavra reservada
    set altura(value){
        this._altura = value;
    }
}
const pessoa = new Pessoa('luiz  carlos', '1.88', 'm')
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.getAltura())
console.log(pessoa.altura())

/* Formatação de datas e números */
//API IntL

let dat = new Date()

console.log (Intl.DateTimeFormat('pt-BR').format(date))//BCP 47
console.log (Intl.DateTimeFormat('pt-BR', {month: 'longh', day: 'numeric', year: 'numeric'}).format(date))//BCP 47
console.log (Intl.DateTimeFormat('pt-BR',{minimumFractionDigits: 2}).format(2000))
console.log (Intl.DateTimeFormat('pt-BR',{minimumFractionDigits: 2}).format(2000.2))
console.log (Intl.DateTimeFormat('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 2}).format(2000.3333333333))
console.log (Intl.DateTimeFormat('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'EUR', style: 'currency'}).format(2000.3333333333))

/* Rest parameter */
function funcao(param1, param2, ...otherParams) {
    console.log(otherParams)    
}
funcao(1,2,3,4,5,6)

//também vai dar pra 'cocatenar' as strings mais fácilmente agora
let array01 = [1,2,3,4]
let array02 = [5,6,7,8,...array01]
console.log(array02)

let string = 'luiz carlos'
let stringArray = [...string]
console.log(stringArray)

/* Property shortland */
//melhor para atribuição
let first_name = 'luiz', last_name = 'diniz'

let obj = {
    first_name,
    last_name,
    //method: function(param1, param2){ 
    method(param1, param2){
        
    },
}
    
function função({first_name, last_name}){
        console.log(first_name, last_name) 
}
função(obj)

/* Empacotador de js e conversor */
//browserfy
//webpack 
//babel