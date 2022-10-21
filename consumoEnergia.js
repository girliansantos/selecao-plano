//dados simulando a tabela que seria fornecida ao sistema
//uma matriz [i][j], onde as linhas representam os anos e as colunas os 12 meses de cada ano
var dados = [[1, 3, 5, 6, 12, 3, 23, 41, 9, 5, 33, 12],
[2, 5, 6, 7, 32, 11, 9, 9, 9, 8, 4, 3],
[4, 5, 6, 2, 11, 12, 12, 11, 15, 13, 13, 3],
[2, 5, 6, 7, 32, 11, 9, 9, 9, 8, 4, 3],
[4, 5, 6, 2, 11, 12, 12, 11, 15, 13, 13, 3],
[2, 5, 6, 7, 32, 11, 9, 9, 9, 8, 4, 3],
[4, 5, 6, 2, 11, 12, 12, 11, 15, 13, 13, 3],
[2, 5, 6, 7, 32, 11, 9, 9, 9, 8, 4, 3],
[4, 5, 6, 2, 11, 12, 12, 11, 15, 13, 13, 3],
[2, 5, 6, 7, 32, 11, 9, 9, 9, 8, 4, 3]]

//soma dos valores anuais dos meses de cada ano
var meses_sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function resultado(){
    for(let i = 0; i < dados.length; i = i +1){
        for(let j = 0; j < meses_sum.length; j = j +1){
            meses_sum[j] = meses_sum[j] + dados[i][j]
        }
    }

    //variável que guardará as médias mensais
    var medias_mensais = []

    meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
    'Outubro', 'Novembro', 'Dezembro']

    //informa as médias mensais
    console.log('Média mensais dos últimos 10 anos: ')
    for(let i = 0; i < meses_sum.length; i = i + 1){
        medias_mensais.push(meses_sum[i]/10)
        console.log('Média de consumo do mês de '+meses[i]+': '+meses_sum[i]/10)
    }

    //verifica qual o mês com maior gasto
    let maior_gasto = 0
    for(let i = 1; i < medias_mensais.length; i = i + 1){
        if(medias_mensais[i] > medias_mensais[maior_gasto]){
            maior_gasto= i
        }
    }
    console.log('Mês/Ano com maior gasto de energia em relação aos 10 anos: '+ meses[maior_gasto])

    //Caso a interpretação fosse para informar o mês com maior consumo dentre os 120 meses e seu respectivo ano
    //código alternativo seria:
    /*var mes_maior_consumo = 0
    var maior_consumo = dados[0][0]
    var ano_maior_consumo = 0

    for(let i = 0; i < dados.length; i = i + 1){
        for(let j = 0; j < 12; j = j + 1){
            if(dados[i][j] > maior_consumo){
                mes_maior_consumo = j
                ano_maior_consumo = i + 1
                maior_consumo = dados[i][j]
            }
        }
    }
    console.log('Mês/Ano de maior consumo: '+meses[mes_maior_consumo]+'/Ano '+ano_maior_consumo)*/
}

resultado()