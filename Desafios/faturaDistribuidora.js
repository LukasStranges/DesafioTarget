const faturamentoMes = [
    {"dia": 1,"valor": 22174.1664},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

let dia = 0;
const saida = [];



saida.push(faturamentoMenorValor(faturamentoMes));
saida.push(faturamentoMaiorValor(faturamentoMes));
saida.push(diasMaiorQueMediaFaturamento(faturamentoMes))

for (let i = 0; i < saida.length; i++) {
    console.table(saida[i])
}

function faturamentoMenorValor(faturamento) {
    if(faturamento){
        let menor = 0

        menor = faturamento[0].valor;
        dia = faturamento[0].dia;
        //O menor valor sera ZERO mais quis mostrar o valor > Zero
        faturamento.forEach(element =>{
            if(element.valor > 0){
                if(element.valor < menor){
                    menor = element.valor;
                    dia = element.dia;
                }
            }
        })
       return [{"dia": dia, 
            "valorMenorfaturamento":menor
        }]
    }       
}

function faturamentoMaiorValor(faturamento) {
    if(faturamento){
        let maior = 0;

        maior = faturamento[0].valor;
        dia = faturamento[0].dia;
        faturamento.forEach(element =>{
            if(element.valor > 0){
                if(element.valor > maior){
                    maior = element.valor;
                    dia = element.dia;
                }
            }
        })
        return [{
            "dia": dia, 
            "valorMaiorFaturamento": maior
        }]
    }
}

function diasMaiorQueMediaFaturamento(faturamento){
    if(faturamento){
        let soma = 0;
        let media = 0;
        let quantDiaMedia = 0;
        let quantDia = 0;
        
        faturamento.forEach(element =>{
            if(element.valor > 0){
                soma += element.valor;
                quantDia++
            }
            media = soma/quantDia;
            if(element.valor > 0){
                if(element.valor > media)
                    quantDiaMedia++
            }
        })
       
        return [{
            "media": media,
            "diasAcimaMedia": + quantDiaMedia
        }]
    }
}
