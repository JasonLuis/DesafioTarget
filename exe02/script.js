const input = document.querySelector("#numberFibonacci");
const field1 = document.querySelector("#seqFibonacci");
const field2 = document.querySelector("#verifyFibonacci");

function mostrar() {
   
    const val = Number(input.value);
    Verrifyfibonacci(val);
}


function Verrifyfibonacci(endValue) {
    let fibo = 0
    let arrFibo = [];
    for (let i = 0; fibo < endValue; i++) {
        if(i === 0) {
            arrFibo.push(fibo);
            fibo += 1;
            arrFibo.push(fibo);
        } else {
            fibo += arrFibo[i-1];
            arrFibo.push(fibo);
        }
    }

    field1.innerHTML = '';
    field2.innerHTML = '';

    field1.innerHTML += 'Sequencia: '+ arrFibo.map(i => {
        return `${i} `;
    })

    if (arrFibo.find(i => i === endValue)) {
        field2.innerHTML += `${endValue} pertence a sequência de fibonacci.`;
    }else {
        field2.innerHTML += `${endValue} não pertence a sequência de fibonacci.`;
    }
}