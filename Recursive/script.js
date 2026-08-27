//  Fibonacci Number

function fib(num){
    let seq = [0,1];
    if(num <= 1){
        return seq.slice(0,num);
    }

    for(let i=2; i < num; i++){
        seq[i] = seq[i-1] + seq[i-2];
    }

    return seq;
}

console.log(fib(5));


console.log();


// Recursive 

function fir(num,seq=[0,1]){

    if(num <= 1){
        return seq.slice(0,num);
    }
    if(num > 2){
        let newNum = seq.at(-1) + seq.at(-2);
        seq.push(newNum);
        fir(num -1,seq);
    }
    return seq;
    
}

console.log(fir(8));

