import './App.css';
import "./global.css"

import React from 'react';
import imagemCartao from "./imagens/mega-sena.png"
import imagemCaixa from "./imagens/logo-caixa.fw.png"
import Mega from './component/Mega';

function App() {
  return (
    <div className="content">

      <div className="header">
        <img src={imagemCaixa}></img>
        <h1>Mega-Sena</h1>
        <img src={imagemCartao}></img>
      </div>

      <div className="middle-1">
        <h3>
          Simulador de surpresinha da Mega-Sena
        </h3>
        <h5>
        &gt;&gt; Clique em gerar para ver um novo jogo. Você pode gerar quantos jogos quiser, <span className="boasorte">Boa Sorte!!! 🍀</span>
        </h5>
      </div>

      <div className="middle-2">
        <Mega />
      </div>

      <div className="footer1">

      </div>

      <footer className="footer2">
        <span>
          Desenvolvido por Gerde Farias - Todos os direitos reservados
        </span>
      </footer>

    </div>
  );
}

export default App;
