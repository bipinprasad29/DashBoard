import "./inbox.css";
import { useNavigate } from "react-router-dom";


const Inbox = ({todos, setTodos,editData, setEditData}) => {
const navigate =useNavigate()

  const handleDelete =(id)=>{
    const newtodos = todos.filter((e)=>e.id !== id)
    setTodos([...newtodos])
  }
  const handleEdit =(arg)=>{
    setEditData(()=>[arg])
    navigate('/composer')
}



 
 return (
 <>{
   todos.length === 0 ? <div className="empty">Your Inbox is Empty</div> :
    todos.map((element)=>
   (<div className={`inbox ${element.id} `}  key ={element.id}>
    <div className="bullet">&#x27A3;</div>
      <div className="msg">{element.message}</div>
      <div className="date"></div>
      <div className="btn-container">
      <div className="edit btn" onClick={()=> handleEdit(element) }>
        <i className="fa-solid fa-pen-to-square"></i></div>
        <div className="delete btn" onClick={()=> handleDelete(element.id)}>
        <i className="fa-solid fa-trash"></i></div>
      </div>
      </div>)
      )
    }
    </>
    )
}

export default Inbox;
