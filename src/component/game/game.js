import React from 'react'
import { Link } from 'react-router-dom'
const Game = () => {

    const st ={
        marginTop:"20px",
        padding:"5px 20px",
        cursor:"pointer"
    }
    
  return (
     <div>
     <h2 style={{textAlign:"center",margin:"20px 0"}}>Select The Game U Want To Play</h2>     
     <div className='gamesLink' style={{display:"flex",justifyContent:"center", flexDirection:"column",alignItems:"center"}}>
     <Link to={'/game/tictac'} style={st}><div  className='game' >Tic-Tac-Toe</div></Link>
     <Link to={'/game/guessno'} style={st}><div className='game' >Guess Number</div></Link>
     
     
     </div>
    </div>
  )
}

export default Game
