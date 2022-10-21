//dados simulando a tabela que seria fornecida ao sistema
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

    //informa as médias mensais
    console.log('Média mensais dos últimos 10 anos: ')
    for(let i = 0; i < meses_sum.length; i = i + 1){
        medias_mensais.push(meses_sum[i]/10)
        console.log('Média do mês '+(i+1)+': '+meses_sum[i]/10)
    }

    //verifica qual o mês com maior gasto
    let maior_gasto = 0
    for(let i = 1; i < medias_mensais.length; i = i + 1){
        if(medias_mensais[i] > medias_mensais[maior_gasto]){
            maior_gasto= i
        }
    }
    console.log('Mês/Ano com maior gasto de energia: mês '+ (maior_gasto+1))

    //Mês por escrito, alternativo:
    /*var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
    'Outubro', 'Novembro', 'Dezembro']

    for(let i = 0; i < medias_mensais.length; i = i + 1){
        console.log('Mádia do mês de '+meses[i]+': '+medias_mensais[i])
    }
    console.log('Mês/Ano com maior gasto de energia: '+meses[maior_gasto]) */
}

resultado()