const faturamento = [{
        cidade: 'SP',
        valor: 67836.43
    },
    {
        cidade: 'RJ',
        valor: 36678.66
    },
    {
        cidade: 'MG',
        valor: 29229.88
    },
    {
        cidade: 'ES',
        valor: 27165.48
    },
    {
        cidade: 'Outros',
        valor: 19849.53
    },
]

function calcFaturamento() {

    const total = faturamento.reduce(function (t, i) {
        return t + i.valor;
    }, 0);

    const percent = faturamento.map((item) => {
        return {
            cidade: item.cidade,
            valor: item.valor,
            percentual: ((item.valor * 100) / total).toFixed(2),
        }
    })

    carregarGrafico(percent);
    carregarTable(percent);
}

function carregarGrafico(percentual) {
    new Chartist.Bar('.ct-chart', {
        labels: percentual.map((i) => i.cidade),
        series: percentual.map((i) => i.percentual)
      }, {
        distributeSeries: true
      });
}

function carregarTable(percentual) {
    const dataList = document.getElementById('dataList')
    percentual.forEach((item) => {
        const tr = document.createElement('tr');
        
        const td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(item.cidade));

        const td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(item.valor));

        const td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(`${item.percentual}%`));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        dataList.appendChild(tr);
    })
    
}