function add(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

function calculatrice(nbre1, operation, nbre2) {
    switch(operation){
        case '+':
            return add(nbre1,nbre2);
        case '*':
            return multiply(nbre1, nbre2);
    }
}

console.log(calculatrice(4, "+", 4));