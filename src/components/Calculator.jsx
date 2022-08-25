import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import "./Calculator.css"

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(e) {
    var input =  e.target.value
    num === 0 ? setNum(input) : setNum(num + input)
  }

  function clear(e){
    setNum(0)
    setOldNum(0)
  }

  function percent(){
    setNum(num/100)
  }

  function invertNumber(){
   setNum(-num)
  }

  function calculate(){
    switch (operator){
      case '/':
        setNum((parseFloat(oldNum)/parseFloat(num)).toFixed(2))
        break
      case '*':
        setNum((parseFloat(oldNum)*parseFloat(num)).toFixed(2))
        break
      case '+':
        setNum((parseFloat(oldNum)+parseFloat(num)).toFixed(2))
        break
      case '-':
        setNum((parseFloat(oldNum)-parseFloat(num)).toFixed(2))
        break
    }
  }

  function operatorHandler(e){
    var inputOp = e.target.value
    setOperator(inputOp)
    setOldNum(num)
    setNum(0)
  }

  return (
    <div>
    <Box m={2}>
      <Container maxWidth="xs">
        <div className='wrapper'>
      <Box m={6}/>
          <h1 id='result' className='result'>{num}</h1>
            <button id='btn-clear' onClick={clear}>AC</button>
            <button id='op-invert' onClick={invertNumber}>+/-</button>
            <button id='op-percent' onClick={percent}>%</button>
            <button id='op-div' className='side-operator' onClick={operatorHandler} value={'/'}>/</button>
            <button id='num7' className='number-default' onClick={inputNum} value={7}>7</button>
            <button id='num8' className='number-default' onClick={inputNum} value={8}>8</button>
            <button id='num9' className='number-default' onClick={inputNum} value={9}>9</button>
            <button id='op-mult' className='side-operator' onClick={operatorHandler} value={'*'}>*</button>
            <button id='num4' className='number-default' onClick={inputNum} value={4}>4</button>
            <button id='num5' className='number-default' onClick={inputNum} value={5}>5</button>
            <button id='num6' className='number-default' onClick={inputNum} value={6}>6</button>
            <button id='op-sub' className='side-operator' onClick={operatorHandler} value={'-'}>-</button>
            <button id='num1' className='number-default' onClick={inputNum} value={1}>1</button>
            <button id='num2' className='number-default' onClick={inputNum} value={2}>2</button>
            <button id='num3' className='number-default' onClick={inputNum} value={3}>3</button>
            <button id='op-sum' className='side-operator' onClick={operatorHandler} value={'+'}>+</button>
            <button id='num0' className='number-default' onClick={inputNum} value={0}>0</button>
            <button className='number-default' onClick={inputNum} value={"."}>.</button>
            <button onClick={calculate}>=</button>
        </div>
      </Container>
    </Box>
    </div>
  )
}
