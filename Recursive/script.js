//  Fibonacci Number

function fib(num){
    let seq = [0,1];
    if(num <= 1){
        return seq.slice(0,num);
    }

    for(let i=2; i <= num; i++){
        seq[i] = seq[i-1] + seq[i-2];
    }

    return seq;
}

console.log(fib(8));


console.log();

// 

function fir(num,seq=[0,1]){

    if(num <= 1){
        return seq.slice(0,num +1);
    }
    if(num >=2){
        let newNum = seq.at(-1) + seq.at(-2);
        seq.push(newNum);
        fir(num -1,seq);
    }
    return seq;
    
}

console.log(fir(8));

