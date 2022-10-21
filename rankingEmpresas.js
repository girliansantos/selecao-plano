//dados simulando a tabela recebida de alguma fonte de dados
dados = [{empresa: 'F', lancamento:'01/05/2022', pg: 0},
{empresa: 'A', lancamento:'03/04/2022', pg: 1},
{empresa: 'C', lancamento:'04/04/2022', pg: 1},
{empresa: 'A', lancamento:'06/06/2022', pg: 1},
{empresa: 'B', lancamento:'20/06/2022', pg: 0},
{empresa: 'B', lancamento:'21/06/2022', pg: 0},
{empresa: 'I', lancamento:'01/05/2022', pg: 1},
{empresa: 'I', lancamento:'03/04/2022', pg: 0},
{empresa: 'F', lancamento:'04/04/2022', pg: 1},
{empresa: 'F', lancamento:'06/06/2022', pg: 0},
{empresa: 'A', lancamento:'20/06/2022', pg: 0},
{empresa: 'C', lancamento:'21/06/2022', pg: 0},
{empresa: 'C', lancamento:'12/03/2022', pg: 1},
{empresa: 'C', lancamento:'14/07/2022', pg: 1},
{empresa: 'C', lancamento:'15/07/2022', pg: 1},
{empresa: 'B', lancamento:'12/07/2022', pg: 0},
{empresa: 'I', lancamento:'15/07/2022', pg: 1},
{empresa: 'I', lancamento:'16/07/2022', pg: 1},
{empresa: 'A', lancamento:'10/05/2022', pg: 0},
{empresa: 'B', lancamento:'12/03/2022', pg: 1},]

function ranking(){
    //Bloco para controlar os contadores de pagamentos e ocorrências durante o laço
    controle = [{empresa: 'A', sum: 0, cont: 0},{empresa: 'B', sum: 0, cont: 0},{empresa: 'C', sum: 0, cont: 0},
                {empresa: 'F', sum: 0, cont: 0},{empresa: 'I', sum: 0, cont: 0}]

    for(let i = 0; i < dados.length; i = i + 1){
        for(let j = 0; j < controle.length; j = j + 1){
            if(dados[i].empresa === controle[j].empresa){
                controle[j].sum = controle[j].sum + dados[i].pg
                controle[j].cont = controle[j].cont + 1
                continue
            }
        }
    }

    let medias = []
    //Colocando as médias em uma lista para facilitar a ordenação com função de ordenação
    for(let i = 0; i < controle.length; i = i + 1){
        medias.push(controle[i].sum / controle[i].cont)
    }
    //função de ordenação das médias
    medias.sort(function(a,b){
        if(a < b){
            return 1
        }
        if(a > b){
            return -1
        }
        return 0
    })

    //Verificando qual média pertence a qual empresa e gerando relatório
    console.log('Ranking das empresas com maiores médias de pagamentos')
    for(let i = 0; i < medias.length; i = i + 1){
        for(let j = 0; j < controle.length; j = j + 1){
            if(medias[i] === controle[j].sum/controle[j].cont){
                console.log('Empresa '+controle[j].empresa+', média: '+medias[i])
                continue
            }
        }
    }
}

ranking()