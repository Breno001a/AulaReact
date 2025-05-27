export default function Exercicio9( {capital, juros, tempo} )
{

    let montante = capital * Math.pow(1 + juros / 100, tempo);

    return (
           <div>
        O capital é: {capital} <br/>
        juros:{juros} <br/>
        tempo: {tempo} <br/> 
        montante: {montante}
       </div>
    );
}