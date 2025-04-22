export default function Exercicio( {peso,altura} )
{

    let IMC = peso/ (altura*altura)

    return (

       <div>
            uma pessoa com {pesoKg} e {alturaM} tem IMC 
       </div>
    )
}