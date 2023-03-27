import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom"
import "./tictac.css"

const TicTac = () => {
  const navigate = useNavigate()
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState("X");
  const [win, setWin] = useState(false)
  const [turnCount,serTurnCount]=useState(0)
     
    const checkWin =()=>{
      let winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      Array(8).fill(null).map((e,index)=>{
        const [a, b, c] = winner[index];   
     if(square[a] && square[a] === square[b] && square[a] === square[c]){
      setWin(true)
     }
    })
  }
  useEffect(()=>checkWin(),[isX])

  const clickHandler = (e,i) => {
    e.target.classList.add("filledwithvalue")
    if (square[i] || win) return;
    serTurnCount(() => turnCount + 1);
    setSquare(() =>
      square.map((e, index) => (index === i ? (square[i] = isX) : e))
    );
    setIsX(() => (isX === "X" ? "O" : "X"));
  };

  const reset = (e) => {
    document.querySelectorAll('.filledwithvalue').forEach((e)=>
    e.classList.remove("filledwithvalue"))
    setIsX("X");
    setSquare(Array(9).fill(null));
    setWin(false);
    serTurnCount(0);
  };

  return (
    <>
    {win ?<div className="winner">The winner is {isX === "X" ? "O" : "X"}</div>
    :turnCount >=9 && !win ?(<div className="draw">it's a Draw </div>):<div className="turn">it is {isX} turn</div>
    }
    <div className='tictacboard'>
    
    {square.map((e, index) => {
      return (
        <div
          className="grid"
          key={index}
          onClick={(e) => clickHandler(e, index)}
        >
          {e ? e : ""}
        </div>
      );
    })}
  </div>
  
   {(win || turnCount >= 9) && 
    <div className="restart" onClick={(e) => reset(e)}>
      Restart
    </div>}
    <div className="backButton" onClick={()=>navigate(-1)} >Goback</div>
   </>
  )

}

export default TicTac;