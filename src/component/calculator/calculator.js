import React, {useState } from 'react'
import './calculator.css' 
import * as math from 'mathjs'
import { string } from 'mathjs'

const Calculator = () => {
const [screen1Value, setScreen1Value]= useState('')
const [screen2Value, setScreen2Value]= useState('')
const data =['(',')','AC','X','x²','√','%','+','7','8','9','-','4','5','6','*','1','2','3','/','0','.','1/x','=']

const clickHandler=(e)=>{

  switch(e) {
    
    case '=': try{
    if(screen2Value && screen2Value.trim() !== ''){
       let result = math.fix(math.evaluate(screen2Value),4)
    if (typeof(result) === 'number' && !isNaN(result)) {
       setScreen1Value(screen2Value + e + result)
       setScreen2Value(string(result))
      }
     }
    }
     catch{
      setScreen1Value('Invalid Input')
      setScreen2Value('')
    }
      break;

    case 'AC':if(screen2Value || screen1Value){
     setScreen1Value('')
     setScreen2Value('')
    }
      break;
    
    case '1/x': try{
      if(screen2Value){
      let result = math.fix(math.evaluate(1/screen2Value),4)
      setScreen1Value(`${screen2Value} = ${result}`)
      setScreen2Value(string(result))
      }
    }
    catch{
        setScreen1Value('Invalid Input')
        setScreen2Value('')
    }  
    break
    case 'x²': try{
       if(screen2Value || ( typeof(screen2Value) === 'string' && screen2Value.trim() !== '')){
      let result = math.fix(math.square(screen2Value),4)
      setScreen1Value( `${screen2Value}² = ${result}`) 
      setScreen2Value(string(result))
      }
      } 
      catch{
        setScreen1Value('Invalid Input')
        setScreen2Value('')
      }
    break        
    
    case '√':try{ 
        if(screen2Value || (typeof(screen2Value) === 'string' && screen2Value.trim() !== '')){
        let result =math.fix(math.sqrt(math.evaluate(screen2Value)),4)
        setScreen1Value( `√${screen2Value}  = ${result}`)  
        setScreen2Value(string(result))}
       } 
        catch{
        setScreen1Value('Invalid Input')
        setScreen2Value('')}
    break        
      

    case 'X':if(screen2Value && screen2Value.trim() !== '' ){    
           let lastChar = screen2Value.slice(0,-1)
           setScreen2Value(lastChar)  
    }
    break;
    default:
      setScreen2Value(screen2Value + e)
  }

}
  return (
    <div className='calc'>
    <h2>Calculator</h2>
    <div className='calcScreenContainer'>
    <div className='calcScreen'>{screen1Value}</div> 
    <div className='calcScreen' >{screen2Value}</div></div>
    <div className='calcBtnContn'>{
      data.map((elm,i)=>{
        return(
          <div className='calcButton'  onClick={()=>clickHandler(elm)} key={i}>{elm}</div>
        )
      })
    }</div>
    </div>)
}


export default Calculator