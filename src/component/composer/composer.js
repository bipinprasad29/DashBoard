import React, { useRef, useEffect } from "react";

import "./composer.css";

const Composer = ({ todos, setTodos, editData, setEditData }) => {
  const messageRef = useRef(),
    titleRef = useRef();

  const ifEditIsClicked = () => {
    if (editData.length > 0) {
      titleRef.current.value = editData[0].title;
      messageRef.current.value = editData[0].message;
    }
  };

  useEffect(() => ifEditIsClicked(), [editData]);

  const reset = () => {
    titleRef.current.value = "Personel";
    messageRef.current.value = "";
    setEditData(() => []);
  };

  const savingToLocalStorage = () => {
    if (editData.length > 0) {
      const newtodos = todos.map((e) => {
        if (e.id === editData[0].id) {
          e.title = titleRef.current.value;
          e.message = messageRef.current.value;
          return e;
        } else {
          return e;
        }
      });

      setTodos(() => newtodos);
      console.log(`updated todos ${JSON.stringify(todos)}`);
    } else {
      const item = {
        title: titleRef.current.value,
        id: `${Date.now()}`,
        message: messageRef.current.value,
      };

      setTodos([...todos, item]);
    }
    reset();
  };

  return (
    <>
      <div className="composer">
        <div className="title">
          <select name="Category" ref={titleRef}>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
          </select>
        </div>
        <textarea className="textArea" ref={messageRef}></textarea>
        <div className="btn">
          <button
            className="save compbtn"
            onClick={() =>
              !messageRef.current.value == true ? null : savingToLocalStorage()
            }
          >
            Save
          </button>
          <button className="delete compbtn" onClick={() => reset()}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Composer;
