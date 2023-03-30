const fatuMensalEstado = [
    {"Estado": "SP","Valor": 67.83643},
    {"Estado": "RJ","Valor": 36.67866},
    {"Estado": "MG","Valor": 29.22988},
    {"Estado": "ES","Valor": 27.16548},
    {"Estado": "Outros","Valor": 19.84953}
]


let percentual = pecentualPorEstado(fatuMensalEstado);

fatuMensalEstado.forEach(element => {
    let pecen = (element.Valor + percentual)/100
    console.table(element.Estado + " == " + pecen + "%")
})

function pecentualPorEstado(faturamento){
    if(faturamento){
        let soma = 0;

        faturamento.forEach(element => {
            if(element.Valor > 0){
                soma += element.Valor;
            }
        });

       return soma;

    }else{
        console.log("[ERRO] Sem valor")
    }
}