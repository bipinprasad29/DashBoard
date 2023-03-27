import { useState,useRef, useEffect } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar.css'


const Today = () => {

  const [value, setValue] = useState(new Date())
  const[reminder, setReminder] =useState(false)
  const [selectedDate, setSelectedDate] =useState(null)
  const[reminderData, setReminderData]= useState([])
  const formRef =useRef()
 
  const clickHandler=(e)=>{
  if(!reminder){
    setReminder(true)
    setValue(e) 
    
   }
  }

  useEffect(()=>setSelectedDate(new Date(value).toString().slice(0,10)),[value])


  const deleteReminder =(e,ind)=>{
    e.stopPropagation()
    const newReminderData = reminderData.filter((el,i)=>i!== ind && el)
    setReminderData(newReminderData)
    setValue(new Date())
  }

  const savingReminder =(e)=>{
    e.preventDefault()
   console.log(selectedDate);
   const formData = new FormData(formRef.current);
    const title = formData.get('title');
    const context = formData.get('context');
    const time = formData.get('time');
    if(title && selectedDate ){
      const data ={ Title: title,
                    Context: context,
                    Date: selectedDate,
                    Time: time,
                    Data: value
                  }
      setReminderData([...reminderData,data])
      
      setReminder(false)
      setValue(new Date())
    }
  }

  const time = new Date(),
    date = time.getDate(),
    dayIndex = time.getDay(),
    monthIndex = time.getMonth(),
    dayArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ],
    monthArr = [
      "January",
      "Feburaray",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    yrs = time.getFullYear(),
    hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours(),
    newhrs = hours >= 10 ? hours : `0${hours}`,
    newmnt =time.getMinutes() >= 10 ? time.getMinutes():`0${time.getMinutes()}`,
    amPm = time.getHours() > 12 ? "PM" : "AM",
    currentTime = `${newhrs}:${newmnt}`;
  
  
    return (
   <> 
     <div className="todayTime" >
        {dayArr[dayIndex]} {date} of {monthArr[monthIndex]} {yrs} {currentTime}
        {amPm}
      </div>

      <Calendar onChange={(e)=>clickHandler(e)}  value={value} />

      {reminder && 
       <form className="reminder" ref={formRef}>
         <h2>Set Reminder</h2> 
         <span>{selectedDate}</span>
         <input type="text" placeholder="Title"  name="title"/>
         <input type="text" placeholder="context" name="context"/>
         <input type="time" name="time" />

         <div>
           <button onClick={(e)=>savingReminder(e)}>Save</button>
           <button onClick={()=>setReminder(false)}>Cancel</button>
          </div>
        </form>}
 


    {reminderData.length > 0 && reminderData.map((elm,ind)=>{
      return(
        <div className="reminderData" key={ind} onClick={()=>setValue(elm.Data)}>
            <div>{elm.Title}</div>
            <div>{elm.Context}</div>
            <div>{elm.Date}</div>
            <div>{elm.Time}</div>
            <button onClick={(e)=>deleteReminder(e,ind)}>Delete</button>
      
        </div>
      )
    })}
    </>
  );
};

export default Today;
