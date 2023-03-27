import { useRef, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './guessno.css'

const Guessno = () => {
  const[randomNumber, setRandomNumber] =useState(Math.floor(Math.random()*99)+1)

  const[gs, setGs]= useState({
    win: false,
    gameStatus: '',
    arrOfNo: [],
    count: 0
  })
 
  const inputRef =useRef()
  const navigate = useNavigate()
  
  const Reset =()=>{
    console.log(gs);
    setRandomNumber(Math.floor(Math.random()*99)+1)
    inputRef.current.value= null
    setGs({...gs,win:false, gameStatus: '',count: 0, arrOfNo: []})
    
  }

  const clickhandler =()=>{
   let guessNo =Number(inputRef.current.value)
   if(guessNo && gs.count<10 && guessNo <= 100){
        setGs({...gs,count: gs.count++, arrOfNo: gs.arrOfNo.push(guessNo)}) 
        inputRef.current.value= null
        
        if(guessNo === randomNumber){
          setGs({...gs,  win:true, gameStatus:`Congrats! you Guessed the right in ${gs.count} attempt :)`})
        }

        else{
          gs.count<10?setGs({...gs, gameStatus:'You Guessed wrong :('}):setGs({...gs, gameStatus:`Sorry! you Loose The no is ${randomNumber} :(`})
        } 
         
    }

   else{
    setGs({...gs, gameStatus: 'You must enter number between 0 - 100'})
    }
  }
  
  return (
    <div className='guessNoContainer'>
     <div className="guessHeading">
      <h1>Guess The Number</h1>
    </div>
    
    <div className="guessSmallHeading">between 0-100 in 10 attempt</div>
    
    <div className={`guessGameStatus ${gs.win && 'win'}`}>{gs.gameStatus}</div>

    {gs.count>5 && <div className='guessNohint'>Hint:- first digit is {Math.floor(randomNumber /10)}</div>}

    <input className='guessInput' type="number" ref={inputRef} placeholder='Enter Here' maxLength={2} />
    {(!gs.win && gs.count<10)?<button className="guessBtn" onClick={()=>clickhandler()}>CHECK</button>:
    <button className="guessBtn" onClick={()=>Reset()}>Reset</button>}
   
    <div className="guessCount">Attempt left :-  {10-gs.count}</div>
    <div className='guessNoArrContainer'>{gs.arrOfNo.length>0 && gs.arrOfNo.map((e,i)=>{
      return(
        <span className={`guessNoArr ${randomNumber=== e && 'bgwin'}`} key={i}>{e}</span>
      )
    })}</div>
    <div className="backButton" onClick={()=>navigate(-1)} >Goback</div>
    </div>
  )
}

export default Guessno
