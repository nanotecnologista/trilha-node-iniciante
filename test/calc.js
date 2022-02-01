module.exports ={
//let calc={    
    sum: function(n1, n2){
        return n1+n2
    },
    sub: function(n1, n2){
        return n1-n2
    },
    mult: function(n1, n2){
        return n1*n2
    },
    div: function(n1, n2){
        return n1/n2
    }

}

var result= calc.sum(2,1)
console.log(result)