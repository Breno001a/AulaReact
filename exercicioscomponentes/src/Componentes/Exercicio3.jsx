export default function Exercicio3( {valor, taxa, tempo} )
{

    let ValorParcela = valor + (valor*(taxa*taxa /100)*tempo)

    return (
       <div>
        O valor da parcela atualizada é {parcela}R$
       </div>
    )
}