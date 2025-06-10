export default function Exercicio10( {distancia, velocidade} )
{

    let tempo = (distancia/velocidade);

    return (
           <div>
        A distancia é: {distancia} km<br/>
        valocidade:{velocidade} km/h <br/>
        O tempo estimado é: {tempo} horas <br/> 
       </div>
    );
}