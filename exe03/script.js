const dataList = document.getElementById('dataList')


function lerArquivo(arquivo, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", arquivo, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


function verFaturamento() {

    lerArquivo("./dados.json", function (texto) {
        const dado = JSON.parse(texto);
        dado.map((i) => {
            const tr = document.createElement('tr');
            
            const td1 = document.createElement('td');
            td1.appendChild(document.createTextNode('-'));

            const td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(i.dia));

            let valor = i.valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            const td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(valor));

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            dataList.appendChild(tr);
        });
    });
}

function menorFaturamento() {
    dataList.innerHTML = '';
    lerArquivo("./dados.json", function (texto) {
        const dado = JSON.parse(texto);
        let filterDado = dado.filter(item => item.valor !== 0);

        const minValue = filterDado.reduce(function (prev, current) {
            return prev.valor < current.valor ? prev : current;
        });

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.appendChild(document.createTextNode('-'));

        const td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(minValue.dia));

        let valor = minValue.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        const td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(valor));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        dataList.appendChild(tr);
    });
}

function maiorFaturamento() {
    dataList.innerHTML = '';
    lerArquivo("./dados.json", function (texto) {
        const dado = JSON.parse(texto);
        let filterDado = dado.filter(item => item.valor !== 0);

        const maxValue = filterDado.reduce(function (prev, current) {
            return prev.valor > current.valor ? prev : current;
        });

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.appendChild(document.createTextNode('-'));

        const td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(maxValue.dia));

        let valor = maxValue.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        const td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(valor));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        dataList.appendChild(tr);
    });
}