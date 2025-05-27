export default function Exercicio8( {peso,altura} )
{

    let IMC = peso/ (altura*altura)

    return (

       <div>
            uma pessoa com {peso}kg e {altura}m tem IMC 
       </div>
    )
}