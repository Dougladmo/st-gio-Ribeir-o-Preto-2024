import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [resultadoUm, setResultadoUm] = useState()
  const [resultadoDois, setResultadoDois] = useState()
  const [resultadoCinco, setResultadoCinco] = useState()
  const [indiceDesUm, setIndiceDesUm] = useState(13)
  const [numeroFibo, setNumeroFibo] = useState(5)
  const [stringDesCinco, setStringDesCinco] = useState('Hello')

  const desafioUm = () => {
    let SOMA = 0;
    let K = 0;

    while (K < indiceDesUm) {
      K = K + 1;
      SOMA = SOMA + K;
    }
    setResultadoUm(SOMA)
  }

  const desafioDois = () => {

    let primeiroNum = 0;
    let segundoNum = 1;
    let proximoNum;

    while (segundoNum < numeroFibo) {
      proximoNum = primeiroNum + segundoNum;
      primeiroNum = segundoNum;
      segundoNum = proximoNum;
    }

    if (segundoNum == numeroFibo) {
      setResultadoDois(`${numeroFibo} pertence à sequência de Fibonacci.`);
    } else {
      setResultadoDois(`${numeroFibo} não pertence à sequência de Fibonacci.`);
    }

  }

  const desafioCinco = () => {
    let resultado = '';
    for (let i = stringDesCinco.length - 1; i >= 0; i--) {
      resultado += stringDesCinco[i];
    }
    setResultadoCinco(resultado);
  }

  useEffect(() => {
    desafioUm();
    desafioDois();
    desafioCinco();
  }, [indiceDesUm, numeroFibo, stringDesCinco])
  return (
    <>
      <div>
        <div className='desafio'>
          <h1>Desafio 1</h1>
          <h2>Indice Atual = {indiceDesUm}</h2>
          <label>
            Mudar Indice
            <input type="text" name="indice" id="indice" onChange={(e) => setIndiceDesUm(e.target.value)} />
          </label>
          <h2>Resultado: {resultadoUm}</h2>
        </div>
        <div className='desafio'>
          <h1>Desafio 2</h1>
          <h2>Número Atual = {numeroFibo}</h2>
          <label>
            Número escolhido
            <input type="text" name="indice" id="indice" onChange={(e) => setNumeroFibo(e.target.value)} />
          </label>
          <h2>{resultadoDois}</h2>
        </div>
        <div className='desafio'>
          <h1>Desafio 3</h1>
          <p>
            a) <span>9</span>
            b) <span>128</span>
            c) <span>49</span>
            d) <span>100</span>
            e) <span>13</span>
            f) <span>20</span>
          </p>
        </div>
        <div className='desafio'>
          <h1>Desafio 4</h1>
          <h2>
            Você pode realizar o seguinte procedimento:
          </h2>
          <ol>
            <li>Ligue o primeiro interruptor e espere alguns minutos.</li>
            <li>Desligue o primeiro interruptor e ligue o segundo interruptor.</li>
            <li>Entre na sala.</li>
          </ol>
          <ul>
            <li>Se a lâmpada estiver acesa, o primeiro interruptor controla a lâmpada.</li>
            <li>Se a lâmpada estiver apagada, mas quente, o segundo interruptor controla a lâmpada.</li>
            <li>Se a lâmpada estiver apagada e fria, o terceiro interruptor controla a lâmpada.</li>
          </ul>
        </div>
        <div className='desafio'>
          <h1>Desafio 5</h1>
          <h2>String Atual = {stringDesCinco}</h2>
          <label>
            Digite a string que você deseja inverter
            <input type="text" name="indice" id="indice" onChange={(e) => setStringDesCinco(e.target.value)} />
          </label>
          <h2>String Invertida: {resultadoCinco}</h2>
        </div>
      </div>
    </>
  )
}

export default App
