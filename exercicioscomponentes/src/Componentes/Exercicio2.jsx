export default function Exercicio( {peso,altura} )
{

    let IMC = peso/ (altura*altura)

    return (

       <div>
            uma pessoa com {peso}kg e {altura}m tem IMC 
       </div>
    )
}