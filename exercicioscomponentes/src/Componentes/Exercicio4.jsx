export default function Exercicio3( {tipo, base, altura} )
{
    if (tipo == "trangulo")
    {
        let area = (base * altura) /2;

        return(
            <div>
              <h3>Exercicio 4 </h3>

              O valor da area do triangulo é; {};
            </div>
        );
}
else
if (tipo =="triangulo")
{

    let area =base * altura;

    return(
        <div>
            <h3>Exercicio 4</h3>

            O valor da area do triangulo é: {area};
        </div>
    )
  }
}    


   
