import "./App.css";

export default function App()
{

    const estilo = {
       color :"red",
       textAlign :"center"

    };

    
    
    

    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>
            
            <p>
                O CSS (<i>Cascading Style Sheets</i>) É uma linguagem utilizada para estilizar as <b>páginas web</b>. Com ela podemos definir:

            </p>
            <ul>
                <li>cores de fundo, do texto e dos elementos.</li>
                <li>Fontes e tamanho das letras</li>
                <li>Espaçamento, bordas, sombras, etc.</li>
                <li>Efeitos visuais e animações</li>
            </ul>

            <h3 Style={estilo}>Porsche Taycan Turbo</h3>

            <p className="centro">
                <img src="porsche.jpg"/>
            </p>

        </div>
    );
}